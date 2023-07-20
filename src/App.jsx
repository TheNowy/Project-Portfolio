import React, { useEffect, useState } from "react";
import { Wrapper } from "./components/wrapper/Wrapper";
import BarLoader from "react-spinners/MoonLoader";
import "./App.scss";

export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <BarLoader color="#ea00ff" loading={loading} size={100} />
        </div>
      ) : (
        <Wrapper />
      )}
    </>
  );
};
