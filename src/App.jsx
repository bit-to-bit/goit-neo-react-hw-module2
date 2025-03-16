import Description from './components/description/Description';
import Feedback from './components/feedback/Feedback';
import Notification from './components/notification/Notification';
import Options from './components/options/Options';
import { useState, useEffect } from 'react';
import { feedbackInitialState, allOptions } from './constants';
import { positiveOptions } from './constants';
import { getFeedbackInitialState } from './util';

const App = () => {
  const [feedback, setFeedback] = useState(getFeedbackInitialState);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const handleClickFeedbackBtn = optionName => {
    setFeedback({
      ...feedback,
      [optionName]: feedback[optionName] + 1,
    });
  };

  const handleClickResetBtn = () => {
    setFeedback(feedbackInitialState);
  };

  const totalFeedbacks = allOptions.reduce(
    (acc, option) => acc + feedback[option],
    0
  );

  const totalPositiveFeedbacks = positiveOptions.reduce(
    (acc, option) => acc + feedback[option],
    0
  );

  const positiveFeedbackRatio =
    Math.round((totalPositiveFeedbacks / totalFeedbacks) * 100) + '%';

  return (
    <>
      <Description />
      <Options
        handleClickFeedbackBtn={handleClickFeedbackBtn}
        handleClickResetBtn={handleClickResetBtn}
        totalFeedbacks={totalFeedbacks}
      />
      {totalFeedbacks === 0 && <Notification />}
      {totalFeedbacks > 0 && (
        <Feedback
          feedback={feedback}
          totalFeedbacks={totalFeedbacks}
          positiveFeedbackRatio={positiveFeedbackRatio}
        />
      )}
    </>
  );
};

export default App;
