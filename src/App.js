import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import AddProductPage from "./pages/add-products";
import Cart from "./pages/cart";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AddProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
