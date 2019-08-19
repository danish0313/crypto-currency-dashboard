import React from 'react'
import {AppContext} from '../app/contextprovider';
import styled from 'styled-components';
import { greenBoxShadow }  from '../shared/style';

import _ from 'lodash';

import fuzzy from 'fuzzy';
const SearchBox = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); ;
margin-top: 15px;

`
const  SearchInput =  styled.input`


place-self: center stretch;

height: 50px;
background-color: #061A44;
border:none;
color: white;
font-size: 20px;
outline: none;


&:hover{
${greenBoxShadow};


}
`



const Res = _.debounce((searching , FilterCoins ,coinList) => {

let symbols = Object.keys(coinList);

let  coinNames = symbols.map( (res) => coinList[res].CoinName)

let AllSearch = symbols.concat(coinNames);



let fuzzysearch = fuzzy.filter(searching , AllSearch, {})
.map(results =>  results.string)

let filteringcoin =  _.pickBy(coinList , (results , syskey) => {

let coin = results.CoinName;

return ( _.includes(fuzzysearch , syskey) || _.includes(fuzzysearch , coin) )


});


return    FilterCoins(filteringcoin);

},1000);





function SetFilterCoins(e , FilterCoins , coinList) {

let searching = e.target.value;

if(!searching) {

FilterCoins(null) ;

}


 Res(searching ,FilterCoins , coinList);

}


const Search = (props) => {
  return (


    <SearchBox>

<div>
 <center><h2> SEARCH YOUR COINS!</h2> </center>
  </div>
  <AppContext.Consumer>

{({coinList ,FilterCoins}) => (

 <SearchInput onChange ={(e) => SetFilterCoins(e, FilterCoins , coinList)} />

)}

</AppContext.Consumer>



</SearchBox>





  )
}

export default Search;
