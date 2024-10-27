
import eCommerceApi from "../../api"
import { handleError } from "../../helpers"
import { UserInterface } from "../../interface/user.interface"


interface DataForm {
    email:string,
    password:string,
}

interface dataPromise {
    ok:boolean,
    data?:{
        user:UserInterface,
        token:string
    },
    error?:string
}

export const loginService = async(dataForm:DataForm):Promise<dataPromise> => {

    try {
        const data = await eCommerceApi.post('/auth/login', dataForm);

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