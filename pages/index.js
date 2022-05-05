import React, {  useContext, useEffect, useState } from 'react';
import styled from "styled-components"
import Button from '../Components/Buttons/Button';
// import { I18nProvider } from "./i18n/index"
import VariantsTabs from '../Components/DataDisplay/VariantsTabs';
import { OrderProvider, useOrderContext } from '../Contexts/OrderContext';
import OrderOverview from '../Components/Tabs/OrderOverview/OrderOverview';
import CustomerDataPage from '../Components/Tabs/CustomerDataPage';
import StartPage from '../Components/Tabs/StartPage';
import DeliveryOptions from '../Components/Tabs/DeliveryOptions';
import ProductsPage from '../Components/Tabs/ProductsPage';
import LanguagePage from '../Components/Tabs/LanguagePage';
import TimeOptionsPage from '../Components/Tabs/TimeOptions/TimeOptionsPage';
import { LanguageProvider, useLanguage } from '../Contexts/LnaguageContext';
import { device, LIGHTGREY, WHITE } from '../Styles';
import { useRouter } from 'next/router';
import absoluteUrl from 'next-absolute-url'




export async function getServerSideProps  (context)  {
  const { origin } = absoluteUrl(context.req)
    const shopName = origin.split("/")[2].split(".")[0]
    const response = await fetch(`https://commo-store.com/api/stores/${shopName}`)
    const data = await response.json()
    return {
        props: {
            salam:"frumos",
            data:data.data
        }
    }
}


const DataContext = React.createContext()

export const useData=()=>{
  return useContext(DataContext)
}

const Container = styled.div`
width: 100%;
@media ${device.laptopSmall}{
  margin:auto;
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


}
`
const VariantsTabsContainer = styled.div`
width: 100%;
@media ${device.laptopSmall}{
  box-shadow: 0px 12px 42px -4px rgba(24, 39, 75, 0.12), 0px 8px 18px -6px rgba(24, 39, 75, 0.12);
  height: 70vh;
  overflow: hidden;
  border-radius: 25px;

}
`

const StepperBar  = styled.div`
height: 5px;
position: fixed;
top:0;
transition: 0.2s;
z-index:2;
left:0;
`
const Navigation = styled.div`
display: flex;
grid-template-columns: 1fr 1fr;
grid-gap: 5vw;
position: sticky;
bottom:0;
width: 100%;
padding: 5vw;
background-color: white;
>*{
  width: 100%;
}

@media ${device.laptopSmall}{
  position: static;
  height: fit-content;
  padding: 0 10vw;
  padding-top: 5vh;
  background-color: transparent;


}`


const insert = (arr, index, newItem) => {
  const newArray = [...arr];
  newArray.splice(index, 0, newItem);
  return newArray;

}

const pages = {
  startPage: ()=><StartPage></StartPage>,
  languagePage: ()=><LanguagePage ></LanguagePage>,
  timeOptionsPage: ()=><TimeOptionsPage></TimeOptionsPage>,
  productsPage: ({index})=><ProductsPage index={index}></ProductsPage>,
  customerDataPage: ({index})=><CustomerDataPage index={index}></CustomerDataPage>,
  deliveryOptions: ({index})=><DeliveryOptions index={index}></DeliveryOptions>,
  orderOverview: ({index})=><OrderOverview index={index}></OrderOverview>,
}



const pagesWithoutDeliveryOptions = [
  "startPage",
  "languagePage",
  "timeOptionsPage",
  "productsPage",
  "customerDataPage",
  "orderOverview",
]
function App() {
  const {data} = useData()
  const {setNextButtonClick, step, setStep, disable , success} = useOrderContext()
  const [stepsComponents, setStepsComponents] = useState([...pagesWithoutDeliveryOptions])




  let router = useRouter()
  let greeting  = router.locale === 'ro' ? 'Salut' : 'Hello'
 const nextFunction = (e) => {
   e.preventDefault()
  setNextButtonClick(previous=>!previous)
  if(step === stepsComponents.length-1){
    setStep(previous=>previous)
  }else{

    success || disable?setStep(previous=>previous):setStep(previous=>previous+1)
  }
 }

 useEffect(()=>{
   if(data.deliveryOption==3){
     setStepsComponents([...insert(pagesWithoutDeliveryOptions, 4, "deliveryOptions")])
   }
 },[data])



  return (
    // <I18nProvider locale={language}>
      <Container className="App">
        <StepperBar  style={{width:`${step/5*100}%`, background: data.themeColor}}></StepperBar>
          <VariantsTabsContainer>
            <VariantsTabs setSelected={setStep} selected={step} screens={
              [...stepsComponents.map((name, index)=>{const NewComponentS = pages[name]; return <NewComponentS key={index} index={index}></NewComponentS>})]
              }>
                
              </VariantsTabs>
          </VariantsTabsContainer>
          {success?null:<Navigation>
          {step==0?null:<Button disable={success} onClick={()=>setStep(previous=>--previous)} style={{color:data.themeColor, background:WHITE, border:"1px solid "+data.themeColor}}>Back</Button>}
          <Button style={{background: disable?LIGHTGREY:data.themeColor}} onClick={(e)=>nextFunction(e)}>{step==0?"Start":"Next"}</Button>
          </Navigation>}
          
      </Container>
    // </I18nProvider>
  );
}


const DataContextApp = (props) => {
  return <LanguageProvider>
    <DataContext.Provider value={{data:props.data}}>
      <OrderProvider>
      <App></App>
    </OrderProvider>
    </DataContext.Provider>
  </LanguageProvider>
}
export default DataContextApp;




