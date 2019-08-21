import React from 'react'
import {AppContext} from '../app/contextprovider';

import {Tile} from '../shared/tile';
import Image from '../shared/image';
import Chart from './chart';
const Spotlight = (props) => {



  return (
    <Tile>
      <AppContext.Consumer>
{({coinList , currentFavorites , changingGraph , graphValue}) =>
<div>

<Image coin={coinList[currentFavorites]}/>

  <select  onChange={(e) => changingGraph(e.target.value)}style={{float:'right', width:'200px', backgroundColor:"#061A44" ,color:'white' , height:'40px' ,
     border:'none', boxShadow:'0px 0px 4px 2px #5fff17', outline:'none'}}
     defaultValue =''>
    <option value="3month">3month</option>
    <option value="day">day</option>
    <option value="week">week</option>
      <option value="year">year</option>
  </select>
<Chart coinname={currentFavorites} graphValue={graphValue} coinList={coinList}/>

</div>
}
</AppContext.Consumer>
        </Tile>
  )
}

export default Spotlight;
