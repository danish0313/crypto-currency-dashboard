import React from 'react'
import {AppContext} from '../app/contextprovider';
import { SelectableTile , DelectableTile , DisableTile}  from './tile';
import styled from 'styled-components';
import Image  from './image';



const Inner = styled.div`
display: grid ;
grid-template-columns:1fr 1fr;

`


const DeleteIcon = styled.div`
justify-self: right;
display: none ;

${DelectableTile}:hover &{

display: block;
color: red;

}


`



const Left = styled.div`
justify-self: right;

`

// for RemoveCoins and addng cons
function  ChangeHandler(coinkeys ,toplevel , AddCoins , RemoveCoins){

  if(toplevel) {

    return RemoveCoins(coinkeys);
  }

  return AddCoins(coinkeys);
  }




export default function({coinkeys , toplevel}) {


  return (


  <AppContext.Consumer>
  {
    ({coinList , AddCoins ,RemoveCoins , IsinFavorites}) => {

let coin = coinList[coinkeys];



let TileClass = SelectableTile ;

if(toplevel) {

TileClass = DelectableTile;

}
else if (IsinFavorites(coinkeys)) {

  TileClass = DisableTile ;

}

return (<TileClass onClick={() => ChangeHandler(coinkeys ,toplevel , AddCoins , RemoveCoins)}>

<Inner>

<div>{coin.CoinName} </div>

  {toplevel ?  ( <DeleteIcon> x </DeleteIcon>) :  (<Left> {coin.Symbol} </Left >  ) }
 </Inner>
 <Image coin={coin}/>
   </TileClass>



)

}

}
  </AppContext.Consumer>



  )
}
