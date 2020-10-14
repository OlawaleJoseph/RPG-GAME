export const saveNameTolocalstorage = (value = 'Anonymous') => localStorage.setItem('playerName', value);

export const getName = () => localStorage.getItem('playerName').toUpperCase();
