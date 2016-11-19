// @flow

// import createRouter from 'super-tiny-hash-router'

// const router = createRouter()

// router.add('/user', () => {
//   document.innerHTML = 'user'
// })

// router.run()

export default function (): Object {
  let routes: Array<Object> = [];
  const middlewares: Array<Function> = [];

  const router = {
    add(path: string, fn: () => void) {
      routes.push({path, fn});
    },
    remove(path: string) {
      routes = routes.filter(route => {
        return route.path !== path;
      });
    },
    init() {
      const path = getHashPath();
      this.go(path);
    },
    go(path: string) {
      const newHash = path ? `#${path}` : '#/';
      if (newHash === location.hash) {
        this.execute(path);
      } else {
        location.hash = newHash;
      }
    },
    execute(path: string): void {
      const route: Object = findOne(routes, path);

      const context: any = middlewares.reduce((current, next) => {
        current = next(current, route);
        return current;
      }, path);

      if (route) {
        route.fn(context);
      } else {
        const notFound: Object = findOne(routes, '*');
        if (notFound) {
          notFound.fn(context);
        }
      }
    },
    use(middleware) {
      middlewares.push(middleware);
    }
  };

  window.onhashchange = (): void => {
    const path: string = getHashPath();
    router.execute(path);
  };

  return router;
}

function findOne(routes: Array<Object>, path: string) {
  return routes.filter(route => {
    return route.path === path.substr(0, path.indexOf('?'));
  })[0];
}

function getHashPath(): string {
  return location.hash.substr(1);
}
