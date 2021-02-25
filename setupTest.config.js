// enzyme adapter configuration
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new Adapter() });
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

// link to test script in package.json
// {
//   "jest": {
//    "setupTestFrameworkScriptFile": "<rootDir>/path/to/setupTest.js",
//   }
// }
