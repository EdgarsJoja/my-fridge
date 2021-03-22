const saveData = (key: string, data: string) => {
  localStorage.setItem(key, data);
};

const getData = (key: string) => {
  return localStorage.getItem(key);
}

export {
  saveData,
  getData
};
