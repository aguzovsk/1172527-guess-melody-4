import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Enzyme test welcome-screen component`, () => {
  it(`WelcomeScreen click-check`, () => {
    const mockFn = jest.fn();
    const welcomeScreen = shallow(
        <WelcomeScreen
          errorCount={3}
          time={7}
          onWelcomeButtonClick={mockFn}
        />
    );
    const welcomeButton = welcomeScreen.find(`button.welcome__button`);

    welcomeButton.simulate(`click`);
    expect(mockFn.mock.calls.length).toBe(1);
  });
});
