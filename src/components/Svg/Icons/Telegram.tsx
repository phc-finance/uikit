import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 18" {...props}>
      <path d="M13 7L9 11L15 17L19 1L1 8L5 10L7 16L10 12" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="transparent"/>
    </Svg>    
  );
};

export default Icon;
