import React from 'react'

interface IHeaderProps {
    label: string;
    color?:string;
    children?:JSX.Element;
}



export const Header = ({label = "Counter", children}:IHeaderProps) => {
  return (
    <>
        <h1>{label}</h1>
        {children}
    </>
  )
}
