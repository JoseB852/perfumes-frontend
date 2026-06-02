import React, { useState } from "react";
import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Catalogo from "../Catalogo/Catalogo";
import { PerfumContext } from "../../Context/PerfumContext";
import { useContext } from "react";

export default function Home() {
  const [tipo, setTipo] = useState("");

  const { getPerfumes } = useContext(PerfumContext);

  const volverInicio = async () => {
    setTipo("");
    await getPerfumes(1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar
        tipo={tipo}
        setTipo={setTipo}
        volverInicio={volverInicio}
      />

      <Catalogo tipo={tipo} />
    </>
  );
}