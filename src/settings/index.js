import React from 'react'
import Welcome from './welcome'
import ConfirmBtn from './confirmBtn'
import CoinGrid from '../shared/coingrid';
import Page from '../shared/page';
import Search from './search';
export default function() {
  return (
    <Page name="Settings">

         <Welcome/>
           <CoinGrid toplevel/>
  <ConfirmBtn/>

<Search/>
<CoinGrid/>
</Page>
  )
}
