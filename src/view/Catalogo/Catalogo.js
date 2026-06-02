import React, {useMemo,useContext,} from "react";
import "./Catalogo.css";
import { PerfumContext } from "../../Context/PerfumContext";

export default function Catalogo({ tipo = "todos" }) {
  const {
    perfumes,
    getPerfumes,
    page,
    totalPages,
  } = useContext(PerfumContext);

  const cambiarPagina = async (nuevaPagina) => {
    if (
      nuevaPagina < 1 ||
      nuevaPagina > totalPages
    )
      return;

    await getPerfumes(nuevaPagina);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const productosFiltrados = useMemo(() => {
    if (!Array.isArray(perfumes)) return [];

    if (tipo === "perfume") {
      return perfumes.filter(
        (p) =>
          !p.nombre
            ?.toLowerCase()
            .includes("crema")
      );
    }

    if (tipo === "crema") {
      return perfumes.filter((p) =>
        p.nombre
          ?.toLowerCase()
          .includes("crema")
      );
    }

    return perfumes;
  }, [perfumes, tipo]);

  const titulo =
    tipo === "perfume"
      ? "Perfumes"
      : tipo === "crema"
      ? "Cremas"
      : "Perfumes y Cremas";

  return (
    <div className="catalogo-container">

      <header className="catalog-header">

        <h1>{titulo}</h1>

        <p className="catalog-count">
          {productosFiltrados.length} productos
        </p>

      </header>

      <section className="perfumes-grid">

        {productosFiltrados.map((p) => (
          <article
            className="perfume-card"
            key={p.id}
          >
            <div className="img-container">
              <img
                src={p.imagen}
                alt={p.nombre}
                loading="lazy"
              />
            </div>

            <div className="perfume-info">
              <h3>{p.nombre}</h3>
            </div>
          </article>
        ))}

      </section>

      <div className="pagination">

        <button
          onClick={() =>
            cambiarPagina(page - 1)
          }
          disabled={page <= 1}
        >
          ←
        </button>

        <span>
          Página {page} de {totalPages}
        </span>

        <button
          onClick={() =>
            cambiarPagina(page + 1)
          }
          disabled={page >= totalPages}
        >
          →

        </button>

      </div>

    </div>
  );
}