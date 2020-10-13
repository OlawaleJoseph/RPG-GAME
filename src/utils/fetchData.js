import fetch from 'node-fetch';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ydEbbe4hrTPWr7GebI0f/scores/';

export const getHighScores = async () => {
  try {
    const res = await fetch(url);
    const { result } = await res.json();
    return result;
  } catch (error) {
    return error.name;
  }
};

export const postHighScore = async (name, score) => {
  const data = { user: name, score };
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(response)
    return response.status === 201;
  } catch (error) {
    console.log(error)
    return error.name;
  }
};