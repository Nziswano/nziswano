(window as any).captchaCallback; //Global callback to call

const getCaptcha  = new Promise( (resolve) => (window as any).captchaCallback = resolve);

/**
 * 
 * @param siteElement
 * @param key 
 * @param validCaptcha 
 */
const createCaptcha = (siteElement, key, validCaptcha) => {
  getCaptcha.then(
    () => {
      (window as any).grecaptcha.render(siteElement, {
        callback: validCaptcha,
        sitekey: key,
    });
  },
  ).catch(
    (err) => console.error(err),
  );
};

export default createCaptcha;
