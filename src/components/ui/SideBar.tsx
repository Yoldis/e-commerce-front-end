import {
  IoCloseSharp,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { useUiStoreHook, useUserStoreHook } from "../../hooks";
import { Link, NavLink } from "react-router-dom";
import { getTwoLetters } from "../../helpers";

const isAdmin = [
  { path: "/users", title: "Usuarios", icon: <IoPeopleOutline size={25} /> },
  { path: "/orders/admin", title: "Ordenes", icon: <IoTicketOutline size={25} /> },
  
];

const isUser = [
  { path: "/procfile", title: "Perfil", icon: <IoPersonOutline size={25} /> },
  { path: "/orders/self", title: "Ordenes", icon: <IoTicketOutline size={25} /> },
];


export const SideBar = () => {
  const { openSidebar, onToggleSidebar } = useUiStoreHook();
  const{user, logoutDispatch} = useUserStoreHook();

  const onLogout = () => {
    onToggleSidebar();
    logoutDispatch();
  };

  return (
    <div>
      {openSidebar && (
        <div
          onClick={onToggleSidebar}
          className={`fixed top-0 left-0 w-full h-full bg-black/50 backdrop-filter backdrop-blur-sm z-20 cursor-pointer`}
        ></div>
      )}

      <nav
        className={`fixed top-0 transition-all ease-linear duration-100 bg-white max-w-sm ${
          openSidebar ? "left-[0]" : "left-[-286px]"
        } w-[286px] h-screen z-30`}
      >
        <div className="flex items-center justify-between gap-2 p-4">
          <h1 className="font-bold text-xl">SHOP.CO</h1>
          <button
            onClick={onToggleSidebar}
            className="transition-all  duration-100 active:scale-90 hover:bg-gray-100 p-1 rounded-full"
          >
            <IoCloseSharp size={35} />
          </button>
        </div>
        {
          user && 
          <div className="text-center my-5">
            <p className="uppercase pt-6 font-semibold mb-3 h-[70px] w-[70px] ring ring-sky-500 rounded-full m-auto">{getTwoLetters(user.name)}</p>
            <p className="text-sm font-semibold">{user.name}</p>
            <p className="text-xs">{user.role}</p>
          </div>
        }

        {user && (
          <>
            <div>
              {isUser.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => onToggleSidebar()}
                  className={({isActive}) => (`flex items-center p-2 transition-all font-semibold hover:bg-sky-500 hover:text-white ${isActive ? 'bg-sky-500 text-white' : ''}  `)}
                >
                  {link.icon}
                  <span className="ml-3 text-lg">{link.title}</span>
                </NavLink>
              ))}
            </div>

            {
              user.role === 'Admin' && <>
                <div className="border my-5" />
                <div className="">
                  {isAdmin.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => onToggleSidebar()}
                      className={({isActive}) => (`flex items-center p-2 transition-all font-semibold hover:bg-sky-500 hover:text-white ${isActive ? 'bg-sky-500 text-white' : ''}  `)}
                    >
                      {link.icon}
                      <span className="ml-3 text-lg">{link.title}</span>
                    </NavLink>
                  ))}
                </div>
              </>
            }
          </>
        )}

        <div className="border my-5" />

        {user ? (
          <button
            onClick={() => onLogout()}
            className="flex w-full items-center p-2 hover:bg-gray-100 transition-all font-semibold"
          >
            <IoLogOutOutline size={25} />
            <span className="ml-3 text-lg">Salir</span>
          </button>
        ) : (
          <Link
            to="/auth/login"
            onClick={() => onToggleSidebar()}
            className="flex items-center p-2 hover:bg-gray-100 transition-all font-semibold"
          >
            <IoLogInOutline size={25} />
            <span className="ml-3 text-lg">Ingresar</span>
          </Link>
        )}
      </nav>
    </div>
  );
};
