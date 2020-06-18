import React from 'react';
import PropTypes from 'prop-types';

const GameTrack = (props) => {
  const {src} = props;
  return <div className="game__track">
    <div className="track">
      <button className="track__button track__button--play" type="button"></button>
      <div className="track__status">
        <audio src={src}></audio>
      </div>
    </div>
    {props.children}
  </div>;
};

GameTrack.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default GameTrack;
