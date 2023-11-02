import Link from "next/link"
import { FaFacebookF } from "react-icons/fa"
import { BiLogoFacebookCircle } from "react-icons/bi"
import { FaXTwitter } from "react-icons/fa6"
import { AiOutlineInstagram, AiFillInstagram } from "react-icons/ai"
import { AiOutlineYoutube, AiFillYoutube } from "react-icons/ai"
import Container from "../Container"

const Footer = () => {
    return (
        <div className="bg-slate-800 text-white pt-10 pb-6 xl:pt-20 xl:pb-14  mt-6">
            <Container>
                <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <div>
                        <h2 className="mb-4">Shop Categories</h2>
                        <ul className="flex flex-col text-[13px] md:text-[15px] gap-1 text-slate-400">

                            <Link href={"/"}>Phones</Link>
                            <Link href={"/"}>Laptops</Link>
                            <Link href={"/"}>Desktops</Link>
                            <Link href={"/"}>Watches</Link>
                            <Link href={"/"}>TVs</Link>
                            <Link href={"/"}>Accessories</Link>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-4">Customer Sevices</h2>
                        <ul className="flex flex-col text-[13px] md:text-[15px] gap-1 text-slate-400 ">

                            <Link href={"/"}>Contact Us</Link>
                            <Link href={"/"}>Shipping Policy</Link>
                            <Link href={"/"}>Returns &amp; Exchanges</Link>
                            <Link href={"/"}>Watches</Link>
                            <Link href={"/"}>FAQs</Link>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-4">Follow Us</h2>
                        <ul className="flex flex-row text-[13px] md:text-[15px] gap-2 text-slate-300 ">

                            <Link href={"/"}>
                                <BiLogoFacebookCircle size={20} />
                            </Link>
                            <Link href={"/"}>
                                <FaXTwitter size={20} />
                            </Link>
                            <Link href={"/"}>
                                <AiFillInstagram size={20} />
                            </Link>
                            <Link href={"/"}>
                                <AiFillYoutube size={20} />
                            </Link>

                        </ul>
                    </div>

                    <div className="col-span-2">
                        <h2 className="mb-4">About Us</h2>
                        <ul className="flex flex-col text-[13px] md:text-[15px] gap-1  text-slate-400 text-justify">

                            <p className="text-slate-400 text-justify">
                                At our electronics store, we are dedicated to provide the latest and greatest devices and accessories to our customers. With a wide selection of phones, tvs, laptops, desktops etc.
                            </p>

                            <p className="mt-2">&copy; {new Date().getFullYear()} E-Comm. All rights reserved.</p>
                        </ul>
                    </div>



                </div>
            </Container>
        </div>
    )
}

export default Footer