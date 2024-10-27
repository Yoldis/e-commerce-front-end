import eCommerceApi from "../../api"
import { handleError } from "../../helpers"
import { OrderInterface } from "../../interface"



interface DataPromise {
    ok:boolean,
    data?:{
        order:OrderInterface
    },
    error?:string
}

export const createOrderService = async(order:OrderInterface):Promise<DataPromise> => {

    try {
        const data = await eCommerceApi.post('/order', order);

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