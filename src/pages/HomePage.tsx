import { Banner, GaleryImgs } from "../components";
import { useProductsStoreHook } from "../hooks";

export const HomePage = () => {
  const { products } = useProductsStoreHook();

  const productsMen = products?.filter((p) => p.category.name === "men") ?? [];
  const productsWomen =
    products?.filter((p) => p.category.name === "women") ?? [];
  const productsKids =
    products?.filter((p) => p.category.name === "kids") ?? [];

  return (
    <div className="animate__animated animate__fadeIn">
      <Banner />
      <GaleryImgs products={productsMen} title={"Hombres"} to="/category/men" />
      <GaleryImgs
        products={productsWomen}
        title="Mujeres"
        to="/category/women"
      />
      <GaleryImgs products={productsKids} title="Niños" to="/category/kids" />
    </div>
  );
};
