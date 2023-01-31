export const constants = {
  LOCAL_REDIRECT_SEARCH: 'LOCAL_REDIRECT_SEARCH',
  BASE_URL: process.env.URL_BACK_END_V3 || 'https://api.themoviedb.org/3',
  BASE_URL_IMAGE: process.env.BASE_URL_IMAGE || 'https://image.tmdb.org/t/p/original',
  API_KEY: process.env.API_KEY || '8e96ae057bb82164c94c0befb13dda21',
};

export const routesPath = {
  index: '/',
  login: '/login',
  splash: '/splash',
  browse: '/browse',
  TVshows: '/browse/genre/tv',
  movies: '/browse/genre/movie',
  latest: '/latest',
  search: '/search',
  myAccount: '/my-account',
};