import React, { useEffect, useRef, useState } from 'react'
import styled from "styled-components"


const CollapseContainer = styled.div`
transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
overflow: hidden;
`
const Collapse = ({children, on})=>{
    const divRef = useRef(null);

    const [height, setHeight] = React.useState(0);
    const [overflow, setOverflow] = useState("hidden")


    useEffect(()=>{
        if(on){
            setHeight(divRef.current.scrollHeight)
            return
        }
        setHeight(0)
        setOverflow("hidden")
    
    },[on])


    return(
        <CollapseContainer onTransitionEnd={()=>height>0?setOverflow("visible"): null} style={{height: height, overflow:overflow}} ref={divRef}>
            {children}
        </CollapseContainer>
    )
}
export default Collapse