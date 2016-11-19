// @flow
import qs from 'querystring';
import url from 'url';
import pathMatch from 'path-match';

export default (path: string, route: Object): Object => {
  const {pathname = '', query = ''} = url.parse(path);
  return {
    params: pathMatch()(route.path)(pathname),
    query: qs.parse(query)
  };
};
