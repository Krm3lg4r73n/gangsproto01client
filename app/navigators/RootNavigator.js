import { StackNavigator } from 'react-navigation';
import LoginScreen from '../components/LoginScreen';
import WorldScreen from '../components/WorldScreen';
import PlayerScreen from '../components/PlayerScreen';
import DebugScreen from '../components/DebugScreen';

const RootNavigator = StackNavigator({
  login: { screen: LoginScreen },
  world: { screen: WorldScreen },
  player: { screen: PlayerScreen },
  debug: { screen: DebugScreen },
});

export default RootNavigator;
