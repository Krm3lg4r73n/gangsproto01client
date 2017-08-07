import { StackNavigator } from 'react-navigation';
import LoginScreen from '../components/LoginScreen';
import SomeScreen from '../components/SomeScreen';

const RootNavigator = StackNavigator({
  login: { screen: LoginScreen },
  some: { screen: SomeScreen, path: 'some/:name' },
});

export default RootNavigator;
