// (window as any).captchaCallback = () => Promise.resolve("success").then(
//   () => createCaptcha()
// );

// const getCaptcha  = new Promise( 
//   (resolve) => (window as any).captchaCallback());

/**
 * 
 * @param siteElement
 * @param key 
 * @param validCaptcha 
 */
const createCaptcha = (siteElement, key, validCaptcha) => (window as any).grecaptcha.render(
  siteElement, {
        callback: validCaptcha,
        sitekey: key,
    });

export default createCaptcha;
