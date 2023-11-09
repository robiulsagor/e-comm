"use client"
import { useEffect, useState } from "react"
import Heading from '../components/Heading'
import Input from '../components/inputs/Input'
import { FieldValues, useForm, SubmitHandler } from "react-hook-form"
import Button from "../components/Button"
import Link from "next/link"
import { AiOutlineGoogle } from "react-icons/ai"
import axios from "axios"
import toast from "react-hot-toast"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { SafeUser } from "@/types"

interface LoginFormProps {
    currentUser: SafeUser | null
}

const RegisterForm: React.FC<LoginFormProps> = ({ currentUser }) => {
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })
    const router = useRouter()

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        axios.post("/api/register", data)
            .then(() => {
                toast.success("User created")

                signIn("credentials", {
                    email: data.email,
                    password: data.password,
                    redirect: false,
                }).then((callback) => {
                    if (callback?.ok) {
                        router.push("/cart")
                        router.refresh()
                        toast.success("User logged in")
                    }

                    if (callback?.error) {
                        toast.error(callback?.error)
                    }
                })
            })
            .catch(() => toast.error("Something went wrong!!!!"))
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        currentUser && router.push("/cart")
    }, [])

    return (
        <>
            {currentUser ? <p>
                Logged In. Redirecting...
            </p> : (

                <>
                    <Heading title='Sign up for e~Comm' />
                    <Button outline label="Continue with Google"
                        icon={AiOutlineGoogle}
                        onClick={() => signIn("google")}
                        disabled={isLoading}
                    />
                    <hr className='bg-slate-300 w-full' />
                    <Input
                        id="name"
                        label='Name'
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
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
                        Already have an account? <Link className="underline" href={'/login'}>Login</Link>
                    </p>
                </>
            )}
        </>
    )
}

export default RegisterForm