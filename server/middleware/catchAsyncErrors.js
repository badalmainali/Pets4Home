module.exports = (asyncfunc) => (req, res, next) => {
  Promise.resolve(asyncfunc(req, res, next)).catch(next);
};
