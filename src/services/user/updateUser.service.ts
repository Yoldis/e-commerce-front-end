


import eCommerceApi from "../../api"
import { handleError } from "../../helpers"
import { UserInterface } from "../../interface/user.interface"


interface dataPromise {
    ok:boolean,
    data?:{
        user:UserInterface,
    },
    error?:string
}

export const updateUserService = async(name:string, userId:string):Promise<dataPromise> => {

    try {
        const data = await eCommerceApi.put('/auth/updateUser', {name, userId});

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