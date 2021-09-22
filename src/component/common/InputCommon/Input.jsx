import React from "react";
import { Label, FormGroup } from "reactstrap";
import { Field, ErrorMessage } from "formik";

function Input({
  fieldType,
  inputLabel,
  name,
  type,
  placeholder,
  height,
  disabled,
  errors,
  touched,
}) {
  return (
    <FormGroup>
      <Label for={name} className="mb-1 pe-2">
        {inputLabel}
      </Label>
      <Field
        disabled={disabled}
        as={fieldType}
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        className={`form-control rounded-7 my-2 ${height} ${
          errors.required && touched.required && "is-invalid"
        }`}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="field-error my-1 font-small text-danger"
      />
    </FormGroup>
  );
}

export default Input;
