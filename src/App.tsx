import { Navigate, Route, Routes } from "react-router-dom";
import { Footer, GaleryImgs, Navbar, SideBar } from "./components";
import {
  HomePage,
  CategoryPage,
  ProductDetailsPage,
  CartPage,
  OrderPage,
  LoginPage,
  RegisterPage,
  OrdersPage,
  OrdersAdminPage,
  ProcfilePage,
  UsersPage,
} from "./pages";
import { useEffect } from "react";
import { useCartStoreHook, useOrderStoreHook, useProductsStoreHook, useUserStoreHook } from "./hooks";
import { Toaster } from "sonner";

function App() {

  const { checkTokenDispatch, user, getUsersDispatch } = useUserStoreHook();
  const{ getProductsDispatch, searchedProducts } = useProductsStoreHook();
  const{getItemCartStorageDispatch} = useCartStoreHook();
  const{getOrdersDispatch, orders, ordersAdmin, getOrdersAdminDispatch} = useOrderStoreHook();

  
  useEffect(() => {
    checkTokenDispatch();
    getProductsDispatch();
    getItemCartStorageDispatch();
  }, []);


  useEffect(() => {
    if(user?.id) {
      getOrdersDispatch(user.id);
      if(user.role === 'Admin') {
        getOrdersAdminDispatch(user.id);
        getUsersDispatch(user.id);
      }
    }
  }, [user])


  return (
    <main className="font-montserrat flex flex-col min-h-screen animate__animated animate__fadeIn">
      <Navbar />
      <SideBar />
      <Toaster />
      
      <div className="flex-grow ">
        {
          searchedProducts?.length ? 
          <GaleryImgs products={searchedProducts}  title="Productos"/> : 
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />

            { user && <>
                <Route path="/procfile" element={<ProcfilePage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/order" element={<OrderPage />} />
                {orders && <Route path="/orders/self" element={<OrdersPage />} />}
                {ordersAdmin && <Route path="/orders/admin" element={<OrdersAdminPage />} />}
                
              </>
            }

            {!user && (
              <>
                <Route path="/auth/login" element={<LoginPage />} />
                <Route path="/auth/register" element={<RegisterPage />} />
              </>
            )}

            <Route path="/*" element={<Navigate to={"/"} />} />
          </Routes>
        }
      </div>

      <Footer />
    </main>
  );
}

export default App;
