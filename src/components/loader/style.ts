import styled from "styled-components";
import { keyframes } from "styled-components";

const animloader14 = keyframes`
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 0;
  }
`;

export const LoaderStyle = styled.div`
width: 100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;

  .loader-14 {
    width: 200px;
    height: 200px;
    display: inline-block;
    position: relative;
  }
  .loader-14::after,
  .loader-14::before {
    content: "";
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid #284b63;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-animation: ${animloader14} 2s linear infinite;
    animation: ${animloader14} 2s linear infinite;
  }

  .loader-14::after {
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
    -webkit-animation: ${animloader14} 4s linear infinite;
    animation: ${animloader14} 4s linear infinite;
  }
`;
