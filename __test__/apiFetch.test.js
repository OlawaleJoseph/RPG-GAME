import '@babel/polyfill';

import { getHighScores, postHighScore } from '../src/utils/fetchData';

describe('API Requests', () => {
  describe('Post', () => {
    it('Shoud Post a new highscore', async () => {
      const res = await postHighScore('test', 20);
      expect(res).toBe(true);
    });
  });

  describe('Get', () => {

  });
});
