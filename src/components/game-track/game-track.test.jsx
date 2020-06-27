import React from 'react';
import GameTrack from './game-track.jsx';
import renderer from 'react-test-renderer';

it(`Game track snapshot test.`, () => {
  const tree = renderer.create(<GameTrack
    src="https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg"
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
