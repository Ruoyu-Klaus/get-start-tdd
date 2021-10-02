/*
 * @Author: Ruoyu
 * @FilePath: /cicd-github-actions/client/utiles/__test__/arrayify.test.js
 */
const arrayify = require('../arrayify.js');

it('returns an empty array when enter nothing', () => {
  const result = arrayify();
  expect(result).toEqual([]);
});
