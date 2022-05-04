import React, {useContext, useState, useEffect} from 'react'
import useDidMountEffect from '../Hooks/useDidMountEffect'
import Loading from '../Components/Utilities/Loading'
import styled from 'styled-components'
import { replaceStringSpaces } from '../Utils/UtilityFunctions'



const DataContext = React.createContext()


const CenteredContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;`
export const useData=()=>{
        return useContext(DataContext)
    }

    



export let COLOR = "#f5f5f5"

export const DataProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({products:[]})

    const getProducts = async (shopName) => {
        // const res = await fetch(`https://commo-store.com/api/stores`,{
        //     mathod: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     }

        // })
        // const json = await res.json()
        // console.log(json)
    }

    useEffect(()=>{
        // const shopName = window.location.href.split("/")[2].split(".")[0]
        // getDocument("shops", shopName)
        // .then(res=> {
        //     getProducts(shopName).then((products)=>
        //         setData({...res, products})
        //     )
        //     COLOR=res.themeColor
        //     })
        // .catch(err=>window.location="https://ecom-28df3.firebaseapp.com/")
        getProducts()
    },[])

    

    useDidMountEffect(()=>{
        COLOR=data.themeColor
            setLoading(previous=>false)
    },[data])

    
    

    let value={
        data, loading, setData
    }



  
    return (
        <DataContext.Provider value={value}>
            
        {children}
        </DataContext.Provider>
    )
}