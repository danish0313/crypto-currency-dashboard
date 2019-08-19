
import React from 'react'
import CHART from './charts' ;


const Chart = (props) => {
  return (
    <CHART
       id="crypto_chart"
       height={300}
       width = {350}
       text = {props.coinname}
       fsym={props.coinname}
       timezone="Asia/karachi"
       style={{margin: "25px"}}
       tsym="USD"
       span="3month"
       wrapper_id="crypto_chart_wrapper"
       limit={24*6}
		toTs={Math.floor(Date.now() / 1000)}
   borderColor="lightgreen"
       />
  )
}

export default Chart
