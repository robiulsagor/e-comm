import React from 'react'
import Container from '../components/Container'
import CartClient from './CartClient'
import { getCurrentUser } from '@/actions/getUserFromDB'

const Cart = async () => {
    const currentUser = await getCurrentUser()

    return (
        <div className='mt-10 lg:mt-12 mb-8 '>
            <Container >
                <CartClient currentUser={currentUser} />
            </Container>
        </div>
    )
}

export default Cart