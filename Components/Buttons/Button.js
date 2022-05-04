import React from 'react'
import {  WHITE } from '../../Styles'
import styled from "styled-components"
import { COLOR, useData } from '../../Contexts/DataContext'

const ButtonStyle = styled.button`
padding-top: 20px;
padding-bottom: 20px;
font-weight: 600;
font-size: 1rem;
border-radius: 14px;
margin:auto;
color: ${WHITE};
border: none;
width: 100%;
background-color:${COLOR};`
const Button = ({children, ...props}) => {
  const {data} = useData()


  return (
    <ButtonStyle style={{background: data.themeColor}} {...props}>{children}</ButtonStyle>
  )
}

export default Button