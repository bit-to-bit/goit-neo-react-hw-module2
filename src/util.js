import { feedbackInitialState } from './constants';

export const getFeedbackInitialState = () => {
  const localData = localStorage.getItem('feedback');
  if (localData) {
    return JSON.parse(localData);
  }
  return feedbackInitialState;
};

export default getFeedbackInitialState;
