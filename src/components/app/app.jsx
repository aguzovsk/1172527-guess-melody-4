import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';

const App = (props) => {
  const {gameTime, errorCount, onWelcomeButtonClick} = props;

  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <WelcomeScreen
          time={gameTime}
          errorCount={errorCount}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
      </Route>
      <Route exact path="/dev-artist">
        <ArtistQuestionScreen></ArtistQuestionScreen>
      </Route>
      <Route>
        <GenreQuestionScreen></GenreQuestionScreen>
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired
};

export default App;
