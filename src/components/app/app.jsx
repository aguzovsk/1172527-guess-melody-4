import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {gameTime, errorCount, onWelcomeButtonClick} = props;

  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
    onWelcomeButtonClick={onWelcomeButtonClick}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired
};

export default App;
