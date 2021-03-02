import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./main.css";

function Checkbox({ checked, children, onChange, className, ...props }) {
  if (checked !== undefined && onChange === undefined) {
    console.error("Must be pass onChange handler");
  }

  const SPACE_CODE = 32;
  const classNames = className ? `checkbox ${className}` : "checkbox";

  const [value, setValue] = useState(checked || false);

  useEffect(() => {
    if (checked !== undefined) {
      setValue(checked);
    }
  }, [checked]);

  const handleChange = () => {
    if (onChange) {
      onChange();
    } else {
      setValue(!value);
    }
  };

  const handleKeyUp = (event) => {
    if (SPACE_CODE === event.keyCode) {
      handleChange();
    }
  };

  return (
    <label className={classNames}>
      <input
        {...props}
        type="checkbox"
        checked={value}
        onChange={handleChange}
        className="checkbox__control"
      />
      <div className="checkbox__view" tabIndex="0" onKeyUp={handleKeyUp} />
      {children && <span className="checkbox__label">{children}</span>}
    </label>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export { Checkbox };
