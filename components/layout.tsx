import { ReactChildren, ReactChild } from 'react';

interface ChilrenProps {
  children: ReactChild | ReactChildren;
}

 const Layout = ({children}:ChilrenProps) => {
  return (
    <>
    {children}
    </>
  )
}

export default Layout
