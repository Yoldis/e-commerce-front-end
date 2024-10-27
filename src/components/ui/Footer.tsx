


export const Footer = () => {
  return (
    <div className="bg-gray-100 p-5 border-t">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 sm:justify-items-center">
            <div className="flex flex-col justify-between">
                <div>
                    <h2 className="text-lg font-bold mb-2">SHOP.CO</h2>
                    <p className="text-sm text-gray-500">Tenemos ropa que se adapta a tu estilo y que estarás orgulloso de usar. De mujeres a hombres.</p>
                </div>

                <p className="text-xs text-gray-400 mt-2">Shop.co © 2000-2024, All Rights Reserved</p>
            </div>
            
            <div className="text-sm flex flex-col gap-3 text-gray-500">
                <h1 className="text-lg font-bold text-black">Company</h1>
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Career</p>
            </div>

            <div className="text-sm flex flex-col gap-3 text-gray-500">
                <h1 className="text-lg font-bold text-black">Help</h1>
                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                
            </div>

            <div className="text-sm flex flex-col gap-3 text-gray-500">
                <h1 className="text-lg font-bold text-black">FAQ</h1>
                <p>Account</p>
                <p>Manage Deliveries</p>
                <p>Orders</p>
                <p>Payments</p>
            </div>
        </div>

    </div>
  )
}
