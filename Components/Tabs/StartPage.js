import React from 'react'
import styled from 'styled-components'
import {  BLACK, DARKGREY, device, WHITE } from '../../Styles'
import Loading from '../../Components/Utilities/Loading'
import { useData, COLOR } from '../../pages'


const StartPageContainer = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
>p{
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 20px;
  color: ${DARKGREY}
}
`

const LogoContainer = styled.div`
width: 50vw;
height: 50vw;
border-radius: 10px;
overflow: hidden;
background-color: white;

box-shadow: 0px 12px 42px -4px rgba(24, 39, 75, 0.12), 0px 8px 18px -6px rgba(24, 39, 75, 0.12);
>img{
    height: 100%;
    width: 100%;
    object-fit: contain;
}

@media ${device.laptopSmall}{
  width: 20vw;
height: 20vw;
}
`

const checkBrightness = (c) =>{
  if(c){

    var c = c.substring(1);      // strip #
    var rgb = parseInt(c, 16);   // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff;  // extract red
    var g = (rgb >>  8) & 0xff;  // extract green
    var b = (rgb >>  0) & 0xff;  // extract blue
    
    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
    
    return luma<50?true:false
  }
  return false
}



const StartPage = () => {
    const {data} = useData()||{data:{}}

  return (
    <StartPageContainer style={{backgroundColor: data.themeColor}}>
        <LogoContainer>
            <img src={data.logo} alt="logo"/>
        </LogoContainer>
         <p style={{color:!checkBrightness(data.themeColor)?BLACK:WHITE}}>Welcome to {data.title}</p>
    </StartPageContainer>
  )
}

export default StartPage