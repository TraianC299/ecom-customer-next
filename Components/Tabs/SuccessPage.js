import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { useData } from '../../pages'
import { DARKGREY, device, rotate } from '../../Styles'
// import translate from '../i18n/messages/translate'



const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
>p{
  max-width: 80vw;
}
>svg{
    height: 10vh;
    width: 10vh;
}

@media ${device.laptopSmall}{
  padding: 2vh;
  display: grid;
  grid-template-columns: 20vw 1fr;
  grid-gap: 20px;
  flex-direction:row ;
  >p{
  max-width: 30vw;
}
}
`

const Circle = styled.div`
position: relative;
height: 60vw;
width: 60vw;
margin:auto;
display: flex;
align-items: center;
justify-content: center;
transform-origin: center;
background: #F9F8FA;
background-blend-mode: soft-light, normal;
border-radius: 50%;
/* box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.25), 5px 5px 10px rgba(21, 21, 21, 0.79); */
animation: ${rotate} 10s linear infinite;
transform-origin: center;

>svg{
    height: 15vh;
    width: 15vh;
    transform: rotate(90deg);
    animation: ${rotate} 10s linear infinite reverse;
    filter: drop-shadow(5px 5px 10px rgba(166, 171, 189, 0.25)) drop-shadow(-5px -5px 10px #FFFFFF);

}
>span{
    font-size: 3vh;
  height: 60vw;
  position: absolute;
  width: 5vw;
  transform-origin: center center;
  color: ${DARKGREY};
  font-weight: 500;
  filter: drop-shadow(5px 5px 10px rgba(166, 171, 189, 0.25)) drop-shadow(-5px -5px 10px #FFFFFF);
}

@media ${device.laptopSmall}{
  height: 20vw;
width: 20vw;
margin:0;
flex-grow: 1;
>span{
  width: 3vw;
  height: 20vw;
  font-size: 2vh;
  margin:0;


}
}`



const Text = styled.div`
text-align: left;
  `
const string  ="Order Successful"

const SuccessPage = () => {
    const {data} = useData()
  return (
    <Container>
        <Circle>
          <FontAwesomeIcon color={data.themeColor} icon={faCheck}></FontAwesomeIcon>
          {string.split("").map((letter, index) => <span style={{transform: `rotate(${(index+1)*10}deg)`}} className={`char${index+1}`}>{letter}</span>)}

        </Circle>
        <Text>
          {/* <p>{translate("The order was successfully registered. Please check your email for confirmation.")}</p> */}
          <p>Here is a message from the seller:<br></br> {data.message}</p>
        </Text>
    </Container>
  )
}

export default SuccessPage