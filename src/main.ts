import axios from "axios";
import $ from "jquery";
import createCaptcha from "./ts/captcha";

const siteElement = "site_captcha_key";
const captchaKey = "6Lf9T0UUAAAAANR7b7br5GPEanbxvdXPmCqDr6xN";
const postUrl = "https://gateway.johan-martin.com/addform";
const formDestination = "martin.johan@johan-martin.com";
const apiKey = "xeSQf3MI96bwatnZ2Vdy52pu6nBpUaW7GEtY69ni";

$(document).ready((() => {
  const inputs = $(".contact-us-form input, .contact-us-form textarea");

  inputs.blur(
    () => validateField(event),
  );

  $(".contact-us-form").submit(
    () => submitForm(event),
);

}
),
);

(window as any).captchaCallback = () => Promise.resolve("success").then(
  () => createCaptcha(siteElement, captchaKey, validCaptcha),
);


// validate fiels

const submitButton = $(".submit-button");

let captchaResponse: string = null;
let formResult = true;

const validCaptcha = (response) => {
  captchaResponse = response;
  validateButton();
  // submitButton.removeAttr("disabled");
};

const validateButton = () => {
  if (formResult && captchaResponse) {
    submitButton.removeAttr("disabled");
  } else {
    submitButton.attr("disabled");
  }
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

  // let formResult = true;
  formResult = fields.reduce(reducer, true);
  validateButton();
};

const submitForm = (event) => {
  const formSubmit = {};
  const formData = $(".contact-us-form").serializeArray();
  event.preventDefault();

  formData.forEach(
    (element) => formSubmit[element["name"]] = element["value"]
  );

  formSubmit["destination"] = formDestination;
  formSubmit["captcha"] = captchaResponse;

  const config = {
    data: formSubmit,
    headers: {"x-api-key": apiKey},
    method: "post",
    url: postUrl,
  };
  axios(config).then(
    (response) => {
      console.log(response);
      showMessage();
    }
  ).catch(
    (err) => console.error(err)
   );
}

const showMessage = () => {
  const section = $("div.contact-us-form-section");
  const form = $("form.contact-us-form");
  form.hide();
  section.append("<h1>Thank You</h1>");
};




// const verifyCallBack = (response) => {
//   console.log(response);
// }

// customElements.define("expandable-box", ExpandableBox);
