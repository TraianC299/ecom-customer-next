import React, {useContext, useEffect, useState} from 'react'
// import { LOCALES } from '../i18n'

const LanguageContext = React.createContext()
export const useLanguage=()=>{
        return useContext(LanguageContext)
    }

export const LanguageProvider = ({children}) => {

    const [language, setLanguage] = useState()

  
    let value={
        language, setLanguage,
    }

  

    return (
        <LanguageContext.Provider value={value}>
        {children}
        </LanguageContext.Provider>
    )
}
