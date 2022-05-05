import React, {useContext, useState, useEffect} from 'react'
import useDidMountEffect from '../Hooks/useDidMountEffect'
import Loading from '../Components/Utilities/Loading'
import styled from 'styled-components'
import { replaceStringSpaces } from '../Utils/UtilityFunctions'



export async function getServerSideProps  (context)  {
    const shopName = window.location.href.split("/")[2].split(".")[0]
    const res = await fetch(`https://commo-store.com/api/stores/${shopName}`)
    const data = await res.json().data

    return {
        props: {
            salam:"frumos",
            data:data
        }
    }
}



const DataContext = React.createContext()



export const useData=()=>{
        return useContext(DataContext)
    }

    



export let COLOR = "#f5f5f5"




export default  (props) => {
    const [loading, setLoading] = useState(true)

   
    console.log(props.salam)
    

    let value={
         loading, data:props.data
    }

console.log(props.data)

  
    return (
        <DataContext.Provider value={value}>
            
        {props.children}
        </DataContext.Provider>
    )
}



