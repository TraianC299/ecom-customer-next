import React, { useCallback, useState } from 'react'
import styled from "styled-components"
import { device } from '../../Styles'
const Conatiner = styled.div`
display: flex;
align-items: start;
justify-content: start;
overflow: hidden;
user-select: none;
height: 90vh;

@media ${device.laptopSmall}{
    height: 100%;
}
`



const Tab = styled.li`
backface-visibility: hidden;
box-sizing: border-box;
list-style-type: none!important;
width: 100%;
height: 100% !important;
transition: transform 400ms cubic-bezier(0.25, 1, 0.5, 1) 0s;
flex-shrink:0;
`

const TabsContainer = styled.ul`
backface-visibility: hidden;
display:flex;
width:100%;
list-style-type: none;
transform-style: preserve-3d;
display: flex;
user-select: none;
transition: 200ms;
height: 100% !important;

`

// || index===selectedIndex+1 || index===selectedIndex-1
const checkIndex = (index, selectedIndex) => {
    if(index===selectedIndex){
        return true
    }
    return false

}
const VariantsTabs = ({screens, selected, setSelected}) => {
    const [touchStartX, setTouchStartX] = useState()

   

    // const nextSlide = useCallback(() => {
    //     if (selected >= 0 && selected < screens.length-1) {
    //         setSelected(previous => ++previous)
    //     }
    //     else if (selected >= 3) {
    //         setSelected(previous => 0)
    //     }

    // },[selected, screens])

    // const previousSlide = useCallback(() => {
    //     if (selected > 0 && selected <= screens.length-1) {
    //         setSelected(previous => previous - 1)
    //     }

    //     else if (selected <= 0) {
    //         setSelected(previous => 1)
    //     }
    // },[selected, screens])

    // const changeSlide = useCallback((e) => {
    //     const difference = e.changedTouches[0].clientX- touchStartX
    //     if (difference>0){
    //         if(difference>75){
    //             previousSlide()
    //         }
    //     }else{
    //         if(difference<-75){
    //            nextSlide()
    //         }
    //     }
    //     return
    
    // },[touchStartX])
    

    return (
        <>
        <Conatiner >
            <TabsContainer
            //  onTouchStart={(e)=>{setTouchStartX(e.changedTouches[0].clientX);document.getElementsByTagName("body")[0].style.overflow = "hidden"}} 
            //  onTouchEnd={(e)=>{changeSlide(e)}}  
             style={{transform:`translateX(-${selected *100}%)`}} id="tabs-ul">
            {screens.map((element, index)=>
                element?<Tab  key={"variant"+index} className="variant-tab"  index={index} selected={selected}>{checkIndex(index, selected)? element:null}</Tab>:<></>
           )}
            </TabsContainer>
        </Conatiner>
        </>
    )
}

export default VariantsTabs