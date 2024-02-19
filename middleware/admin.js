module.exports = function (req, res, next) {
  // 401 Unauthorized
  // 403 Forbidden

  if (!req.user.isAdmin) return res.status(403).send("Access denied.");

  next();
};
function chocolateFeast(n, c, m) {
  // Write your code here
  let wrappers = Math.floor(n / c);
  let totalCholate = Math.floor(n / c);
  while (wrappers >= m) {
    wrappers -= m;
    totalCholate++;
    wrappers++;
  }
  return totalCholate;
}
