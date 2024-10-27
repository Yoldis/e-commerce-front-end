
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

export const searchProductsService = async(search:string):Promise<dataPromise> => {
    try {
        const data = await eCommerceApi.get(`/products/search?search=${search}`);
        
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

