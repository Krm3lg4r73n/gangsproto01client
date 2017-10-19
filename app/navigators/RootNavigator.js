import { StackNavigator, TabNavigator } from 'react-navigation';
import LoginScreen from '../components/LoginScreen';
import EnterWorldScreen from '../components/EnterWorldScreen';
import CreatePlayerScreen from '../components/CreatePlayerScreen';
import PlayerScreen from '../components/PlayerScreen';
import SceneScreen from '../components/SceneScreen';
import TravelScreen from '../components/TravelScreen';
import DebugScreen from '../components/DebugScreen';

const WorldNavigator = TabNavigator(
  {
    scene: { screen: SceneScreen },
    player: { screen: PlayerScreen },
    travel: { screen: TravelScreen },
    debug: { screen: DebugScreen },
  },
  {
    swipeEnabled: true,
  },
);

const RootNavigator = StackNavigator({
  login: { screen: LoginScreen },
  enterWorld: { screen: EnterWorldScreen },
  createPlayer: { screen: CreatePlayerScreen },
  world: {
    screen: WorldNavigator,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

export default RootNavigator;
