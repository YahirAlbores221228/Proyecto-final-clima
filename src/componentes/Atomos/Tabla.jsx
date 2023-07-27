import React from 'react';
import styled from 'styled-components';
import Soleado from "../../assets/Img/Soleado.png" 
import Nublado from "../../assets/Img/lluvioso.png"
import Casisoleado from "../../assets/Img/casisoleado.png";
import Nube from "../../assets/Img/nube.png";
import moment from 'moment';
import "../../assets/Styles/Ladingclima.css"
 const tableData = [
    {
      temperatura: '29°',
      descripcion: 'Soleado',
      imagen: Soleado,
    },
    {
      temperatura: '15°',
      descripcion: 'Parcialmente nublado',
      imagen: Casisoleado,
    },
  ];
const Image = styled.img`
  width: 10%;
  height: 10%;
`;

const Table = styled.table`
  width: 100%;
 background-color: rgba(201, 201, 201, 0.584);
`;

const Th = styled.th`
  background-color: #007bff;
  color: white;
`;
const Td = styled.td`
  padding: 20px;
  border-bottom: 1px solid black;
  font-size: 18px;
  color: white;
`;
const currentDate = moment().format('DD MMMM YYYY');

const Tabla = () => {
  const getImageByTemperature = (temperature) => {
    if (50>= 25) {
      return Soleado;
    } else if (16>= 15) {
      return Casisoleado;
    } else if (8>= 5) {
      return Nublado;
    } else {
      return Nube;
    }
  };
  return (
    <>
<div className='container-div-table'>
        <Table>
        <thead>
          <tr>
            <Th>Fecha</Th>
            <Th>Temperatura</Th>
            <Th>Descripción</Th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, index) => (
            <tr key={index}>
              <Td>{currentDate}</Td>
              <Td>{rowData.temperatura}</Td>
              <Td>
                <Image src={getImageByTemperature(rowData.temperatura)}   />
                {rowData.descripcion}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
</div>
    </>
  


  
  );
};

export default Tabla;
