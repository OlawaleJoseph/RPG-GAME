import { getHighScores } from '../src/utils/fetchData';
import { saveNameTolocalstorage, getName } from '../src/utils/common';

describe('LocalStorage, () => {
  describe('Should get name from ', () => {
    it('Shoud sort highscores array in descending order', async () => {
      const res = await getHighScores();
      const sorted = res.sort((a, b) => b.score - a.score);
      expect(sortDescOrder(res)).toEqual(sorted);
    });
  });
});
