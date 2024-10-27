import eCommerceApi from "../../api"
import { handleError } from "../../helpers";
import { OrderInterface } from "../../interface";




interface DataPromise {
    ok:boolean,
    data?:{
        orders:OrderInterface[]
    },
    error?:string
}

export const getOrdersService = async(userId:string):Promise<DataPromise> => {

    try {
        const data = await eCommerceApi.get(`/order/${userId}`);
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