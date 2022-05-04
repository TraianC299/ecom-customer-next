import React from 'react'
import styled from "styled-components"
import {  DARKGREY, BORDERCOLOR, GREYWHITE, RED  } from '../../Styles';
import { COLOR } from '../../Contexts/DataContext';

const Container = styled.div`
display: flex;
flex-direction:column;
justify-content: flex-start;
align-items: flex-start;
position:relative;
height: fit-content;
>p{
  font-size: 0.8rem;
  padding: 2px 10px;
}
`
const InputStyle = styled.input`
  border-radius: 5px;
  height: 58px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  border-radius: 14px;
  font-size: 1rem;
  padding: 10px;
  border: 0.5px solid ${BORDERCOLOR};
  background-color: ${GREYWHITE};
 
  :hover{
    border: 1px solid black;
  }
  
  
 
  
  :focus{
    border: 2px solid ${COLOR};
    + label{
      transform: translateY(0px);
      font-size: 0.7rem !important;

    }
  }
 `

const Label = styled.label`
color:${DARKGREY};
margin-bottom: 5px;
font-weight: 600;
margin-left: 5px;
`






const Input = ({value, setValue, label, type, error, setError, disabled, defaultValue, rows, rowsMax, className, width, helperText, borderColor, validation, unity, placeholder, ...props}) => {

    function handleChange (e){
      e.preventDefault()
    
    if (typeof(e.target.value)==undefined || !setValue){
        return null
    }else{
        setValue(e.target.value)
       }}
    
    
    
    const validationnn = () => {
     if(setError){
       validation(value)?setError(validation(value)):setError(false) 
     }else{
       return null
     }
    }
    
    const onFocus = (e) => {
      e.preventDefault()
    
      if(setError){
        setError(false)
      }
    }
    const onBlur = (e) => {
      e.preventDefault()
      validationnn()
    }
    
    
      return(
        <Container >
            <Label 
          >
          {label}
          </Label>
          <InputStyle
          onChange={(e)=>handleChange(e)}
          onBlur={(e)=>onBlur(e)}
          onFocus={(e)=>onFocus(e)}
          placeholder={placeholder}
          value={value}
          {...props}

          ></InputStyle>
          <p style={{color: RED}}>{error}</p>

        </Container>
      )
    }
    
    
    export default Input
    