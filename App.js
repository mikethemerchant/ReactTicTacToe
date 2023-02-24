import React, { useState } from "react";
import "./App.css";
import AddOrder from "./components/AddOrder";
import OrderTable from "./components/OrderTable";
import CompletedOrders from "./components/CompletedOrders";

function App() {
  const [orders, setOrders] = useState([]);

  function addOrder(order) {
    setOrders((prevOrders) => [...prevOrders, order]);
  }

  function removeOrder(index) {
    setOrders((prevOrders) => prevOrders.filter((order, i) => i !== index));
  }

  return (
    <div className="App">
      <h1>Orders</h1>
      <AddOrder onAdd={addOrder} />
      <OrderTable orders={orders} onRemove={removeOrder} />
    </div>
  );
}

export default App;