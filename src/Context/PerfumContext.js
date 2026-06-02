import React, { createContext, useEffect, useState } from "react";

export const PerfumContext = createContext();

const API_URL = "https://perfumes-backend-5hp9.onrender.com/api";

export const PrefumProvider = ({ children }) => {
  const [perfumes, setPerfumes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPerfumes = async (pageNumber = 1) => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `${API_URL}/productos?page=${pageNumber}&limit=24`
      );

      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }

      const data = await res.json();

      setPerfumes(data.data || []);
      setPage(data.page || 1);
      setTotalPages(data.totalPages || 1);

    } catch (err) {
      console.error("Error cargando perfumes:", err);
      setError(err.message || "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPerfumes(1);
  }, []);

  return (
    <PerfumContext.Provider
      value={{
        perfumes,
        getPerfumes,
        page,
        totalPages,
        loading,
        error
      }}
    >
      {children}
    </PerfumContext.Provider>
  );
};