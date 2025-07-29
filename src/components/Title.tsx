import type { ReactNode } from "react"

type TitleProps = {
    children: ReactNode;
    darkTheme: boolean
}

export default function Title({ children, darkTheme } : TitleProps) {
    return <p className={`${darkTheme ? "text-white" : "text-black"} font-medium text-4xl mb-10 duration-1000`}> {children} </p>    
}