import React, { useState } from 'react';
import Button from "../Atomos/Boton";
import Tabla from "../Atomos/Tabla";
import "../../assets/Styles/Ladingclima.css"
const History = () => {
  const [showTable, setShowTable] = useState(false);

  const handleButtonClick = () => {
    setShowTable(true);
  };

  return (
    <>

      {!showTable ? (
        <Button onClick={handleButtonClick}>Historial</Button>
      ) : (
        <>
<div className='container-table-button'>
<Tabla />
          <Button onClick={() => setShowTable(false)}>Ocultar Historial</Button>
</div>
          
        </>
      )}
    </>
  );
};

export default History;
