import React from 'react'
import {AppContext} from '../app/contextprovider';

import {Tile} from '../shared/tile';
import Image from '../shared/image';
import Chart from './chart';
const Spotlight = (props) => {
  return (
    <Tile>
      <AppContext.Consumer>
{({coinList , currentFavorites}) =>
<div>

<Image coin={coinList[currentFavorites]}/>

<Chart coinname={currentFavorites}/>

</div>
}
</AppContext.Consumer>
        </Tile>
  )
}

export default Spotlight;
