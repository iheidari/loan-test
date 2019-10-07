import queryString from 'query-string';

export const getLocation = () => {
  let currentLocation = {
    origin: '/',
    pathname: '/',
    host: '',
    hostname: '',
    search: {},
  };

  if (typeof window !== 'undefined') {
    const location = window.location;
    currentLocation = {
      ...location,
      search: location.search ? queryString.parse(location.search) : {},
    };
  }
  return currentLocation;
};
