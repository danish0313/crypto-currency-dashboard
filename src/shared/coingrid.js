import React from 'react'
import {AppContext} from '../app/contextprovider';
import styled from 'styled-components';
import CoinTile  from './cointile';

const Coins = styled.div`
display: grid ;
margin-top: 50px;
grid-template-columns: repeat(auto-fill,minmax(130px , 1fr) );
grid-gap: 15px;
margin-bottom: 20px;
cursor:pointer;

`
//lower cons searching
function lowercoins(SearchedCoins ,coinList ) {

return ( SearchedCoins  && Object.keys(SearchedCoins) ||  Object.keys(coinList).slice(0, 100) );


}


function DisplaycoinList(coinList ,toplevel , Favorites ,SearchedCoins) {

return  toplevel ? Favorites :  lowercoins(SearchedCoins , coinList) ;


}


const CoinGrid = (props) => {

  return (

  <div>
  <AppContext.Consumer>
  {
    ({coinList, Favorites ,SearchedCoins}) =>  <Coins>
{DisplaycoinList(coinList , props.toplevel , Favorites , SearchedCoins).map( res =>

  <CoinTile key={res} toplevel= {props.toplevel} coinkeys= {res}/>





)}



    </Coins>

}
  </AppContext.Consumer>

    </div>

  )
}

export default CoinGrid;
