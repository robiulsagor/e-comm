import Image from "next/image"
import { FaUserCircle } from "react-icons/fa"
interface AvatarProps {
    src?: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
    if (src) {
        <Image
            src={src}
            alt="Avatar Image"
            width={10} height={10}
            className="rounded-full "
        />

    }
    return <FaUserCircle size={10} className="w-10 h-2" />
}

export default Avatar