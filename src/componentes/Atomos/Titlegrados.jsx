import styled from "styled-components"
const Grados = styled.h1`
color: #ffff;
font-size:4.5rem;
text-align:center;
font-family: 'Goblin One';
transform-style: preserve-3d;
animation: moveUpDown 4s ease-in-out infinite alternate;
@keyframes moveUpDown {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); } 
}
`;
export default Grados;