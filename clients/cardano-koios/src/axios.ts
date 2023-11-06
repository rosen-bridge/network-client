import Axios, { AxiosRequestConfig } from 'axios';
import JsonBigintFactory from 'json-bigint';

const JsonBigInt = JsonBigintFactory({
  alwaysParseAsBig: false,
  useNativeBigInt: true,
});

const transformBigInt = (obj: any, bigIntObj: any, field: string): any => {
  if (Array.isArray(obj)) {
    return (obj as unknown as Array<JSON>).map((row, index) => {
      return transformBigInt(
        row,
        (bigIntObj as unknown as Array<JSON>)[index],
        field
      );
    }) as unknown as JSON;
  }
  if (!Object.hasOwn(obj, field.split('.')[0])) {
    return {
      ...obj,
    };
  }
  if (field.indexOf('.') !== -1) {
    const subKeys = field.split('.');
    return {
      ...obj,
      [subKeys[0]]: transformBigInt(
        obj[subKeys[0]],
        bigIntObj[subKeys[0]],
        subKeys.slice(1).join('.')
      ),
    };
  }
  return { ...obj, [field]: BigInt(bigIntObj[field]) };
};
export const JsonFieldBigintFactory = (fields: Array<string>) => {
  return (data: any) => {
    let dataJson = JSON.parse(data);
    const dataBigInt = JsonBigInt.parse(data);
    fields.forEach((field) => {
      dataJson = transformBigInt(dataJson, dataBigInt, field);
    });
    return dataJson;
  };
};

export const axiosInstance = Axios.create();

export const createAxiosInstance = (url: string, authToken?: string) => {
  const instance = Axios.create();
  instance.defaults.baseURL = url;
  if (authToken) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
  }
  return <T>(config: AxiosRequestConfig): Promise<T> => {
    return instance.request<T>(config).then((response) => response.data);
  };
};
