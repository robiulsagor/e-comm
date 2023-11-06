import React from 'react'
import Container from '../components/Container'
import Link from 'next/link'

const Cart = () => {
    return (
        <div className='mt-10 lg:mt-20 h-72  flex items-center justify-center'>
            <Container >
                <div className=' text-center'>
                    <h2 className='text-xl font-bold mb-10'>Your cart is empty. Please add something to buy.</h2>

                    <Link href="/" className='border-[2px] border-slate-500 rounded px-2 py-1 hover:bg-black hover:text-white transition-all'>Back to home</Link>
                </div>
            </Container>
        </div>
    )
}

export default Cart