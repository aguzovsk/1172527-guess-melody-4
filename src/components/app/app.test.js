import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

describe(`Test app component`, () => {
  it(`<App errorCount={3} gameTime={7} onWelcomeButtonClick={jest.fn()}/>}`, () => {
    const tree = renderer.create(
        <App
          errorCount={3}
          gameTime={7}
          onWelcomeButtonClick={jest.fn()}
        />
    );
    expect(tree).toMatchSnapshot();
  });
});
