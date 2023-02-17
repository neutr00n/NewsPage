export const setStorage = (key, value) => {
  try {
    const stringifyValue = JSON.stringify(value);
    localStorage.setItem(key, stringifyValue);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

export const getStorage = key => {
  try {
    const storageValue = localStorage.getItem(key);
    return storageValue === null ? undefined : JSON.parse(storageValue);
  } catch (error) {
    console.error(error.statusText);
  }
};
