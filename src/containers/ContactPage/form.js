import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import PropTypes from "prop-types";
import ReduxFormField from "../../components/FormElements";
import { StyledFormWrapper } from "./styles";

const ContactForm = props => {
  const { handleSubmit, nameOfFields } = props;
  return (
    <StyledFormWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="emailAddress" label={nameOfFields.get("emailField")} component={ReduxFormField} type="email" />
        </div>
        <div>
          <Field
            name="confirmEmail"
            label={nameOfFields.get("confirmEmailField")}
            component={ReduxFormField}
            type="email"
          />
        </div>
        <div>
          <Field name="subject" label={nameOfFields.get("subject")} component={ReduxFormField} type="text" />
        </div>
        <div>
          <Field name="message" label={nameOfFields.get("message")} component={ReduxFormField} type="textarea" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </StyledFormWrapper>
  );
};

// create new, "configured" function
export default reduxForm({
  // a unique name for the form
  form: "contactForm",
})(ContactForm);

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  nameOfFields: PropTypes.object,
};
