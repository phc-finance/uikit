import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 22 18" {...props}>
      <path d="M21 1.00904C20 1.49904 19.02 1.69804 18 1.99904C16.879 0.734037 15.217 0.664037 13.62 1.26204C12.023 1.86004 10.977 3.32204 11 4.99904V5.99904C7.755 6.08204 4.865 4.60404 3 1.99904C3 1.99904 -1.182 9.43204 7 12.999C5.128 14.246 3.261 15.087 1 14.999C4.308 16.802 7.913 17.422 11.034 16.516C14.614 15.476 17.556 12.793 18.685 8.77404C19.0218 7.55171 19.189 6.2889 19.182 5.02104C19.18 4.77204 20.692 2.24904 21 1.00804V1.00904Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="transparent"/>
    </Svg>    
  );
};

export default Icon;
