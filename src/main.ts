import $ from "jquery";
import whatInput from "what-input";

import { Foundation } from "foundation-sites/js/foundation.core";

$(document).ready((() => {

  const submitButton = $(".submit-button");
  
  $(".contact-us-form input, .contact-us-form textarea").blur(
    () => validateField(event, submitButton),
  );

  $(".contact-us-form").submit(
    (event) => {
    let formData = $(".contact-us-form").serializeArray();
    event.preventDefault();
  },
);

}
),
);

const onloadCallback = () => {
  //   grecaptcha.render(
  //     "site_captcha_key", {
  //     callback : verifyCallBack,
  //     sitekey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
  //   }
  // );
  };


const fields = [
  {
    isValid: false,
    name: "name",
  },
  {
    isValid: false,
    name: "message",
  },
  {
    isValid: false,
    name: "email",
  },
];

const reducer = (isValid, currentField) => {
    if (!currentField.isValid) {
      isValid = currentField.isValid;
    }
    return isValid;
  };

const validateField = (event, submitButton) => {
  const targetClass = event.target.name;

  // console.log(fields);

  const field = fields.filter(
    (item) => item.name === targetClass,
  )[0];

  if ( event.target.value.length > 0 ) {
    $(".contact-us-form ." + targetClass + " p.help-text")
    .addClass("no-error");
    field.isValid = true;
  } else {
    $(".contact-us-form ." + targetClass + " p.help-text")
    .removeClass("no-error");
    field.isValid = false;
  }

  // console.log(fields);

  let formResult = true;
  formResult = fields.reduce(reducer, true);
  if (formResult) {
    submitButton.removeAttr("disabled");
  }
};

const verifyCallBack = (response) => {
  console.log(response);
}


