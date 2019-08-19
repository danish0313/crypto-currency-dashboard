import React from 'react'
import styled , {css} from 'styled-components';
import {SelectableTile}  from '../shared/tile';
import {AppContext} from '../app/contextprovider';
import {greenBoxShadow}  from '../shared/style';

const Inner = styled.div`
display: grid ;
grid-gap : 10px;
grid-template-columns:1fr 1fr 1fr;

`


const Left = styled.div`

justify-self: Left;

`



const Right = styled.div`

justify-self: right ;

`



const Center = styled.div`

justify-self: center ;

`

const SelectableTiles = styled(SelectableTile)`

${props => props.currentFavorites  && css`

  ${greenBoxShadow}
  pointer-events : none;




  `}

`


const PriceTile = (props) => {

let AllPrices = props.Prices[props.Pricekeys];

let Prices = [];

for(let key in AllPrices){

Prices.push({
id : AllPrices[key]

});

}




  return (

  <AppContext.Consumer>

  {({currentFavorites, Favorites , ChangingCoins}) =>   <SelectableTiles >




{Prices.map( prices => (


      <Inner key={prices.id.USD.FROMSYMBOL} onClick = {() => ChangingCoins(prices.id.USD.FROMSYMBOL)}>
<Left>
      <p>{prices.id.USD.FROMSYMBOL} </p>
  </Left>

  <Center>

  <p style={{color: prices.id.USD.PRICE < 0  ? 'red' : 'white' ,fontSize: '25px'}}>${prices.id.USD.PRICE.toFixed(3)} </p>
</Center>

<Right>

<p style={{color: prices.id.USD.CHANGE24HOUR < 0  ? 'red' : '#42FF3A' ,fontSize: '17px'}}>{prices.id.USD.CHANGE24HOUR.toFixed(3)}% </p>
</Right>

</Inner>

))}



</SelectableTiles>


    }

  </AppContext.Consumer>

  )
}


export default PriceTile
