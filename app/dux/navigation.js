import { NavigationActions } from 'react-navigation';
import RootNavigator from '../navigators/RootNavigator';

const initialState = RootNavigator.router.getStateForAction(
  NavigationActions.navigate({ routeName: 'login', params: {} }),
);

export default function reducer(state = initialState, action) {
  return RootNavigator.router.getStateForAction(action, state) || state;
}

export function navigate(path, params) {
  return NavigationActions.navigate({ routeName: path, params });
}
