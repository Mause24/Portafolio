import { createContext, useContext } from "react"

export type LangContent={
    lang:string,
    setLang:(lg:string)=>void,
}

const LanguageContext = createContext<LangContent>({
    lang:'ES',
    setLang:()=>{},
})

const useLanguageContext = () => useContext(LanguageContext)

const dataExport={
    LanguageContext:LanguageContext,
    useLanguageContext:useLanguageContext,
}

export default dataExport