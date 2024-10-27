import eCommerceApi from "../../api"
import { handleError } from "../../helpers"
import { ProductInterface } from "../../interface"



interface dataPromise {
    ok:boolean,
    data?:{
        products:ProductInterface[]
    },
    error?:string
}

export const getProductsService = async():Promise<dataPromise> => {

    try {
        const data = await eCommerceApi.get('/products');

        return {
            ok:true,
            data:data.data
        }

    } catch (error) {
        return {
            ok:false,
            error:handleError(error)
        }
    }
}