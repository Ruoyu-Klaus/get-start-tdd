/*
 * @Author: Ruoyu
 * @FilePath: /cicd-github-actions/client/utiles/arrayify.js
 */
module.exports = function arrayify(args = []) {
  return Array.isArray(args) ? args : [args];
};
