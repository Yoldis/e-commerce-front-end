
import { customToast } from "../lib";
import { checkTokenService, getUsersService, loginService, registerService, updateUserService } from "../services";
import { useUserStore } from "../store/store";
import { logout, setLoading, login, getUsers } from "../store/userSlice";
import { useDispatch } from "react-redux";

export const useUserStoreHook = () => {
    
  const userStore = useUserStore();
  const dispatch = useDispatch();


  const checkTokenDispatch = async () => {
    const { ok, data } = await checkTokenService();
    if (!ok) {
      localStorage.setItem('x-token', '')
      return dispatch(logout());
    }
    if(data?.user) dispatch(login(data.user));
  };


  const loginDispatch = async(email:string, password:string) => {
    dispatch(setLoading(true));
    const{ok, data, error} = await loginService({email, password});

    if(!ok) {
      customToast({title:'Algo salio mal', description:error ?? '', status:'error'});
      dispatch(logout());
      return;
    }
    if(data?.user) dispatch(login(data.user));
    if(data?.token) localStorage.setItem('x-token', data?.token)
  }


  const registerDispatch = async(name:string, email:string, password:string) => {
    dispatch(setLoading(true));
    const{ok, data, error} = await registerService({name, email, password});

    if(!ok) {
      customToast({title:'Algo salio mal', description:error ?? '', status:'error'});
      dispatch(logout());
      return;
    }
    if(data?.user) dispatch(login(data.user));
    if(data?.token) localStorage.setItem('x-token', data?.token)
  }


    const logoutDispatch = () => {
        dispatch(logout());
        localStorage.setItem('x-token', '');
    }

    const updateUserDispatch = async(name:string) => {
      dispatch(setLoading(true));
      const{ok, data, error} = await updateUserService(name, userStore.user?.id ?? '');
  
      if(!ok) {
        customToast({title:'Algo salio mal', description:error ?? '', status:'error'});
        dispatch(setLoading(false));
        return;
      }
      if(data?.user) {
        dispatch(login(data.user));
        customToast({title:'Perfil actualizado', description:'Modificado.', status:'success'});
      }
    }


    const getUsersDispatch = async(userId:string) => {
      const{ok, data} = await getUsersService(userId);
      if(!ok) return;

      if(data?.users) {
        dispatch(getUsers(data.users));
      }
    }

  return {
    ...userStore,
    checkTokenDispatch,
    loginDispatch,
    registerDispatch,
    logoutDispatch,
    updateUserDispatch,
    getUsersDispatch
  };
};
