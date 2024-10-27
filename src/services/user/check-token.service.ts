import eCommerceApi from "../../api"
import { handleError } from "../../helpers"
import { UserInterface } from "../../interface/user.interface";



interface dataPromise {
    ok:boolean,
    data?:{
        user:UserInterface,
    },
    error?:string
}


export const checkTokenService = async():Promise<dataPromise> => {

    try {
        const resp = await eCommerceApi.get('/auth/validate-token');

        return {
            ok:true,
            data:resp.data
        }

    } catch (error) {
        console.log(error)

        return {
            ok:false,
            error:handleError(error)
        }
    }
}