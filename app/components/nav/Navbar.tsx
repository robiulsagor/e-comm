"use client"

import Link from "next/link"
import { Redressed } from "next/font/google"
import { BsCart3 } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import { BiSolidChevronDownSquare } from "react-icons/bi"
import Container from "../Container"
import { useState, useEffect } from "react"
import { useCart } from "@/hooks/useCart"

const redressed = Redressed({ subsets: ["latin"], weight: "400" })

const Navbar = () => {
    const [userOptions, setUserOptions] = useState(false)
    const { cartProducts } = useCart()

    return (
        <div className="sticky top-0 left-0 w-full bg-slate-200 z-30">
            <div className="">
                <Container>
                    <div className="flex items-center justify-between py-4">
                        <Link href={"/"}
                            className={`${redressed.className} text-2xl`}>E-Comm</Link>

                        {/* items search bar */}
                        <div className="hidden md:block border md:w-[350px] lg:w-[380px] xl:w-[420px] text-sm lg:text-[16px]">
                            <div className="border border-slate-500 rounded-lg overflow-hidden flex ">
                                <input type="text" name="" id="" className="p-2 outline-none flex-grow " />
                                <button className=" bg-black text-slate-100 py-2 px-3 hover:bg-slate-700 transition-all  ">Submit</button>
                            </div>
                        </div>

                        {/* cart Button */}
                        <div className="flex justify-between items-center gap-8 lg:gap-12 relative  select-none">
                            <Link href='/cart' className="cursor-pointer relative">
                                <BsCart3 className="w-[22px] h-[22px] md:w-[27px] md:h-[27px]" />
                                <span className="absolute -top-4 -right-4 bg-slate-900 text-slate-100  rounded-full text-sm px-2 py-1">
                                    {cartProducts?.length || 0}
                                </span>
                                {/* cart items count */}
                            </Link>

                            <div className="border border-slate-500 flex gap-2 items-end rounded-3xl p-2 cursor-pointer z-30"
                                onClick={() => setUserOptions(prev => !prev)}>
                                <AiOutlineUser className="w-[22px] h-[22px] md:w-[27px] md:h-[27px]" />
                                <BiSolidChevronDownSquare className="w-[18px] h-[18px] md:w-[21px] md:h-[21px]" />
                            </div>

                            <div className={` top-full right-0  bg-slate-50 absolute z-30 overflow-hidden transition-all duration-300 rounded-lg shadow-xl ${userOptions ? "w-auto" : "w-0"}`}>
                                <ul className="flex flex-col w-40">
                                    <Link href={"/"} className="py-2 px-4 hover:bg-slate-300">Login</Link>
                                    <Link href={"/"} className="py-2 px-4 hover:bg-slate-300">Register</Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* User options overlay containers */}
            <div className={` bg-[#fdfcfc7f]   w-screen h-screen left-0 top-0 z-10 ${userOptions ? "fixed z-10" : "hidden"}`} onClick={() => setUserOptions(false)} />
        </div>
    )
}

export default Navbar