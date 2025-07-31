import type { ReactNode } from "react"

interface TitleProps {
    children: ReactNode;
    darkTheme: boolean
}

export default function Title({ children, darkTheme } : TitleProps) {
    return <p className={`${darkTheme ? "text-white" : "text-black"} font-poppins font-semibold text-4xl mb-10 duration-1000`}> {children} </p>    
}