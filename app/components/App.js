import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import RootNavigator from '../navigators/RootNavigator';

const App = ({ dispatch, navigation: state }) => (
  <RootNavigator navigation={addNavigationHelpers({ dispatch, state })}/>
);

const mapStateToProps = ({ navigation }) => ({ navigation });
export default connect(mapStateToProps)(App);
