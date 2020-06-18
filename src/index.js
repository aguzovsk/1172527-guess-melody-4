import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import questions from './mocks/questions.js';

const init = () => {
  const settings = {
    gameTime: 5,
    errorCount: 3,
    onWelcomeButtonClick: () => {},
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
        onWelcomeButtonClick={settings.onWelcomeButtonClick}
        questions={questions}
      />,
      document.querySelector(`#root`)
  );
};

init();
