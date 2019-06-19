module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    'af242fd73e904c80172f3bdd9e2a4105880c6442175f86e7aa66ef5454cb5a9c',
  SECRET:
    process.env.SECRET ||
    '6d1d5735d3dec5bfe01c93e94a25d4cdbb41cb49e5e1e22a254421f4990aba90',
  CALLBACK_URL: process.env.CALLBACK_URL || 'http://localhost:3000'
};
