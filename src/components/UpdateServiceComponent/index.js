import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import PropTypes from "prop-types";
import { ReduxFormInputWithIcon } from "../../../components/FormElements/index";
import { } from "./styles";
import ImagePickerWrapper from "../../../components/ImagePicker/ImagePickerWrapper";

const CreateNewService = (props) => {
  const { handleSubmit, images, selectImage, form } = props;
  const passwordIcon = <i className="fa fa-unlock" aria-hidden="true" />;
  const userIcon = <i className="fa fa-user fa-2x" aria-hidden="true" />;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <ImagePickerWrapper job="update" formName={form} />
      </div>
      <div>
        <Field
          name="serviceImage"
          label="asdas"
          component={ReduxFormInputWithIcon}
          type="text"
          icon={userIcon}
          placeholder=""
        />
      </div>
      <div>
        <Field
          name="service"
          label="Nazov sluzby:"
          component={ReduxFormInputWithIcon}
          type="text"
          icon={userIcon}
          placeholder=""
        />
      </div>
      <div>
        <Field
          name="description"
          label="Popis sluzby:"
          component={ReduxFormInputWithIcon}
          type="text"
          icon={passwordIcon}
          placeholder=""
        />
      </div>
      <div>
        <Field
          name="price"
          label="Cena:"
          component={ReduxFormInputWithIcon}
          type="text"
          icon={passwordIcon}
          placeholder=""
        />
      </div>
      <div>
        <button type="submit">Odoslat</button>
      </div>
    </form>
  );
};


// create new, "configured" function
export default reduxForm({})(CreateNewService);
