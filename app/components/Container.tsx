import React from "react"

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="max-w-[1550px] mx-auto px-4 md:px-10 lg:px-16 xl:px-20">
            {children}
        </div>
    )
}

export default Container