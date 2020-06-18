import React from 'react';
import QuestionScreenHeader from '../question-screen-header/questioin-screen-header.jsx';
import PropTypes from 'prop-types';
import GameTrack from '../game-track/game-track.jsx';
import {GameType} from '../../const.js';

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: new Array(4).fill(false)
    };
  }

  render() {
    const {onAnswer, question} = this.props;
    const {answers} = this.state;
    const {options, genre} = question;

    return <section className="game game--genre">
      <QuestionScreenHeader />

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer(question, this.state.answers);
          }}
        >
          {options.map((option, idx) => <GameTrack key={idx} src={option.src}>
            <div className="game__answer">
              <input className="game__input visually-hidden"
                type="checkbox" name="answer"
                value={`answer-${idx}`}
                id={`answer-${idx}`}
                checked={answers[idx]}
                onChange={(evt) => {
                  const value = evt.target.checked;

                  this.setState({
                    answers: [...answers.slice(0, idx), value, ...answers.slice(idx + 1)]
                  });
                }}
              />
              <label className="game__check" htmlFor={`answer-${idx}`}>Отметить</label>
            </div>
          </GameTrack>)}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>;
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
};

export default GenreQuestionScreen;
