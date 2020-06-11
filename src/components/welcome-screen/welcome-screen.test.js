import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

describe(`Test-render welcome-screen component`, () => {
  it(`<WelcomeScreen errorsCount={12} time={30}/>`, () => {
    const tree = renderer.create(
        <WelcomeScreen
          errorCount={12}
          time={30}
          onWelcomeButtonClick={jest.fn()}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
