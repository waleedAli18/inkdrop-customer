// cookieUtils.ts
import Cookies from "js-cookie";

export function getCookies(key: string) {
  const formValuesJson = Cookies.get(key);

  if (formValuesJson) {
    try {
      const formValues = JSON.parse(formValuesJson);
      return formValues;
    } catch (error) {
      console.error("Error parsing formValues JSON:", error);
    }
  }

  return null;
}

export function setCookies(key: string, object: Object) {
  Cookies.set(key, JSON.stringify(object));
}
