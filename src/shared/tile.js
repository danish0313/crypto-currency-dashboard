
import styled from 'styled-components';
import {subtleBoxShadow , greenBoxShadow ,redBoxShadow ,  lightBlueBackground}  from '../shared/style';



  export const Tile = styled.div`
${subtleBoxShadow }
${ lightBlueBackground}
padding:10px;
`

export const DelectableTile = styled(Tile)`

&:hover{
  ${redBoxShadow}

}
`



export const DisableTile = styled(Tile)`

pointer-events : none;
opacity: 0.4;

`


export const SelectableTile = styled(Tile)`

&:hover{
  ${greenBoxShadow}


}

`
