import CryptoJS from "crypto-js"

export const passwordEncrypted = (value: string) => {
  return CryptoJS.SHA3(value).toString()
};