import styled from "styled-components"
const Gradostemp = styled.p`

font-size:2rem;
text-aling:center;
color: #ffff;
 font-weight: bold;
transform-style: preserve-3d;
animation: moveUpDown 4s ease-in-out infinite alternate;
@keyframes moveUpDown {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); } 
}
`;
export default Gradostemp;