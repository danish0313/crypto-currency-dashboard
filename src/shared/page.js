import React from 'react'
import {AppContext} from '../app/contextprovider';


const Page = (props) => {
  return (
    <AppContext.Consumer>
{({page}) => {

  if(page !== props.name) {

    return  null;
  }

  return <div> {props.children} </div>
}}
    </AppContext.Consumer>

  )
}

export default Page
