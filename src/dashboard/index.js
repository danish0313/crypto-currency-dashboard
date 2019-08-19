import React from 'react'
import Page from '../shared/page';
import {AppContext} from '../app/contextprovider';
import styled from 'styled-components';
import PriceTile  from './pricetile';
import Spotlight from './spotlight';
import {Tile} from '../shared/tile';
import Image from '../shared/image';
import Calculator from './calculator';

const Price = styled.div`
display: grid ;
grid-template-columns: repeat(auto-fill,minmax(250px , 1fr) );
margin-top: 100px;
grid-gap: 15px;
cursor:pointer;

`


const SpotlightGrid = styled.div`
display: grid ;
grid-template-columns:repeat(auto-fill,minmax(390px , 1fr) );
margin-top: 100px;
grid-gap: 30px;
`


const SpotlightName = styled(Tile)`
text-align :  center;
`

function getkeys(Prices) {

let keys = Object.keys(Prices) ;


return  keys ;

}


export default function() {
  return (

    <Page name="DashBoard">

<AppContext.Consumer>


{({Prices}) =>  <Price>



{getkeys(Prices).map( (res , index) => {


    return ( <PriceTile key={index}  Prices ={Prices}   Pricekeys= {res}/>
 )


})}

</Price>

}

</AppContext.Consumer>


<AppContext.Consumer>
{({currentFavorites, coinList}) =>
<SpotlightGrid>

<SpotlightName>
  <h3>{coinList[currentFavorites].CoinName}  </h3>
  <Image spotlight coin={coinList[currentFavorites]}/>

 </SpotlightName>

<Spotlight currentFavorites = {currentFavorites} coinList={coinList}/>

<Calculator/>

</SpotlightGrid>
}





</AppContext.Consumer>




</Page>




  )
}
