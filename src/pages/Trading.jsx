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
  LineChart,
  Line,
  BarChart,
  Bar,
  ComposedChart, // Новый компонент
} from "recharts";

const socket = io("http://localhost:8000");

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("Bitcoin");
  const [chartType, setChartType] = useState("AreaChart");

  useEffect(() => {
    socket.on("updateProducts", (newProducts) => {
      setProducts(newProducts);
    });

    return () => {
      socket.off("updateProducts");
    };
  }, []);

  // Convert data for chart
  const transformData = (values) => {
    return values.map((value) => ({
      date: `${value.date} ${value.time}`,
      price: value.price,
      volume: value.volume || 0, // Добавление объема для ComposedChart
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
      return new Date(latest.date + " " + latest.time) >
        new Date(current.date + " " + current.time)
        ? latest
        : current;
    });
    return mostRecent.price;
  };

  const mostRecentPrice = selectedProductData
    ? getMostRecentPrice(selectedProductData.values)
    : 0;

  return (
    <div className="max-w-[98%] mx-auto py-5">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-center font-bold text-xl font-mono text-primary ">
          Трейдинг
        </h1>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-accent"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          Мои покупки
        </button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h2 className="text-primary font-semibold text-lg mb-2 border-b pb-2 border-primary">
              Купленные товары
            </h2>
            <div className="py-2 h-64 overflow-y-auto">
              <div>1</div>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div className="flex items-center h-[58vh] gap-2">
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
              <div>
                <h2 className="font-bold text-primary ml-10 mb-5">
                  {selectedProduct}
                </h2>

                <div className="flex gap-2 mb-5">
                  <button
                    className={`btn btn-sm ${
                      chartType === "AreaChart" ? "btn-primary" : "btn-outline"
                    }`}
                    onClick={() => setChartType("AreaChart")}
                  >
                    Area Chart
                  </button>
                  <button
                    className={`btn btn-sm ${
                      chartType === "LineChart" ? "btn-primary" : "btn-outline"
                    }`}
                    onClick={() => setChartType("LineChart")}
                  >
                    Line Chart
                  </button>
                  <button
                    className={`btn btn-sm ${
                      chartType === "BarChart" ? "btn-primary" : "btn-outline"
                    }`}
                    onClick={() => setChartType("BarChart")}
                  >
                    Bar Chart
                  </button>
                  <button
                    className={`btn btn-sm ${
                      chartType === "ComposedChart"
                        ? "btn-primary"
                        : "btn-outline"
                    }`}
                    onClick={() => setChartType("ComposedChart")}
                  >
                    Composed Chart
                  </button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                {chartType === "AreaChart" && (
                  <AreaChart
                    data={transformData(selectedProductData.values)}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="price"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                  </AreaChart>
                )}
                {chartType === "LineChart" && (
                  <LineChart
                    data={transformData(selectedProductData.values)}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                  </LineChart>
                )}
                {chartType === "BarChart" && (
                  <BarChart
                    data={transformData(selectedProductData.values)}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="price" fill="#8884d8" />
                  </BarChart>
                )}
                {chartType === "ComposedChart" && (
                  <ComposedChart
                    data={transformData(selectedProductData.values)}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    {/* Гистограмма объема */}
                    <Bar dataKey="volume" barSize={20} fill="#413ea0" />
                    {/* Линия цены */}
                    <Line type="monotone" dataKey="price" stroke="#ff7300" />
                  </ComposedChart>
                )}
              </ResponsiveContainer>
            </>
          )}
        </div>
        <div className="flex flex-col gap-2 bg-base-300 justify-between h-full overflow-y-auto w-2/12 p-5 rounded-lg border border-primary">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold">Название: {selectedProduct}</p>
            <p className="text-xs font-bold">
              Последняя сумма:{" "}
              <span className="text-secondary animate-pulse">
                ${mostRecentPrice.toFixed(2)}
              </span>
            </p>
            <p className="text-xs font-bold text-accent">Комиссия: 5%</p>
          </div>
          <div className="flex flex-col gap-2">
            <button className="btn btn-primary btn-accent">Покупать</button>
            <button className="btn btn-outline btn-error">Продать</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
