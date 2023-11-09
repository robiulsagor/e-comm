import Link from "next/link"
import { Redressed } from "next/font/google"
import Container from "../Container"
import CartCount from "./CartCount"
import UserMenu from "./UserMenu"
import { getCurrentUser } from "@/actions/getUserFromDB"

const redressed = Redressed({ subsets: ["latin"], weight: "400" })

const Navbar = async () => {
    const currentUser = await getCurrentUser() || null

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
                            <CartCount />

                            <UserMenu currentUser={currentUser} />
                        </div>
                    </div>
                </Container>
            </div>


        </div>
    )
}

export default Navbar