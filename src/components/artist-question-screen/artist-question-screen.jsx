import React from 'react';

const questionScreenHeader = () => {
  return <header className="game__header">
    <a className="game__back" href="#">
      <span className="visually-hidden">Сыграть ещё раз</span>
      <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
    </a>

    <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
      <circle className="timer__line" cx="390" cy="390" r="370"
        style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`} } />
    </svg>

    <div className="game__mistakes">
      <div className="wrong"></div>
      <div className="wrong"></div>
      <div className="wrong"></div>
    </div>
  </header>;
};

const artistMarkup = (name, idx) => {
  return <div key={`${name}-${idx}`} className="artist">
    <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-${idx}`} id={`answer-${idx}`} />
    <label className="artist__name" htmlFor={`answer-${idx}`}>
      <img className="artist__picture" src="http://placehold.it/134x134" alt={`${name}`} />
      {name}
    </label>
  </div>;
};

const artists = [`Пелагея`, `Краснознаменная дивизия имени моей бабушки`, `Lorde`];

const ArtistQuestionScreen = () => {
  return <section className="game game--artist">
    {questionScreenHeader()}

    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          <button className="track__button track__button--play" type="button"></button>
          <div className="track__status">
            <audio></audio>
          </div>
        </div>
      </div>

      <form className="game__artist">
        {artists.map((artist, idx) => artistMarkup(artist, idx))}
      </form>
    </section>
  </section>;
};

export default ArtistQuestionScreen;
