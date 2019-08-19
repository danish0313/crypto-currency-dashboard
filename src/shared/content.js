import React from 'react'
import {AppContext} from '../app/contextprovider';

const Content = (props) => {

  return (

  <div>
  <AppContext.Consumer>
  {
    ({coinList , firstVisit , Prices }) => {

if(!coinList) {

 return <center><div> Coins are Loading... </div> </center>

}

if(!Prices &&  !firstVisit) {

 return <center><div> Prices are Loading... </div> </center>

}






return  <div> { props.children} </div>
}

}
  </AppContext.Consumer>

    </div>

  )
}

export default Content;
