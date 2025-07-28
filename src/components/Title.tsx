import type { ReactNode } from "react"

type TitleProps = {
    children: ReactNode
}

export default function Title({ children } : TitleProps) {
    return <p className="font-medium text-4xl mb-10"> {children} </p>    
}