const attachFiles = (req, res, next) => {
  req.body.image = req.files.image[0].filename;
  req.body.pdf = req.files.pdf[0].filename;

  return next();
};

module.exports = { attachFiles };
