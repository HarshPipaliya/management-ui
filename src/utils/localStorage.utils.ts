export const setLocalItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getLocalItem = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string);
};
export const removeLocalItem = (key: string) => {
  localStorage.removeItem(key);
};
