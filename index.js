import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/app';

// const App = () => <Text>App</Text>

AppRegistry.registerComponent(appName, () => App);
