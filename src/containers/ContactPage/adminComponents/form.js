import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import PropTypes from "prop-types";
import { FormInput, FormSelect } from "../../../components/FormElements/index";
import {
  StyledFormWrapper,
  StyledSubmitButton,
  StyledSelect,
  StyledField,
  StyledFieldRow,
  StyledForm
} from "../styles";
import Button from "../../../components/Button";

const AdminContactForm = props => {
  const { handleSubmit, readOnly, changeSubmitButtonText } = props;
  const optionsForDays = [
    { value: "", label: "" },
    { value: "PO", label: "PO" },
    { value: "UT", label: "UT" },
    { value: "STR", label: "STR" },
    { value: "STV", label: "STV" },
    { value: "PIA", label: "PIA" },
    { value: "SO", label: "SO" },
    { value: "NE", label: "NE" }
  ];
  const optionsForOpenTime = [
    { value: "", label: "" },
    { value: "6:00", label: "6:00" },
    { value: "6:30", label: "6:30" },
    { value: "7:00", label: "7:00" },
    { value: "7:30", label: "7:30" },
    { value: "8:00", label: "8:00" },
    { value: "8:30", label: "8:30" },
    { value: "9:00", label: "9:00" }
  ];
  const optionsForCloseTime = [
    { value: "", label: "" },
    { value: "15:00", label: "15:00" },
    { value: "15:30", label: "15:30" },
    { value: "16:00", label: "16:00" },
    { value: "16:30", label: "16:30" },
    { value: "17:00", label: "17:00" },
    { value: "17:30", label: "17:30" },
    { value: "18:00", label: "18:00" }
  ];

  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFieldRow>
          <StyledField>
            <Field
              name="serviceName"
              label="Nazov servisu"
              component={FormInput}
              type="text"
              placeholder="Bavaria S.R.O"
              readOnly={readOnly}
              border
            />
          </StyledField>

          <StyledField>
            <Field
              name="address"
              label="Adresa"
              component={FormInput}
              type="text"
              placeholder="Kosice, Priemyselna 4"
              readOnly={readOnly}
              border
            />
          </StyledField>

          <StyledField>
            <Field
              name="emailAddress"
              label="Emailova adresa"
              component={FormInput}
              type="email"
              placeholder="bavaria@bavaria.sk"
              readOnly={readOnly}
              border
            />
          </StyledField>
        </StyledFieldRow>

        <StyledFieldRow>
          <StyledField>
            <Field
              name="number1"
              label="Mobil 1"
              component={FormInput}
              type="text"
              placeholder="0908 000 000"
              readOnly={readOnly}
              border
            />
          </StyledField>

          <StyledField>
            <Field
              name="number2"
              label="Mobil 2"
              component={FormInput}
              type="text"
              placeholder="0908 111 222"
              readOnly={readOnly}
              border
            />
          </StyledField>
        </StyledFieldRow>

        <StyledFieldRow>
          <StyledField>
            <Field
              name="openDay"
              label="Otvaraci den"
              component={FormSelect}
              options={optionsForDays}
              readOnly={readOnly}
            />
          </StyledField>
          <StyledField>
            <Field
              name="closeDay"
              label="Zatvaraci den"
              component={FormSelect}
              options={optionsForDays}
              readOnly={readOnly}
            />
          </StyledField>

          <StyledField>
            <Field
              name="openTime"
              label="Otvaraci cas"
              component={FormSelect}
              options={optionsForOpenTime}
              readOnly={readOnly}
            />
          </StyledField>

          <StyledField>
            <Field
              name="closeTime"
              label="Zatvaraci cas"
              component={FormSelect}
              options={optionsForCloseTime}
              readOnly={readOnly}
            />
          </StyledField>
        </StyledFieldRow>

        <div>{!readOnly ? <Button blue type="submit">{changeSubmitButtonText ? "Zmenit" : "Odoslat"}</Button> : null}</div>
      </StyledForm>
    </StyledFormWrapper>
  );
};

// create new, "configured" function
export default reduxForm({
  // a unique name for the form
  form: "adminContactForm",
  destroyOnUnmount: false
})(AdminContactForm);

AdminContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  readOnly: PropTypes.bool
};
AdminContactForm.defaultProps = {
  readOnly: false
};
