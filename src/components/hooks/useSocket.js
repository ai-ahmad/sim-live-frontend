// useSocket.js
import { useEffect, useState } from "react";
import io from "socket.io-client";

const useSocket = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketInstance = io("http://localhost:8000"); // Убедитесь, что это правильный URL

    setSocket(socketInstance);

    socketInstance.on("connect", () => {
      console.log("Connected to server");
    });

    socketInstance.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    socketInstance.on("connect_error", (error) => {
      console.error("Connection error:", error);
    });

    return () => {
      socketInstance.disconnect();
      console.log("Socket disconnected");
    };
  }, []);

  return socket;
};

export default useSocket;
