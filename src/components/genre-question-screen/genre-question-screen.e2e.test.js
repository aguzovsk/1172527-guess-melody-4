import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreQuestionScreen from './genre-question-screen.jsx';

configure({adapter: new Adapter()});

const question = {
  type: `genre`,
  genre: `rock`,
  options: [
    {
      src: `path`,
      genre: `rock`,
    },
    {
      src: `path`,
      genre: `jazz`,
    },
    {
      src: `path`,
      genre: `jazz`,
    },
    {
      src: `path`,
      genre: `blues`,
    },
  ],
};

const mockEvent = {
  preventDefault() {}
};

it(`When user answers genre question form is not sent`, () => {
  const onAnswer = jest.fn();
  const genreQuestion = shallow(
      <GenreQuestionScreen question={question} onAnswer={onAnswer} />
  );
  const form = genreQuestion.find(`form`);
  const formSendPrevention = jest.fn();
  form.simulate(`submit`, {
    preventDefault: formSendPrevention
  });

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});

it(`Option selected by user and passed to callback is consistent with answers prop`, () => {
  const onAnswer = jest.fn((...args) => [...args]);
  const answers = [false, true, false, false];
  const genreQuestion = shallow(
      <GenreQuestionScreen onAnswer={onAnswer} question={question}/>
  );
  const form = genreQuestion.find(`form`);
  const inputTwo = genreQuestion.find(`input`).at(1);

  inputTwo.simulate(`change`, {
    target: {checked: true}
  });
  form.simulate(`submit`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(answers);
  expect(genreQuestion.find(`input`).map((it) => it.prop(`checked`)))
    .toEqual(answers);
});
