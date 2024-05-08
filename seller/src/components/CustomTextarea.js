import React from "react";

const CustomTextarea = (props) => {
    const { label, i_id, i_class, name, val, onChng, onBlr } = props;
    return (
        <div className="form-floating mt-3">
            <textarea
                style={{ height: "100px" }}
                className={`form-control ${i_class}`}
                id={i_id}
                placeholder={label}
                name={name}
                value={val}
                onChange={onChng}
                onBlur={onBlr}
            />
            <label htmlFor={label}>{label}</label>
        </div>
    );
};

export default CustomTextarea;
