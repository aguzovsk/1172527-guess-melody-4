import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistQuestionScreen from './artist-question-screen.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const question = {
  type: `artist`,
  song: {
    artist: ``,
    src: ``
  },
  options: [
    {
      artist: `one`,
      picture: `pic-one`,
    },
    {
      artist: `two`,
      picture: `pic-two`,
    },
    {
      artist: `three`,
      picture: `pic-three`,
    },
  ],
};

const mockEvent = {
  preventDefault() {}
};

describe(`ArtistQuestionScreen e2e test suite`, () => {
  it(`Checking that callback on Answer is called correctly `, () => {
    const onAnswer = jest.fn();
    const option = {
      artist: `one`,
      picture: `pic-one`,
    };
    const artistScreen = shallow(
        <ArtistQuestionScreen question={question} onAnswer={onAnswer} />
    );

    const optionInputs = artistScreen.find(`input`);
    const optionOne = optionInputs.at(0);

    optionOne.simulate(`change`, mockEvent);

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
    expect(onAnswer.mock.calls[0][1]).toMatchObject(option);
  });
});
