import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useRef } from 'react'
import styled from "styled-components"
import { BLACK, DARKGREY, LIGHTGREY, YELLOW  } from '../../Styles'
import CircleButton from '../Buttons/CircleButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { COLOR } from '../../pages'







const CalendarContainer = styled.div`
background: transparent;
width: 100%;
overflow: hidden;
`
const MonthContainer = styled.div`
background: transparent;
display: flex;
justify-content: space-between;
align-items: center;
height: 7vh;
padding: 10px;
border-bottom: 1px solid ${COLOR};

`


const Days = styled.div`
padding: 10px;
display: grid;
grid-template-columns: repeat(7, 1fr);
padding: 10px;
width: 100%;
justify-items: center;
border-bottom: 1px solid ${COLOR};
>p{
    color:${COLOR};
    font-weight: 500;
    }
`

const Dates = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(6, 1fr);
flex-grow: 1;
grid-gap: 10px;
height: 34.13vh;
width: 100%;
padding: 10px;
background-color: transparent;
`

const Buttons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
>*{
    margin-left: 20px;
}`

const DateInstance = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
/* border: 1px solid ${DARKGREY}; */
cursor: pointer;
border: ${props => props.selected? "2px solid "+COLOR:"none"};
>p{
    color:${COLOR};
    font-weight: 500;
}
:hover{
    background-color: ${COLOR}17;

}


`

const Month = styled.div`
>p{
    font-size: 1.2rem;
    color: white;
    font-weight: 500;
    color:${COLOR};
}
`


const CircleButtonsContainer = styled.div`
display: grid;
grid-gap: 10px;
grid-auto-flow: column;
`


function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
const DatePicker = ({value, setValue, min})=>{

    const [datesArray, setDatesArray] = React.useState([])
    const [selectedMonth, setSelectedMonth] = React.useState(new Date().getMonth())
    const [selectedYear, setSelectedYear] = React.useState(new Date().getFullYear())
    const firstDayOfMonth = () => {
        const firstDay = new Date(new Date().getFullYear(), selectedMonth, 1);
        var lastDay = new Date(new Date().getFullYear(), selectedMonth + 1, 0);
       let array = firstDay.getDay()==0?new Array(6):new Array(firstDay.getDay())
       array = [...array, ...range(1, lastDay.getDate())]
       setDatesArray(previous=>[...array])
    
    };
    
    
    useEffect(()=>{
        firstDayOfMonth(selectedMonth)
    
    },[selectedMonth])
    
    
    
    useEffect(()=>{
        if(selectedMonth>11){
            setSelectedMonth(0)
            setSelectedYear(selectedYear+1)
        }else if(selectedMonth<0){
            setSelectedMonth(11)
            setSelectedYear(selectedYear-1)
        }
    },[selectedMonth])




    return(
        <CalendarContainer  >
            <MonthContainer>
            
                <Month><p>{new Date(selectedYear, selectedMonth).toLocaleString("ro-RO",{month: 'long', year:"numeric"})}</p></Month>
                <Buttons>
                    <CircleButtonsContainer >
                    <CircleButton color="#F5F5F5" onClick={()=> min && selectedYear<=min.getFullYear() && selectedMonth<=min.getMonth()?null:setSelectedMonth(previous=>--previous)} icon={<FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>}></CircleButton>
                    <CircleButton color="#F5F5F5" onClick={()=>setSelectedMonth(previous=>++previous)} icon={<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>}></CircleButton>
                    </CircleButtonsContainer>
                </Buttons>
            </MonthContainer>
            <Days>
                <p>S</p>
                <p>M</p>
                <p>T</p>
                <p>W</p>
                <p>T</p>
                <p>F</p>
                <p>S</p>
            </Days>
            <Dates>
            {datesArray.map(date => <DateInstance 
            disabled={selectedMonth<=min?min.getFullYear() && selectedMonth<=min.getMonth() && date<min.getDate():false} 
            selected={value && value.getFullYear()==selectedYear && value.getMonth()==selectedMonth && value.getDate()==date} 
            onClick={()=>setValue(new Date(selectedYear,selectedMonth,date))} 
            style={{opacity: date?1:0}}><p style={{color:min&& selectedMonth<=min.getFullYear() && selectedMonth<=min.getMonth() && date<min.getDate()?LIGHTGREY:DARKGREY}}>{date}</p></DateInstance>)}
                
            </Dates>
        </CalendarContainer>
    )
}


export default DatePicker