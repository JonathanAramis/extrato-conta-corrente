const proxy = [
  {
    context: '/api',
    target: 'https://localhost:44329/',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;
