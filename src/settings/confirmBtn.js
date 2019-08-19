import React from 'react'
import {AppContext} from '../app/contextprovider';
import styled from 'styled-components';
import {fontSize1 , greenBoxShadow , color3}  from '../shared/style';

const CenterDiv = styled.div`
 display: grid;
 justify-content: center;
`

const ConfirmButton = styled.div`
 margin: 20px;
 ${fontSize1}
 color:${color3}
 cursor : pointer;
 &:hover{
${greenBoxShadow}

 }
`

const ConfirmBtn = (props) => {

  return (
<AppContext.Consumer>



{({ConfirmFavorites ,Favorites}) => (
<CenterDiv>
  {Favorites.length === 0 ? null :
  <ConfirmButton onClick = {ConfirmFavorites}>


  Confirm-Favorites!
</ConfirmButton>
}
</CenterDiv>
)}




</AppContext.Consumer>
  )
}

export default ConfirmBtn;
