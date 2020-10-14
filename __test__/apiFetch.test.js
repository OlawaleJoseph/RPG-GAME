import '@babel/polyfill';

import { getHighScores, postHighScore } from '../src/utils/fetchData';

describe('API Requests', () => {
  describe('Post', () => {
    it('Shoud Post a new highscore', async () => {
      const res = await postHighScore('test', 20);
      expect(res).toBe(true);
    });

    it('Shoud not post new high score without name', async () => {
      const res = await postHighScore(20);
      expect(res).toBe(false);
    });

    it('Shoud not post new high score without score', async () => {
      const res = await postHighScore('tester');
      expect(res).toBe(false);
    });
  });

  describe('Get', () => {
    it('Shoud get all highscores', async () => {
      const res = await getHighScores();
      expect(Array.isArray(res)).toBe(true);
      expect(res.length).toBeGreaterThan(0);
    });
  });
});
