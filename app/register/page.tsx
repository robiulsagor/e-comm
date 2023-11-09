import React from 'react'
import Container from '../components/Container'
import FormWrapper from '../components/FormWrapper'
import RegisterForm from './RegisterForm'
import { getCurrentUser } from '@/actions/getUserFromDB'

const Register = async () => {
    const currentUser = await getCurrentUser() || null
    return (
        <Container>
            <FormWrapper>
                <RegisterForm currentUser={currentUser} />
            </FormWrapper>
        </Container>
    )
}

export default Register