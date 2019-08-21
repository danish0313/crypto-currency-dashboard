
import React from 'react'
import CHART from './charts' ;


const Chart = (props) => {



  return (
    <CHART
       id="crypto_chart"
       height={350}
       width = {450}
       text = {props.coinname}
       fsym={props.coinname}
       timezone="Asia/karachi"
       style={{margin: "25px"}}
       tsym="USD"
       span={props.graphValue}
       wrapper_id="crypto_chart_wrapper"
       limit={24*6}
		toTs={Math.floor(Date.now() / 1000)}
   borderColor="#33C22D"
       />
  )
}

export default Chart
