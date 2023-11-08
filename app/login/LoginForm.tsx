"use client"
import { useState } from "react"
import Heading from '../components/Heading'
import Input from '../components/inputs/Input'
import { FieldValues, useForm, SubmitHandler } from "react-hook-form"
import Button from "../components/Button"
import Link from "next/link"
import { AiOutlineGoogle } from "react-icons/ai"

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        console.log(data);

    }

    return (
        <>
            <Heading title='Sign in to e~Comm' />
            <Button outline label="Sign In with Google"
                icon={AiOutlineGoogle}
                onClick={() => { }}
            />
            <hr className='bg-slate-300 w-full' />

            <Input
                id="email"
                label='Email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label='Password'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type="password"
            />

            <Button
                label={isLoading ? "Loading" : "Submit"}
                onClick={handleSubmit(onSubmit)}
            />

            <p className="text-sm">
                Don't have an account? <Link className="underline" href={'/register'}>Register</Link>
            </p>
        </>
    )
}

export default LoginForm