const attachFiles = (req, res, next) => {
  if (req.files) {
    if (req.files.image) {
      req.body.image = req.files.image[0].filename;
    }
  }
  if (req.files) {
    if (req.files.pdf) {
      req.body.pdf = req.files.pdf[0].filename;
    }
  }
  return next();
};

module.exports = { attachFiles };
