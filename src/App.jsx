import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Admin_home from "./pages/Admin_home";
import Customer_home from "./pages/Customer_home";
import Product_management from "./pages/Product_management";
import Customer_management from "./pages/Customer_management";
import Add_product from "./pages/product/Add_product";
import Update_product from "./pages/product/Update_product";
import Search_product from "./pages/product/Search_product";
import Delete_product from "./pages/product/Delete_product";
import Show_product from "./pages/productDetails/Show_product";
import Get_all_product from "./pages/productDetails/Get_all_product"
import AddToCart from "./pages/CartPage/AddToCart";
import OrderSummary from "./pages/OrderPage/OrderSummary";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/admin_home" element={<Admin_home />} />
          <Route path="/customer_home" element={<Customer_home />} />

          {/* route for manage product */}
          <Route path="/product-management" element = {<Product_management />} />
          <Route path="/customer-management" element = {<Customer_management />} />

          {/* route for product */}
          <Route path="/addProduct" element = { <Add_product /> } />
          <Route path="/updateProduct" element = { <Update_product /> } />
          <Route path="/searchProduct" element = { <Search_product /> } />
          <Route path="/deleteProduct" element = { <Delete_product /> } />
          <Route path="/getAllProduct" element = { <Get_all_product /> } />

          {/* show product */}
          <Route path="/showProduct" element= { <Show_product /> } />

          {/* Add to cart page */}
          <Route path="/cart" element = { <AddToCart /> } />

          {/* show payment details */}
          <Route path="/order-summary/:orderId" element = { <OrderSummary /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
