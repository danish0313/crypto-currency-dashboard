import React from 'react';
import './App.css';
import Settings from '../settings';
import Applayout from './applayout.js';
import Bar from './appbar.js';
import Content from '../shared/content'
import ContextProvider from './contextprovider';
import DashBoard from '../dashboard';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as firebase from 'firebase';



  firebase.initializeApp({
    apiKey: 'AIzaSyB6Wjd-5nIyoDvxOI8fqH4GarqzorvQcLo',
    authDomain: 'dashboard-3178d.firebaseapp.com'

  });





class App  extends React.Component {

  constructor(props){
super(props);
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );


  }


  state = {
      isSignedIn: false // Local signed-in state.
    };


    // Configure FirebaseUI.
      uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // We will display Google and Facebook as auth providers.
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          // Avoid redirects after sign-in.
          signInSuccessWithAuthResult: () => false
        }
      };

// Listen to the Firebase Auth state and set the local state.
componentDidMount() {


      }

      // Make sure we un-register Firebase observers when the component unmounts.
        componentWillUnmount() {
          this.unregisterAuthObserver();
        }


  render () {

let content = null;



if(this.state.isSignedIn === true ) {

 content = (<Applayout><Content><Bar/>   <Settings/> <DashBoard/> </Content></Applayout>)

} else {

  content = ( <React.Fragment>

    <div className= 'contents'>

  <center>
      <h1>Welcome to cryptoDash Please Login to Continue!</h1>
    <div className="login">
          <p style={{padding:'30px'}}>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      </center>
    </div>
   </React.Fragment> )


}

    return (

      <div>
      <ContextProvider>

{content}

      </ContextProvider>


      </div>


    )
  }
}

export default App ;
