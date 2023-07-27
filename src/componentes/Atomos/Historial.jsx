import React from "react";

const Historial =({Climas})=>{
return(
<>
<div>
<h2> Historial</h2>
<ul>
{Climas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
</ul>
</div>
</>
)
}
export default Historial;