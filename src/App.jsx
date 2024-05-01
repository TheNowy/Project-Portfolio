import React, { useEffect, useState } from "react";
import { Wrapper } from "./components/layout/Layout";
import BarLoader from "react-spinners/MoonLoader";
import "./App.scss";

export const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <BarLoader color="#6d2aff" loading={loading} size={100} />
        </div>
      ) : (
        <Wrapper />
      )}
    </>
  );
};
