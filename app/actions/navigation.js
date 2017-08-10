import { NavigationActions } from 'react-navigation';

export function navigate(path, params) {
  return NavigationActions.navigate({ routeName: path, params });
}
