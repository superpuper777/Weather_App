export const upperCase = (str) => {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
};

export const getFormatedDate = (txtDate) => {
  const formatedDate = new Date(txtDate).toDateString().split(' ');

  return `${formatedDate[0]}, ${formatedDate[1]} ${formatedDate[2]}`;
};
