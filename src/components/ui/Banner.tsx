import { SliderBanner } from "../swiper/SliderBanner";

export const Banner = () => {
  return (
    <div className="bg-gray-100 min-h-[400px] grid grid-cols-1 sm:grid-cols-2 gap-10 sm:px-28 sm:py-16 p-3 select-none justify-items-center">
      <div>
        <h1 className="font-bold sm:text-5xl text-3xl mb-2">
          ENCUENTRA ROPA QUE COMBINA CON TU ESTILO
        </h1>
        <p className="text-gray-500 text-sm mb-16">
          Explore nuestra diversa gama de prendas meticulosamente elaboradas,
          diseñadas para resaltar su individualidad y satisfacer su sentido del
          estilo.
        </p>

        <div className="flex gap-5 sm:flex-nowrap flex-wrap justify-center ">
          <div className="border-r-2 border-gray-300 pr-2">
            <p className="text-3xl font-bold">200+</p>
            <p className="text-gray-500 text-xs">Marcas Internacionales</p>
          </div>

          <div className="border-r-2 border-gray-300 pr-2">
            <p className="text-3xl font-bold">2,000+</p>
            <p className="text-gray-500 text-xs">Productos de alta calidad</p>
          </div>

          <div className="border-r-2 border-gray-300 pr-2">
            <p className="text-3xl font-bold">30,000+</p>
            <p className="text-gray-500 text-xs">Clientes felices</p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <SliderBanner />
      </div>
    </div>
  );
};
