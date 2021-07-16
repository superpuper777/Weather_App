export const upperCase = (str) => {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
};

export const getFormatedDate = (txtDate) => {
  const formatedDate = new Date(txtDate).toDateString().split(' ');

  return `${formatedDate[0]}, ${formatedDate[1]} ${formatedDate[2]}`;
};

export const getTime = (txtDate) => {
  const time = new Date(txtDate).getHours();

  return `${time}:00`;
};

export const generateId = () => {
  return `_ ${Math.random().toString(36).substr(2, 9)}`;
};

export const cleanedArray = (arr) => {
  return arr.filter((el) => el !== null);
};
