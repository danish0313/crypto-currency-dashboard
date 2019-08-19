
import React from 'react'
import styled , {css} from 'styled-components';
import {AppContext} from './contextprovider';
import * as firebase from 'firebase';

const Bar = styled.div`
display: grid ;
grid-template-columns: 180px auto 100px 100px 100px;
`

const Logo = styled.div`
font-size: 1.5em ;
`



const ControlButton = styled.div`
cursor : pointer ;


${props => props.active && css`
    text-shadow: 0px 0px 60px #03ff03;

  `}


`

function ButtonElement({name , active}) {

return (

  <AppContext.Consumer>
  {({page ,setpage }) => (

      <ControlButton active={page === name} onClick = {() => setpage(name)}>   {name} </ControlButton>
    )}



  </AppContext.Consumer>
)


}





const Appbar = (props) => {
  return (

    <Bar>

    <Logo>
    Crypto-Dash
    </Logo>


  <div></div>
    <AppContext.Consumer>

{({firstVisit}) =>
  !firstVisit ?  <ButtonElement name="DashBoard" active  />
  :  null}
  </AppContext.Consumer>
<ButtonElement name="Settings"  />

 <a  href="#" style={{cursor:'pointer' , color:'white' , textDecoration: 'none'}} onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </Bar>


  )
}

export default Appbar;
