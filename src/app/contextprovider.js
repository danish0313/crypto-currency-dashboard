import React from 'react';

import _ from 'lodash';



//  for cryptocompare
const cc = require('cryptocompare');


// constext api
 export const AppContext  = React.createContext();

const MaxFavorites = 10;

class ContextProvider  extends React.Component {
constructor (props) {

super(props);

this.state = {
...this.saveSetting(),
page : 'Settings',
AddCoins :  this.AddCoins,
setpage : this.setpage,
RemoveCoins : this.RemoveCoins,
IsinFavorites: this.IsinFavorites,
ConfirmFavorites : this.ConfirmFavorites,
FilterCoins: this.FilterCoins,
firstVisit : true,
ChangingCoins: this.ChangingCoins,
Favorites : ['BTC','ETH','XMR','DOGE'],

}

}

componentDidMount() {

this.Dash()
this.FetchPrices()

}


// fetchng data fron cryptocompare

Dash = async () => {

 let coinList =(await cc.coinList()).Data;

 this.setState({coinList})



}


// addng AddCoins to toplevel

AddCoins  =  async (key) => {

let Favorites  = [...this.state.Favorites]

if(Favorites.length < MaxFavorites) {

     Favorites.push(key);

 await  this.setState({
  Favorites
     })
}


}



//remove handler fro toplevel
RemoveCoins = (key) => {

let Favorites  = [...this.state.Favorites]


     this.setState({
    Favorites: _.pull(Favorites , key)
     })
}


// for disabled coins

IsinFavorites = (key) => _.includes(this.state.Favorites , key)


// FetchPrices from api

FetchPrices = async () => {



let Prices = await this.Prices();

this.setState({Prices});




}



Prices =  async () => {
let data = [];
for (var i = 0; i < this.state.Favorites.length; i++) {

  try{
   let getprices = await cc.priceFull(this.state.Favorites[i] ,'USD');

   data.push(getprices);

}catch(e){


console.warn('not gettg data' , e ) ;

}

}

return data ;



}



// Changing the conins

ChangingCoins = (name) => {


this.setState({

currentFavorites : name


});



}



// for Favorites bttn acton

ConfirmFavorites  = async () => {

  let currentFavorites= this.state.Favorites[0] ;
 this.setState({

page: 'DashBoard',
firstVisit :false,
currentFavorites : currentFavorites

}, async () => {

   return  this.FetchPrices();

})



// settng localStorage

localStorage.setItem('cryptoDash', JSON.stringify({

favorites : this.state.Favorites,
currentFavorites


  }));


}








saveSetting(){

  // gettn data from localStorage

let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));

 if(!cryptoDashData) {

   return { page: 'Setting', firstVisit :true }

 }


let {favorites} = cryptoDashData;


  return {Favorites :favorites}


}




setpage = (page) => {


// settng the page
this.setState({

  page: page
});

}



// search the Coins


FilterCoins = (searching) => {

this.setState({


SearchedCoins : searching

});

}




  render () {
    return (

<AppContext.Provider value = {this.state}>
{this.props.children}
</AppContext.Provider>

    )

  }
}

export default ContextProvider ;
