import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();

export const ThemeProvider = ({ children}) => {
    const [isdarkMide, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode(!isdarkMide)
    }

    useEffect(() => {
        if(isdarkMide){
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isdarkMide])


    return(
        <ThemeContext.Provider value={{isdarkMide, toggleTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}

