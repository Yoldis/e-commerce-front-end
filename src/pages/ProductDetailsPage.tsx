
import { useParams } from "react-router-dom";
import { AddToCartCounter, BackButton, SizesProduct, Star} from "../components";
import { CartInterface, ProductInterface } from "../interface";
import { useCartStoreHook, useProductsStoreHook } from "../hooks";
import { useEffect, useState } from "react";
import { customToast } from "../lib";


export const ProductDetailsPage = () => {
  const params = useParams() as {id:string};
  const{products} = useProductsStoreHook();
  const{addToCartDispatch, cart} = useCartStoreHook();
  
  const [productById, setProductById] = useState<ProductInterface|null>(null);
  const [counter, setCounter] = useState(0);
  const [selectdsize, setSelectedSize] = useState<string>('');
  const [errors, setErrors] = useState<{talla?:string, count?:string}>({});


  const onSelectSize = (size:string) => {
    if(selectdsize === (size)) setSelectedSize('')
    else setSelectedSize(size)
  }

  const onCounter = (operation:string) => {
    if(operation === 'add') {
      if(counter === productById?.inStock) customToast({title:'Producto al limite', description:'No puedes seleccionar mas productos', status:'error'})
      else setCounter(counter + 1)
    }
    else if(operation === 'remove' && counter > 0)  setCounter(counter - 1)
  }


  const onAddToCart = () => {
    setErrors({});
    if(!selectdsize) return setErrors({talla:'Selecciona una talla*'});
    else if(!counter) return setErrors({count:'Agrega un item*'});

    const itemToCart:CartInterface = {
      id:productById?.id ?? '',
      product:productById?.name ?? '',
      price:productById?.price ?? 0,
      image:productById?.image[0].url ?? '',
      unit:counter,
      size:selectdsize,
      subTotal:productById!.price * counter
    };

    const unitsInCart = Object.values(cart).filter(p => p.id === params.id)
    .reduce(((acc, item ) => {
      return acc + item.unit
    }), 0);
    if(unitsInCart + counter > productById!.inStock) return customToast({title:'Producto al limite', description:`No puedes seleccionar mas de ${productById!.inStock - unitsInCart} productos`, status:'error'});

    addToCartDispatch(itemToCart);
    customToast({title:'Agregado al carrito', description:`${counter} item agregado al carrito`, status:'success'})
    setCounter(0);
    setSelectedSize('');
    setErrors({})
  }
 
  useEffect(() => {
    if(products) {
      const filterProduct = products.find(p => p.id === params.id);
      if(filterProduct) setProductById(filterProduct)
    }
  }, [products, params])

  
  if(!productById) {
    return (
      <h1 className="text-2xl m-auto w-[500px] font-bold my-20">404 Producto no encontrado</h1>
    )
  }

  return (
    <div className="mx-2 mb-5 animate__animated animate__fadeIn ">
      <div className="mt-2"><BackButton /></div>

      <section className="mx-4 sm:mx-10 grid grid-cols-1 sm:grid-cols-[300px_600px] gap-7 justify-center ">

        <article className="m-auto">
            <img src={productById.image[0].url} className="w-[300px] h-[410px] object-cover border rounded-md" alt="" />
        </article>

        {/* Datos del producto */}
        <article className="flex justify-between flex-col">
          <div className="flex flex-col gap-1">
            <h1 className="sm:text-3xl text-2xl font-bold uppercase">{productById.name}</h1>
            <div className=""><Star/></div>
            <p className="font-semibold text-xl">$ {productById.price}</p>
            <p className="font-medium text-lg">Stock: {productById.inStock}</p>
            <p className="text-gray-400 text-sm">{productById.description}</p>
          </div>

          <div >
            <div className="border-t">
              
              <h3 className="text-gray-400 font-semibold text-sm my-5">
                <p>Selecciona el Size</p>
                <p className="text-red-500 mb-1 text-xs font-semibold">{errors.talla}</p>
              </h3>
              <SizesProduct onSelectSize={onSelectSize} selectdsize={selectdsize} sizes={productById.sizes}/>
            </div>

            <div className="border-t mt-5">
            <p className="text-red-500 ml-2 mt-1 text-xs font-semibold">{errors.count}</p>
              <div className="flex items-center mt-5 gap-5">
                    <AddToCartCounter counter={counter} onCounter={onCounter} size={20} className={{className:'px-5 py-3'}} />
                    
                  <button disabled={!productById.inStock} onClick={onAddToCart} className="bg-black w-full text-white px-7 py-2 rounded-full active:scale-95 transition-all ease-linear sm:text-base text-xs">Agregar al carrito</button>
              </div>
            </div>
          </div>
        </article>

      </section>
    </div>
  )
}
