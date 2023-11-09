"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { AiFillCaretDown, AiOutlineUser } from "react-icons/ai"
import MenuItem from "./MenuItem"
import { signOut } from "next-auth/react"
import BackDrop from "./BackDrop"
import { SafeUser } from "@/types"
import Avatar from "../Avatar"

interface UserMenuProps {
    currentUser: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
    const [userOptions, setUserOptions] = useState(false)
    const router = useRouter()

    const toggleOpen = () => {
        setUserOptions(prev => !prev)
    }
    return (
        <>
            <div className="border border-slate-500 flex gap-2 items-end rounded-3xl p-2 cursor-pointer z-30"
                onClick={() => setUserOptions(prev => !prev)}>
                <Avatar src={currentUser?.image} />
                <AiFillCaretDown className="w-[18px] h-[18px] md:w-[21px] md:h-[21px]" />
            </div>

            <div className={` top-full right-0  bg-slate-50 absolute z-30 overflow-hidden transition-all  rounded-lg shadow-xl duration-300 ${userOptions ? "w-[190px]" : "w-0"}`}>
                {currentUser ? (
                    <div className="w-[200px]">
                        <Link href={"/orders"}>
                            <MenuItem onClick={toggleOpen}>
                                Your orders
                            </MenuItem>
                        </Link>
                        <Link href={"/admin"}>
                            <MenuItem onClick={toggleOpen}>
                                Admin Dashboard
                            </MenuItem>
                        </Link>
                        <hr />
                        <MenuItem onClick={() => {
                            toggleOpen();
                            signOut()
                        }}>
                            Logout
                        </MenuItem>
                    </div>
                ) : (
                    <div className="w-[200px]">
                        <Link href={"/login"}>
                            <MenuItem onClick={toggleOpen}>
                                Login
                            </MenuItem>
                        </Link>
                        <Link href={"/register"}>
                            <MenuItem onClick={toggleOpen}>
                                Register
                            </MenuItem>
                        </Link>
                    </div>
                )}


            </div>
            {/* User options overlay containers */}
            {userOptions && <BackDrop onClick={toggleOpen} />}
        </>
    )
}

export default UserMenu