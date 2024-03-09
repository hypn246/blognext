"use client"

import { ComponentProps } from "react"
import { useFormStatus} from 'react-dom'
type FormSubmitProps={
    children:React.ReactNode,
    className:string,
}& ComponentProps<"button">

export default function FormSubmit(
    {children, className, ...props}: FormSubmitProps
){
    const {pending}= useFormStatus()

    return(
        <button 
        {...props}
        className={`btn btn-secondary ${className}`}
        type="submit">
            {pending && <span className="loading loading-spinner" />}
            {children}
        </button>
    )
}