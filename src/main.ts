import $ from "jquery";
import whatInput from "what-input";

import { Foundation } from "foundation-sites/js/foundation.core";

const siteElement = "site_captcha_key";
const captchaKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

import createCaptcha from "./ts/captcha";

$(document).ready((() => {
  
  $(".contact-us-form input, .contact-us-form textarea").blur(
    () => validateField(event),
  );

  $(".contact-us-form").submit(
    (event) => {
    let formData = $(".contact-us-form").serializeArray();
    event.preventDefault();
  },
);

  createCaptcha(siteElement, captchaKey, validCaptcha);

}
),
);

const submitButton = $(".submit-button");

let isValidCaptcha = false;

const validCaptcha = () => {
  isValidCaptcha = true;
  submitButton.removeAttr("disabled");
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

const validateField = (event) => {
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
  // if (formResult && isValidCaptcha) {
  //   submitButton.removeAttr("disabled");
  // }
};

const verifyCallBack = (response) => {
  console.log(response);
}


