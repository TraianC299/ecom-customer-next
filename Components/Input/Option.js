import React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../Contexts/DataContext'
import { BORDERCOLOR} from '../../Styles'


const OptionDiv = styled.div`
height: 8vh;
padding-left: 20px;
font-weight: 600;
font-size: 1rem;
border-radius: 14px;
margin:auto;
display: flex;
justify-content: flex-start;
align-items: center;
cursor: pointer;
width: 100%;
box-shadow: 0px 0px 0px 0.5px ${BORDERCOLOR};
`

const Option = ({children, id , selectedOptions, setSelectedOptions, single, className}) => {
    const isSelected = single?selectedOptions==id:selectedOptions.includes(id)
    const add = () => {
        if(single){
            isSelected?setSelectedOptions(null):setSelectedOptions(id)
        }else{
            isSelected?setSelectedOptions(previous=>[...previous.filter(itemId=>itemId!=id)]):setSelectedOptions([...selectedOptions, id])
        }
    }

    return (
        <OptionDiv className={className} style={{boxShadow:isSelected?`0px 0px 0px 2px ${COLOR}`:``}}  onClick={()=>add()}>
            {children}
        </OptionDiv>
    )
}

export default Option