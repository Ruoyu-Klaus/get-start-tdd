/*
 * @Author: Ruoyu
 * @FilePath: /cicd-github-actions/client/utiles/__test__/arrayify.test.js
 */
const arrayify = require('../arrayify.js');

it('returns an empty array when enter nothing', () => {
  const result = arrayify();
  expect(result).toEqual([]);
});

it('returns array with one element when enter a parameter', () => {
  const result = arrayify('one');
  expect(result).toEqual(['one']);
});

it('returns array of elements when enter a array parameter', () => {
  const result = arrayify([1, 2, 3]);
  expect(result).toEqual([1, 2, 3]);
});
