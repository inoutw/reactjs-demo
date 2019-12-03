import axios, { AxiosRequestConfig, AxiosPromise } from "axios";
import env from "constants/env.json";
import { WithLogin } from "modules/user/LoginContext";

const httpInit = axios.create({
  timeout: 10000,
  headers: { tenantId: "nutrition-plan", devType: "5" }
});
export type HttpConfig = AxiosRequestConfig;
httpInit.interceptors.request.use(config => {
  let url = config.url.replace(/(\{[^}]*\})/g, pathvar => {
    if (pathvar === "{version}") return env.apiVersion;
    pathvar = pathvar.replace("{", "").replace("}", "");
    let { params } = config;
    return params[pathvar];
  });
  config.url = env.httpBaseUrl + url;

  let loginVo = WithLogin.getShareState();
  if (loginVo && loginVo.user && loginVo.authInfo) {
    config.headers.common.userId = loginVo.user.userId;
    config.headers.common.token = loginVo.authInfo.token;
  }
  return config;
});

httpInit.interceptors.response.use(response => {
  return response;
});

export function httpPost<T>(
  url: string,
  data?: any,
  config?: HttpConfig
): AxiosPromise<T> {
  return httpInit.post(url, data, config);
}
export function httpGet<T>(url: string, config?: HttpConfig): AxiosPromise<T> {
  return httpInit.get(url, config);
}
export function httpDelete<T>(url: string, data?: any): AxiosPromise<T> {
  return httpInit.delete(url, { data });
}
export function httpPut<T>(
  url: string,
  data?: any,
  config?: HttpConfig
): AxiosPromise<T> {
  return httpInit.put(url, data, config);
}
export default httpInit;
