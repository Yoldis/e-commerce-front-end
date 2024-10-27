import eCommerceApi from "../../api"
import { handleError } from "../../helpers"
import { UserInterface } from "../../interface/user.interface"


interface dataPromise {
    ok:boolean,
    data?:{
        user:UserInterface,
        token:string
    },
    error?:string
}


interface DataForm {
    name:string,
    email:string,
    password:string,
}

export const registerService = async(dataForm:DataForm):Promise<dataPromise> => {

    try {
        const resp = await eCommerceApi.post('/auth/register', dataForm);

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