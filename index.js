/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Core from './src/routes/Core.route';

AppRegistry.registerComponent(appName, () => Core);
