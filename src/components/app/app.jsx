import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import {GameType} from '../../const.js';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1
    };

    this._incrementState = this._incrementState.bind(this);
  }

  _incrementState() {
    this.setState((prevState) => ({
      step: prevState.step + 1
    }));
  }

  _renderGameScreen() {
    const {gameTime, errorCount, questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return <WelcomeScreen
        time={gameTime}
        errorCount={errorCount}
        onWelcomeButtonClick={this._incrementState}
      />;
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return <ArtistQuestionScreen
            question={question}
            onAnswer={this._incrementState}
          />;
        case GameType.GENRE:
          return <GenreQuestionScreen
            question={question}
            onAnswer={this._incrementState}
          />;
      }
    }

    return null;
  }

  render() {
    const {questions} = this.props;

    return <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {this._renderGameScreen()}
        </Route>
        <Route exact path="/artist">
          <ArtistQuestionScreen question={questions[1]} onAnswer={() => {}} />
        </Route>
        <Route exact path="/genre">
          <GenreQuestionScreen question={questions[0]} onAnswer={() => {}} />
        </Route>
      </Switch>
    </BrowserRouter>;
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
