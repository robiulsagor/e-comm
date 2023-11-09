interface MenuItemProps {
    children: React.ReactNode;
    onClick: () => void
}

const MenuItem: React.FC<MenuItemProps> = ({
    children, onClick
}) => {
    return (
        <div onClick={onClick} className="py-2 px-4 hover:bg-slate-300">
            {children}
        </div>
    )
}

export default MenuItem