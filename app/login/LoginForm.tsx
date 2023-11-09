"use client"
import { useEffect, useState } from "react"
import Heading from '../components/Heading'
import Input from '../components/inputs/Input'
import { FieldValues, useForm, SubmitHandler } from "react-hook-form"
import Button from "../components/Button"
import Link from "next/link"
import { AiOutlineGoogle } from "react-icons/ai"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { SafeUser } from "@/types"

interface LoginFormProps {
    currentUser: SafeUser | null
}

const LoginForm: React.FC<LoginFormProps> = ({ currentUser }) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

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
        }).finally(() => setIsLoading(false))
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
                    <Heading title='Sign in to e~Comm' />
                    <Button outline label="Sign In with Google"
                        icon={AiOutlineGoogle}
                        onClick={() => signIn("google")}
                        disabled={isLoading}
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
            )}
        </>
    )
}

export default LoginForm