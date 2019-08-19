import React from 'react'
import styled , {css} from 'styled-components';

const Img =styled.img`
height : 50px;

${props => props.spotlight  && css`
  height : 200px;

  `}


`



export default function({coin , spotlight}) {
  return (
     <Img spotlight={spotlight}
       alt={coin.CoinSymbol}
       src= {`https://www.cryptocompare.com/${coin.ImageUrl} `} />
  )
}
