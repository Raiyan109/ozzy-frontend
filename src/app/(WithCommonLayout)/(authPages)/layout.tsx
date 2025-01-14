
import React, { ReactNode } from 'react'

const AuthLayout = async ({ children }: { children: ReactNode }) => {

    return (
        <div className="">
            {children}
        </div>
    )
}

export default AuthLayout