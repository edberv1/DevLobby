import React from 'react';
import './Polls.scss';

const Polls = () => {
  return (
    <div className="poll">
      {/* Question 1 */}
      <div className="poll-question">
        What version of React do you primarily use in your projects?
      </div>
      <div className="poll-options">
        <div className="poll-option">
          <input type="radio" name="react-version" />
          <label>React 16</label>
        </div>
        <div className="poll-option">
          <input type="radio" id="react-17" name="react-version" />
          <label htmlFor="react-17">React 17</label>
        </div>
        <div className="poll-option">
          <input type="radio" id="react-18" name="react-version" />
          <label>React 18 (if released)</label>
        </div>
      </div>
      <button className="vote-button">Vote</button>
      <div className="poll-results">
        <div className="poll-result">React 16</div>
        <div className="poll-result">React 17</div>
        <div className="poll-result">React 18 (if released)</div>
      </div>

      {/* Question 2 */}
      <div className="poll-question">
        What state management solution do you prefer with React?
      </div>
      <div className="poll-options">
        <div className="poll-option">
          <input type="radio" name="state-management" />
          <label>Redux</label>
        </div>
        <div className="poll-option">
          <input type="radio" id="context-api" name="state-management" />
          <label htmlFor="context-api">React Context API</label>
        </div>
        <div className="poll-option">
          <input type="radio" id="mobx" name="state-management" />
          <label>MobX</label>
        </div>
      </div>
      <button className="vote-button">Vote</button>
      <div className="poll-results">
        <div className="poll-result">Redux</div>
        <div className="poll-result">React Context API</div>
        <div className="poll-result">MobX</div>
      </div>

      {/* Question 3 */}
      <div className="poll-question">
        Do you prefer functional components or class components in React?
      </div>
      <div className="poll-options">
        <div className="poll-option">
          <input type="radio" name="component-type" />
          <label>Functional Components</label>
        </div>
        <div className="poll-option">
          <input type="radio" id="class-components" name="component-type" />
          <label htmlFor="class-components">Class Components</label>
        </div>
        <div className="poll-option">
          <input type="radio" id="both" name="component-type" />
          <label>Both</label>
        </div>
      </div>
      <button className="vote-button">Vote</button>
      <div className="poll-results">
        <div className="poll-result">Functional Components</div>
        <div className="poll-result">Class Components</div>
        <div className="poll-result">Both</div>
      </div>

      {/* Question 4 */}
      <div className="poll-question">
        Which React Hooks do you use most frequently?
      </div>
      <div className="poll-options">
        <div className="poll-option">
          <input type="checkbox" id="useState" name="hooks" />
          <label htmlFor="useState">useState</label>
        </div>
        <div className="poll-option">
          <input type="checkbox" id="useEffect" name="hooks" />
          <label htmlFor="useEffect">useEffect</label>
        </div>
        <div className="poll-option">
          <input type="checkbox" id="useContext" name="hooks" />
          <label htmlFor="useContext">useContext</label>
        </div>
      </div>
      <button className="vote-button">Vote</button>
      <div className="poll-results">
        <div className="poll-result">useState</div>
        <div className="poll-result">useEffect</div>
        <div className="poll-result">useContext</div>
      </div>

      {/* Question 5 */}
      <div className="poll-question">
        How do you handle routing in your React applications?
      </div>
      <div className="poll-options">
        <div className="poll-option">
          <input type="radio" name="routing" />
          <label>React Router</label>
        </div>
        <div className="poll-option">
          <input type="radio" id="reach-router" name="routing" />
          <label htmlFor="reach-router">Reach Router</label>
        </div>
        <div className="poll-option">
          <input type="radio" id="other-routing" name="routing" />
          <label>Other</label>
        </div>
      </div>
      <button className="vote-button">Vote</button>
      <div className="poll-results">
        <div className="poll-result">React Router</div>
        <div className="poll-result">Reach Router</div>
        <div className="poll-result">Other</div>
      </div>

      {/* Question 6 */}
      <div className="poll-question">
        What testing library do you prefer for testing React components?
      </div>
      <div className="poll-options">
        <div className="poll-option">
          <input type="radio" name="testing-library" />
          <label>Jest</label>
        </div>
        <div className="poll-option">
          <input type="radio" id="testing-library-react" name="testing-library" />
          <label htmlFor="testing-library-react">Testing Library for React</label>
        </div>
        <div className="poll-option">
          <input type="radio" id="other-testing-library" name="testing-library" />
          <label>Other</label>
        </div>
      </div>
      <button className="vote-button">Vote</button>
      <div className="poll-results">
        <div className="poll-result">Jest</div>
        <div className="poll-result">Testing Library for React</div>
        <div className="poll-result">Other</div>
      </div>

      {/* Question 7 */}
      <div className="poll-question">
        How do you manage styles in your React projects?
      </div>
      <div className="poll-options">
        <div className="poll-option">
          <input type="radio" name="styles-management" />
          <label>Inline Styles</label>
        </div>
        <div className="poll-option">
          <input type="radio" id="css-modules" name="styles-management" />
          <label htmlFor="css-modules">CSS Modules</label>
        </div>
        <div className="poll-option">
          <input type="radio" id="styled-components" name="styles-management" />
          <label>Styled Components</label>
        </div>
      </div>
      <button className="vote-button">Vote</button>
      <div className="poll-results">
        <div className="poll-result">Inline Styles</div>
        <div className="poll-result">CSS Modules</div>
        <div className="poll-result">Styled Components</div>
      </div>

      {/* Question 8 */}
      <div className="poll-question">
        What is your preferred deployment platform for React applications?
      </div>
      <div className="poll-options">
        <div className="poll-option">
          <input type="radio" name="deployment" />
          <label>Netlify</label>
        </div>
        <div className="poll-option">
          <input type="radio" id="vercel" name="deployment" />
          <label htmlFor="vercel">Vercel</label>
        </div>
        <div className="poll-option">
          <input type="radio" id="heroku" name="deployment" />
          <label>Heroku</label>
        </div>
      </div>
      <button className="vote-button">Vote</button>
      <div className="poll-results">
        <div className="poll-result">Netlify</div>
        <div className="poll-result">Vercel</div>
        <div className="poll-result">Heroku</div>
      </div>

      {/* Question 9 */}
      <div className="poll-question">
        Which React UI library or component library do you frequently use?
      </div>
      <div className="poll-options">
        <div className="poll-option">
          <input type="radio" name="ui-library" />
          <label>Material-UI</label>
        </div>
        <div className="poll-option">
          <input type="radio" id="ant-design" name="ui-library" />
          <label htmlFor="ant-design">Ant Design</label>
        </div>
        <div className="poll-option">
          <input type="radio" id="chakra-ui" name="ui-library" />
          <label>Chakra UI</label>
        </div>
      </div>
      <button className="vote-button">Vote</button>
      <div className="poll-results">
        <div className="poll-result">Material-UI</div>
        <div className="poll-result">Ant Design</div>
        <div className="poll-result">Chakra UI</div>
      </div>

      {/* Question 10 */}
      <div className="poll-question">
        How do you handle internationalization (i18n) in your React projects?
      </div>
      <div className="poll-options">
        <div className="poll-option">
          <input type="radio" name="i18n" />
          <label>react-i18next</label>
        </div>
        <div className="poll-option">
          <input type="radio" id="formatjs" name="i18n" />
          <label htmlFor="formatjs">FormatJS (React Intl)</label>
        </div>
        <div className="poll-option">
          <input type="radio" id="other-i18n" name="i18n" />
          <label>Other</label>
        </div>
      </div>
      <button className="vote-button">Vote</button>
      <div className="poll-results">
        <div className="poll-result">react-i18next</div>
        <div className="poll-result">FormatJS (React Intl)</div>
        <div className="poll-result">Other</div>
      </div>
    </div>
  );
}

export default Polls;
