import React from "react";

const selectFieldGroup = ({
  name,
  placeholder,
  option,
  onChange,
  value,
  test
}) => {
  console.log(test);
  return (
    <div className="form-group">
      <select
        onChange={onChange}
        value={value}
        name={name}
        className="form-control form-control-lg"
      >
        <option>{placeholder}</option>
        {option.map(data => {
          // console.log(data);
          return (
            <option key={data._id} value={data._id}>
              {data.test}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default selectFieldGroup;
