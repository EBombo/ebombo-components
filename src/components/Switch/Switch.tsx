import React, { useRef } from "react";
import styled from "styled-components";
import "./Switch.scss";

export interface SwitchProps {
  label1: string;
  label2: string;
  size: string;
  variant: string;
  checked: boolean;
  onChange: (event: Event) => void;
}

const Switch = (props: SwitchProps) => {
  const inputRef = useRef(null);

  const selectedInput = () => {
    switch (props.variant) {
      case "switcher":
        return (
          <div className="switch" onClick={() => inputRef?.current?.click()}>
            <input
              ref={inputRef}
              id="language-toggle"
              className="check-toggle check-toggle-round-flat"
              type="checkbox"
              checked={props.checked}
              onChange={props.onChange}
            />
            <label htmlFor="language-toggle" />
            <span className="on">{props.label1}</span>
            <span className="off">{props.label2}</span>
          </div>
        );
      case "toggle":
        return (
          <ToggleSwitch className="toggle-wrapper" {...props}>
            <input
              className="toggle-switch"
              type="checkbox"
              id="toogle-switch"
              checked={props.checked}
              onChange={props.onChange}
            />
            <label htmlFor="toogle-switch" className="label" />
          </ToggleSwitch>
        );
      default:
        return (
          <div className="switch" onClick={() => inputRef?.current?.click()}>
            <input
              ref={inputRef}
              id="language-toggle"
              className="check-toggle check-toggle-round-flat"
              type="checkbox"
              checked={props.checked}
              onChange={props.onChange}
            />
            <label htmlFor="language-toggle" />
            <span className="on">{props.label1}</span>
            <span className="off">{props.label2}</span>
          </div>
        );
    }
  };

  return selectedInput();
};

export default Switch;

const ToggleSwitch = styled.div`
  .toggle-switch {
    position: absolute;
    margin-left: -9999px;
    visibility: hidden;
  }

  .label {
    cursor: pointer;
    text-indent: -9999px;
    width: ${(props) =>
      props.size === "small"
        ? "28px"
        : props.size === "medium"
        ? "35px"
        : "45px"};
    height: ${(props) =>
      props.size === "small"
        ? "16px"
        : props.size === "medium"
        ? "20px"
        : "25px"};
    background: #c4c4c4;
    display: block;
    border-radius: 100px;
    position: relative;
  }

  .label:after {
    content: "";
    position: absolute;
    top: ${(props) =>
      props.size === "small"
        ? "3px"
        : props.size === "medium"
        ? "4px"
        : "5px"};
    left: 5px;
    width: ${(props) =>
      props.size === "small"
        ? "10px"
        : props.size === "medium"
        ? "13px"
        : "15px"};
    height: ${(props) =>
      props.size === "small"
        ? "10px"
        : props.size === "medium"
        ? "12px"
        : "15px"};
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }

  .toggle-switch:checked + .label {
    background: #32c78d;
  }

  .toggle-switch:checked + .label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  .label:active:after {
    width: ${(props) =>
      props.size === "small"
        ? "15px"
        : props.size === "medium"
        ? "20px"
        : "30px"};
  }
`;
