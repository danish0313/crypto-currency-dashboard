import React from 'react'
import {AppContext} from '../app/contextprovider';
import * as firebase from 'firebase';
import styled from 'styled-components';
const Welcome = (props) => {

  const  User = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr ;
  margin-top: 15px;

  `

  return (

<React.Fragment>
  <User>

<img alt = "profile-img" style={{borderRadius:'50%', width:'100px', height:'100px', marginTop:'20px', float:'left'}}
src={firebase.auth().currentUser.photoURL}/>

<h1>  Welcome {firebase.auth().currentUser.displayName} </h1>



</User>
    <AppContext.Consumer>

    {({firstVisit}) => (
    firstVisit ? <div>
  <h2> Please Select your Favorite Coins to begin. </h2> </div> : null

    )}

  </AppContext.Consumer>

      </React.Fragment>
  )
}

export default Welcome
