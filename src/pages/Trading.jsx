import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const socket = io("http://localhost:8000");

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("Bitcoin");

  useEffect(() => {
    // Listen for product updates
    socket.on("updateProducts", (newProducts) => {
      setProducts(newProducts);
    });

    // Cleanup on unmount
    return () => {
      socket.off("updateProducts");
    };
  }, []);

  // Convert data for chart
  const transformData = (values) => {
    return values.map((value) => ({
      date: `${value.date} ${value.time}`,
      price: value.price,
    }));
  };

  // Find the selected product data
  const selectedProductData = products.find(
    (product) => product.name === selectedProduct
  );

  // Get the most recent price
  const getMostRecentPrice = (values) => {
    if (values.length === 0) return 0;
    const mostRecent = values.reduce((latest, current) => {
      return new Date(latest.date + ' ' + latest.time) > new Date(current.date + ' ' + current.time)
        ? latest
        : current;
    });
    return mostRecent.price;
  };

  const mostRecentPrice = selectedProductData ? getMostRecentPrice(selectedProductData.values) : 0;

  return (
    <div className="max-w-[98%] mx-auto py-5">
      <h1 className="text-center font-bold text-primary">Трейдинг</h1>
      <div className="flex items-center h-[67vh] gap-2">
        <div className="flex flex-col gap-2 bg-base-300 h-full overflow-y-auto w-2/12 p-5 rounded-lg border border-primary">
          {products.map((item, id) => (
            <button
              key={id}
              className={`btn btn-sm btn-outline text-primary ${
                selectedProduct === item.name ? "bg-primary text-white" : ""
              }`}
              onClick={() => setSelectedProduct(item.name)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex-1 p-5 flex flex-col justify-between bg-base-300 rounded-lg border-primary border h-full">
          {selectedProductData && (
            <>
              <h2 className="font-bold text-primary ml-10 mb-5">
                {selectedProduct}
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                  data={transformData(selectedProductData.values)}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
              </ResponsiveContainer>
            </>
          )}
        </div>
        <div className="flex flex-col gap-2 bg-base-300 justify-between h-full overflow-y-auto w-2/12 p-5 rounded-lg border border-primary">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold">Название: {selectedProduct}</p>
            <p className="text-xs font-bold">Последняя сумма: <span className="text-secondary animate-pulse">${mostRecentPrice.toFixed(2)}</span></p>
            <p className="text-xs font-bold text-accent">Комиссия: 5%</p>
          </div>
          <div className="flex flex-col gap-2">
            <button className="btn btn-primary btn-success">
              Покупать
            </button>
            <button className="btn btn-outline btn-error">
              Продать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
