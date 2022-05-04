import React, {useContext, useState} from 'react'



const OrderContext = React.createContext()
export const useOrderContext=()=>{
        return useContext(OrderContext)
    }



export const OrderProvider = ({children}) => {
    const [step, setStep] = useState(0)
    const [logo,setLogo] = useState("")
    const [title, setTitle] = useState("")
    const [deliveryOption, setDeliveryOption] = useState(null)
    const [loading, setLoading] = useState(false)
    const [selectedDeliveryOption, setSelectedDeliveryOption] = useState(null)
    const [nextButtonClick, setNextButtonClick] = useState(false)
    const [selectedProducts, setSelectedProducts] = useState([])
    const [selectedProductsError, setSelectedProductsError] = useState("")
    const [customerData, setCustomerData] = useState({})
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [disable, setDisable] = useState(false)
    const [success, setSuccess] = useState(false)
     


    
    
    let value={
        success, setSuccess,
        disable, setDisable,
        step, setStep,
        nextButtonClick, setNextButtonClick,
        selectedDeliveryOption, setSelectedDeliveryOption,
        selectedDate, setSelectedDate,
        customerData, setCustomerData,
        selectedProducts, setSelectedProducts,
        loading, setLoading,
        selectedProductsError, setSelectedProductsError,
        logo, setLogo, 
        title, setTitle, 
        deliveryOption, setDeliveryOption,
    }


    




    
    return (
        <OrderContext.Provider value={value}>
        {children}
        </OrderContext.Provider>
    )
}