import styled, {keyframes} from "styled-components"
export const BLACK = "#000"
export const WHITE = "#fff"
export const BORDERCOLOR = "#D5DDE0"
export const YELLOW = "#FEEB02"
export const DARKGREY = "#686868"
export const LIGHTGREY  = "#C4C4C4"
export const GREYWHITE = "#F5F5F5"
export const RED  = "#FF5252"
export const greyBorder = ` 0px 0px 0px 0.5px ${BORDERCOLOR}`

export const device = {
    mobileSmallPortrait: `(min-width: 300px) and (orientation: portrait)`,
    mobileLargePortrait: `(min-width: 370px) and (orientation: portrait)`,
    mobileLandscape: `(min-width: 370px) and (orientation: landscape)`,
    tabletSmallPortrait: `(min-width: 768px) and (orientation: portrait)`,
    tabletLargePortrait: `(min-width: 1024px) and (orientation: portrait)`,
    laptopSmall: `(min-width: 1024px) and (orientation: landscape)`,
    laptopLarge: `(min-width: 1500px) and (orientation: landscape)`,
    desktop: `(min-width: 2500px) and (orientation: landscape)`
  };


  export const InputButtonsGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, auto);
grid-gap: 5vw;
width: 100%;
>*{
  width: 100%;
}

@media ${device.laptopSmall}{
  grid-gap: 2vh;

}`



export const Padding = styled.div`
padding: 5vw;
overflow: scroll;
height: 100%;
>h2{
  color: #3E4958;
  font-weight: 600;
}
@media ${device.laptopSmall}{
  padding: 2.5vw;
}`



export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;