"use client"

import { IconType } from "react-icons"

interface ButtonProps {
    label: string,
    disabled?: boolean,
    small?: boolean,
    outline?: boolean,
    custom?: boolean,
    icon?: IconType,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}


const Button: React.FC<ButtonProps> = ({
    label, custom, onClick, disabled, icon: Icon, outline, small
}) => {
    return (
        <button onClick={onClick} disabled={disabled} className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 w-full border-slate-700 transition ${outline ? "bg-white " : "bg-slate-700"} ${outline ? "text-slate-700" : "text-white"} ${small ? "text-sm font-light" : "text-md font-bold"} ${small ? "px-2 py-1 border[1px]" : "px-4 py-3 border-2"} flex items-center gap-3 justify-center`}>
            {Icon && <Icon size={24} />}
            {label}
        </button>
    )
}

export default Button