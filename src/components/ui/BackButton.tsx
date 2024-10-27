import { IoArrowBackSharp } from "react-icons/io5"
import { useNavigate } from "react-router-dom"




export const BackButton = () => {
    const navigate = useNavigate();
    return (
        <button className="hover:bg-gray-100 p-1 rounded-full active:scale-95 transition-all ease-linear" onClick={() => navigate(-1)}>
            <IoArrowBackSharp size={30} />
        </button>
    )
}
