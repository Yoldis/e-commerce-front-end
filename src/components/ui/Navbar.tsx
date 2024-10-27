import {
  IoCartOutline,
  IoPersonCircleSharp,
  IoMenu,
} from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useCartStoreHook, useProductsStoreHook, useUiStoreHook, useUserStoreHook } from "../../hooks";
import { getTwoLetters } from "../../helpers";
import { Search } from "./Search";

const links = [
  { to: "/category/men", title: "Hombres" },
  { to: "/category/women", title: "Mujeres" },
  { to: "/category/kids", title: "Niños" },
];

export const Navbar = () => {
  const { onToggleSidebar } = useUiStoreHook();
  const{user} = useUserStoreHook();
  const{totalUnit} = useCartStoreHook();
  const{searchProductsDispatch} = useProductsStoreHook();
  
  const onSearchProducts = (search:string) => {
      searchProductsDispatch(search);
  }

  return (
    <nav className="w-full flex sm:px-20 px-2 py-5 items-center justify-around gap-2 select-none sticky top-0 z-10 bg-white border-b">
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleSidebar}
          className="hover:bg-gray-100 p-1 rounded-full active:scale-95 transition-all ease-linear"
        >
          <IoMenu size={30} />
        </button>
        <Link to={"/"} className="font-bold text-2xl">
          SHOP.CO
        </Link>
      </div>

      <ul className="sm:flex hidden gap-5 ">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `${
                isActive ? "border-sky-400 font-semibold" : ""
              } border-b-2 transition-all ease-linear hover:border-sky-400`
            }
          >
            {link.title}
          </NavLink>
        ))}
      </ul>

        <div >
          <Search onDispatchSearch={(search) => onSearchProducts(search)}/>
        </div>

      <div className="flex items-center gap-5">
        <Link
          to={"/cart"}
          className="inline-block hover:bg-gray-100 p-1.5 rounded-full transition-all ease-linear relative"
        >
          <IoCartOutline size={25} />
            <span className={`${totalUnit ? 'block' : 'hidden'} absolute top-0 -right-2 bg-sky-500 text-white font-semibold w-[22px] h-[22px] text-sm text-center rounded-full`}>
              {totalUnit > 99 ? '99+' : totalUnit }
            </span>
        </Link>
        {
          user ? <>
           <Link to={'/procfile'} className="pt-1.5 uppercase font-semibold text-xs text-center h-[30px] w-[30px] ring ring-sky-500 rounded-full m-auto">{getTwoLetters(user.name)}</Link>
          </> :
          <Link to={'/auth/login'} className="hover:bg-gray-100 p-1.5 rounded-full transition-all ease-linear">
            <IoPersonCircleSharp size={25} />
          </Link>
        }
      </div>
    </nav>
  );
};
