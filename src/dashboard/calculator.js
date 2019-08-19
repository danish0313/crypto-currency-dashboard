import React from 'react'


const Calculator = (props) => {
  return (

<div style={{width: '300px' , height:'500px',
overFlow:'hidden', boxSizing: 'border-box',
 borderRadius: '4px' , textAlign: 'right' , lineHeight:'14px' ,  blockSize:'335px',
  fontSize: '12px'  , fontFeatureSettings: 'normal',
   textSizeAdjust: '100%' , boxShadow: 'inset 0 -20px 0 0 #56667F'  ,  margin: '0px'}}>


   <div style={{height:'420px'}}>
   <iframe src="https://widget.coinlib.io/widget?type=converter&theme=dark"
    width="300" height="420" scrolling="auto" marginwidth="0" marginheight="0"
    frameborder="0" border="0" title="chart" style={{boxShadow: `0px 0px 4px 2px #5fff17`,
     margin:0 , padding:0  }}></iframe>
    </div>
    </div>

  )
}

export default Calculator;
