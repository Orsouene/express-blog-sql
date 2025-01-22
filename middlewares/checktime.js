function checktime(req, res, next) {
  let currentTime = new Date().toLocaleString();
  console.log("ciao");
  console.log(currentTime);
  next();
}

module.exports = checktime;
