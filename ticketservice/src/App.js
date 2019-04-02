import React, { Component } from 'react';
import HoldSeats from './components/HoldSeats'
import ReserveSeats from './components/ReserveSeats'
import ConfirmSeats from './components/ConfirmSeats'
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react'
import federatedConfig from './federatedConfig'

class App extends Component {
  render() {
    return (
        <div className="App">
            <HoldSeats />
        </div>
    );
  }
}

const theme = {
  sectionHeader: { ...AmplifyTheme.sectionHeader, backgroundColor: "#007EB9" },
  button: { 'backgroundColor': "#007EB9" },
  signInButtonIcon: { 'display': 'none' },
  signInButtonContent: { 'font-family': 'Helvetica Neue' },
};

export default withAuthenticator(App, true, [], federatedConfig, theme);
