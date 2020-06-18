import React from 'react';
import PropTypes from 'prop-types';
import QuestionScreenHeader from '../question-screen-header/questioin-screen-header.jsx';
import GameTrack from '../game-track/game-track.jsx';
import {GameType} from '../../const.js';

const ArtistQuestionScreen = (props) => {
  const {onAnswer, question} = props;
  const {options, song} = question;

  return <section className="game game--artist">
    <QuestionScreenHeader/>

    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <GameTrack src={song.src} />

      <form className="game__artist">
        {options.map((option, idx) => (
          <div key={option.artist} className="artist">
            <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-${idx}`} id={`answer-${idx}`}
              onChange={(evt) => {
                evt.preventDefault();
                onAnswer(question, option);
              }}
            />
            <label className="artist__name" htmlFor={`answer-${idx}`}>
              <img className="artist__picture" src={option.picture} alt={option.artist} />
              {option.artist}
            </label>
          </div>
        ))}
      </form>
    </section>
  </section>;
};

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    options: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
};

export default ArtistQuestionScreen;
