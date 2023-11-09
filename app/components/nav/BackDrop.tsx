interface BackDropProps {
    onClick: () => void
}

const BackDrop: React.FC<BackDropProps> = ({ onClick }) => {
    return (
        <div onClick={onClick}
            className={` opacity-50 w-screen h-screen left-0 top-0 z-10 fixed bg-slate-300 }`}></div>
    )
}

export default BackDrop