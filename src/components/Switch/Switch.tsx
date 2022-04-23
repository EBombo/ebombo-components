import React, { useRef } from "react";
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
          <div className="toggle-wrapper">
            <input
              className="toggle-switch"
              type="checkbox"
              id="toogle-switch"
              checked={props.checked}
              onChange={props.onChange}
            />
            <label htmlFor="toogle-switch" className="label" />
          </div>
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
