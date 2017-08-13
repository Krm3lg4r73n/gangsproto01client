import { Alert } from 'react-native';

export default function showError({ type, description }) {
  Alert.alert(`Error: ${type}`, description);
}
