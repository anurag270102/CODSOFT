import React from 'react';
import InputField from "../Components/InputField";

const Expirens = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Experinece</h4>

      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any experience
        </label>

        <InputField
          handleChange={handleChange}
          value="lessthanfiveyear"
          title="less than 5 year"
          name="test"
        />

        <InputField
          handleChange={handleChange}
          value="equalfiveyear"
          title="5 year"
          name="test"
        />

        <InputField
          handleChange={handleChange}
          value="morethanfiveyear"
          title="more than 5 year"
          name="test"
        />
      </div>
    </div>
  );
};

export default Expirens;