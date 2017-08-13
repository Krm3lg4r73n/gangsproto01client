import { StackNavigator } from 'react-navigation';
import LoginScreen from '../components/LoginScreen';
import WorldScreen from '../components/WorldScreen';
import DebugScreen from '../components/DebugScreen';

const RootNavigator = StackNavigator({
  login: { screen: LoginScreen },
  world: { screen: WorldScreen },
  debug: { screen: DebugScreen, path: 'debug/:name' },
});

export default RootNavigator;
