import RootNavigator from '../navigators/RootNavigator';

const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('login'),
);

export default function reducer(state = initialState, action) {
  return RootNavigator.router.getStateForAction(action, state) || state;
}
