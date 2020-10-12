const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ydEbbe4hrTPWr7GebI0f/scores/';

export const getHighScores = async () => {
  const res = await fetch(url);
  const { result } = await res.json();
  console.log(result);
  return result;
};

export const postHighScore = async (name, score) => {
  const data = { user: name, score };
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.status === 201;
};