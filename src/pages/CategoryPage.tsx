import { useParams, useNavigate } from 'react-router-dom';
import { ProductCard, Title } from "../components"
import { useEffect, useState } from 'react';
import { ProductInterface } from '../interface';
import { useProductsStoreHook } from '../hooks';


const categoryPermitted = [
  {category:'men', title:"Hombres", },
  {category:'women', title:"Mujeres", },
  {category:'kids', title:"Niños", }
];

interface Params {
    category?:string
}

export const CategoryPage = () => {

    const params = useParams() as Params;
    const category = params.category;
    const {products} = useProductsStoreHook();
    const navigate = useNavigate();
    const [productsByCategory, setProductsByCategory] = useState<ProductInterface[]>([]);
    const [title, setTitle] = useState('');
    

    useEffect(() => {
        if(category && !categoryPermitted.some(c => c.category === category)) navigate('/');
        const filterProducts = products?.filter(p => p.category.name === category) ?? [];
        setProductsByCategory(filterProducts);
        setTitle(categoryPermitted.find(c => c.category === category)?.title ?? '')
        
    }, [navigate, category, products])


  return (
    <div className="animate__animated animate__fadeIn mt-5">
      <div className="mx-5">
        <Title title={`Categoria de ${title}`}/>

        <ProductCard products={productsByCategory}/>
      </div>
    </div>
  )
}
