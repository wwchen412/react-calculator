import React from 'react';
import styled from "styled-components";
import {colors,device} from "./variableStyle";

const Button =  (props)=>{
  return (
      <div className={props.className}>
        <button onClick={props.onClick}>{props.buttonText}</button>
      </div>
  )
}
const StyleButton = styled(Button)`
  max-width:calc((100% - 40px )/ 4);
  height:0;
  padding-bottom:calc((100% - 40px )/ 4);
  margin:5px 5px;
  width:100%;
  position: relative;
  button{
    padding: 10px;
    border: none;
    background: none;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    line-height: 100%;
    background:${colors.bgGreyLight};
    border-radius:100px;
    font-size:1.8rem;
    transition:.3s ease-out ;
    @media ${device.mobileL}{
      font-size:2.2rem;
    }
    &:hover,&:active{
      filter: brightness(120%);

    }
  }
  &.button--lg{
      max-width:calc((100% - 25px) / 2);
      button{
        text-align:left;
        padding-left:20%;
      }
    }
  &.button--dark{
    button{
      background:${colors.bgGreyDark};
      color:${colors.white};
    }
  }
  &.button--primary{
    button{
      background:${colors.bgPrimary};
      color:${colors.white};
    }
  }
`;
export default StyleButton;