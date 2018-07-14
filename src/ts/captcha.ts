const getCaptcha  = new Promise( (resolve) => {
  if ( typeof Window !== "undefined" ) {
    resolve((window as any).grecaptcha);
  }
});

/**
 * 
 * @param siteElement
 * @param key 
 * @param validCaptcha 
 */
const createCaptcha = (siteElement, key, validCaptcha) => {
  getCaptcha.then(
    (captcha: any) => {
      captcha.render(siteElement, {
        callback: validCaptcha,
        sitekey: key,
    });
  },
  ).catch(
    (err) => console.error(err),
  );
};

export default createCaptcha;
