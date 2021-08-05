export const SELECT_METRIC = 'SELECT_METRIC';

export const SELECT_IMPERIAL = 'SELECT_IMPERIAL';

export const selectMetricAction = () => {
  return {
    type: SELECT_METRIC,
  };
};

export const selectImperialAction = () => {
  return {
    type: SELECT_IMPERIAL,
  };
};
