import Link from "next/link"
import { FaFacebookF } from "react-icons/fa"
import { BiLogoFacebookCircle } from "react-icons/bi"
import { FaXTwitter } from "react-icons/fa6"
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai"
import Container from "../Container"

const Footer = () => {
    return (
        <div className="bg-slate-800 text-white pt-10 pb-6 xl:pt-20 xl:pb-14  mt-6">
            <Container>
                {/* grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 */}
                <div className="flex flex-wrap gap-y-4  justify-between ">

                    <div className="w-1/2  md:w-1/3 lg:w-1/4 px-2">
                        <h2 className="mb-4">Shop Categories</h2>
                        <ul className="flex flex-col text-[13px] md:text-[15px] gap-1 text-slate-400 items-start">

                            <Link className="hover:text-slate-200 transition-all" href={"/"}>Phones</Link>
                            <Link className="hover:text-slate-200 transition-all" href={"/"}>Laptops</Link>
                            <Link className="hover:text-slate-200 transition-all" href={"/"}>Desktops</Link>
                            <Link className="hover:text-slate-200 transition-all" href={"/"}>Watches</Link>
                            <Link className="hover:text-slate-200 transition-all" href={"/"}>TVs</Link>
                            <Link className="hover:text-slate-200 transition-all" href={"/"}>Accessories</Link>
                        </ul>
                    </div>

                    <div className="w-1/2  md:w-1/3 lg:w-1/4 px-2">
                        <h2 className="mb-4">Customer Sevices</h2>
                        <ul className="flex flex-col text-[13px] md:text-[15px] gap-1 text-slate-400 items-start">

                            <Link className="hover:text-slate-200 transition-all" href={"/"}>Contact Us</Link>
                            <Link className="hover:text-slate-200 transition-all" href={"/"}>Shipping Policy</Link>
                            <Link className="hover:text-slate-200 transition-all" href={"/"}>Returns &amp; Exchanges</Link>
                            <Link className="hover:text-slate-200 transition-all" href={"/"}>Watches</Link>
                            <Link className="hover:text-slate-200 transition-all" href={"/"}>FAQs</Link>
                        </ul>
                    </div>

                    <div className="w-full sm:s-1/2 md:w-1/3 lg:w-1/4 px-2">
                        <h2 className="mb-4">About Us</h2>
                        <ul className="flex flex-col text-[13px] md:text-[15px] gap-1  text-slate-400 text-justify">

                            <p className="text-slate-400 text-justify">
                                At our electronics store, we are dedicated to provide the latest and greatest devices and accessories to our customers. With a wide selection of phones, tvs, laptops, desktops etc.
                            </p>

                            <p className="mt-2">&copy; {new Date().getFullYear()} E-Comm. All rights reserved.</p>
                        </ul>
                    </div>

                    <div className="w-1/2  md:w-1/3 lg:w-1/4 px-2 lg:text-center">
                        <h2 className="mb-4">Follow Us</h2>
                        <ul className="flex flex-row text-[13px] md:text-[15px] gap-2 text-slate-300 text-center lg:justify-center items-start">

                            <Link className="hover:text-slate-200 transition-all" href={"/"}>
                                <BiLogoFacebookCircle size={20} />
                            </Link>
                            <Link className="hover:text-slate-200 transition-all" href={"/"}>
                                <FaXTwitter size={20} />
                            </Link>
                            <Link className="hover:text-slate-200 transition-all" href={"/"}>
                                <AiFillInstagram size={20} />
                            </Link>
                            <Link className="hover:text-slate-200 transition-all" href={"/"}>
                                <AiFillYoutube size={20} />
                            </Link>

                        </ul>
                    </div>





                </div>
            </Container>
        </div>
    )
}

export default Footer