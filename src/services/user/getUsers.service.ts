



import eCommerceApi from "../../api"
import { handleError } from "../../helpers"
import { UserInterface } from "../../interface/user.interface"


interface dataPromise {
    ok:boolean,
    data?:{
        users:UserInterface[],
    },
    error?:string
}

export const getUsersService = async(userId:string):Promise<dataPromise> => {

    try {
        const data = await eCommerceApi.get(`/auth/users/${userId}`);

        return {
            ok:true,
            data:data.data
        }

    } catch (error) {
        console.log(error)
        return {
            ok:false,
            error:handleError(error)
        }
    }
}