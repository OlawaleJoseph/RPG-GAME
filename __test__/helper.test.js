import '@babel/polyfill';

import { getHighScores } from '../src/utils/fetchData';
import { sortDescOrder } from '../src/utils/common';

describe('Helper Methods', () => {
  describe('Sort High scores', () => {
    it('Shoud sort highscores array in descending order', async () => {
      const res = await getHighScores();
      const sorted = res.sort((a, b) => b.score - a.score);
      expect(sortDescOrder(res)).toEqual(sorted);
    });
  });
});
