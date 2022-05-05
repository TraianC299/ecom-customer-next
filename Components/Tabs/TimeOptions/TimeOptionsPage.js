import React from 'react'
import styled from 'styled-components'
// import translate from '../../i18n/messages/translate'
import {  device, GREYWHITE, Padding } from '../../../Styles'
import { useOrderContext } from '../../../Contexts/OrderContext'
import {  useData } from '../../../pages'



const DatesContainer  = styled.div`
display: flex;
flex-wrap: wrap;
grid-gap: 10px;
overflow: scroll;
width:100%;

@media  ${device.laptopSmall}{
  overflow-x:hidden;
  display: flex;
  flex-wrap: wrap;

}
::-webkit-scrollbar {
  display: none;
}

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`

const ButtonsContainer = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
grid-gap: 20px;`



function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

const TimeOptionsPage = () => {
  const {data} = useData()
  const {selectedDate, setSelectedDate} = useOrderContext()
    const today = new Date()

  return (
      <Padding>
    {/* <h2 className="h4">{translate("When do you want your product to be delivered?")}</h2> */}
    <DatesContainer>
    <DateStyle style={{background:new Date().getDate()==selectedDate.getDate()?data.themeColor:""}}  onClick={()=>setSelectedDate(new Date())}>{"Today"}</DateStyle>
      {[...Array(29).keys()].map((date, index) => <DateInstance 
      selectedDate={selectedDate} 
      index={index} 
      key={date} 
      date={new Date(today.getYear(), today.getMonth(), today.getDate()+index+1)} setSelectedDate={setSelectedDate}/>)}
    </DatesContainer>
    <>
    </>
    </Padding>
  )
}

export default TimeOptionsPage





const DateStyle = styled.div`
height: calc(95vw / 4 - 16px);
width: calc(95vw / 4 - 16px);
font-weight: 600;
font-size: 1rem;
border-radius: 14px;
background-color: ${GREYWHITE};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


@media ${device.laptopSmall}{
height: calc(65vw / 9 - 11px);
width: calc(65vw / 9 - 10px);
}
@media ${device.tabletSmallPortrait}{
  height: calc(95vw / 7 - 16px);
width: calc(95vw / 7 - 16px);
}
`
const DateInstance = ({date, setSelectedDate, selectedDate}) => {
  const selected=date.getDate()==selectedDate.getDate()
return(
  <DateStyle 
  style={{background:selected?COLOR:""}} 
  onClick={()=>setSelectedDate(date)}><p style={{color:selected?"white":""}}>{date.getDate()}</p><p style={{color:selected?"white":""}}>{date.toLocaleString('default', { month: 'short' })}</p></DateStyle>
)
}