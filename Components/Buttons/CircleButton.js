import styled from "styled-components"
import { device, LIGHTGREY } from "../../Styles"




export const CircleButtonStyle = styled.button`
height: 4.5vh;
width: 4.5vh;
background:${props=>props.color?props.color:LIGHTGREY};
border-radius:333px;
display: flex;
align-items: center;
justify-content: center;
border:none;
cursor:pointer;
transition: 0.15s ease-out;


>svg{
        height: 2vh;
        width: 2vh !important;
    }
    >img{
        height: 2vh;
        width: 2vh !important;
    }




@media ${device.tabletSmallPortrait}{
    height: 4vh;
    width: 4vh;
    >svg{
        height: 1.5vh;
        width: 1.5vh !important;
    }
    >img{
        height: 2vh;
        width: 2vh !important;
    }
}
`
const CircleButton = ({onClick, style, icon, hoverColor, color, ...props}) => {
    return (
        
        <CircleButtonStyle { ...props} color={color} hoverColor={hoverColor}  style={style} onClick={onClick}>{icon}</CircleButtonStyle>

    )
}

export default CircleButton


