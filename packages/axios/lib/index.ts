import { JsonBigIntFactory } from '@rosen-bridge/json-bigint';
import rateLimitedAxios, {
  AxiosRequestConfig,
} from '@rosen-clients/rate-limited-axios';

const JsonBigInt = JsonBigIntFactory({
  alwaysParseAsBig: false,
  useNativeBigInt: true,
  constructorAction: 'ignore',
  protoAction: 'ignore',
});

const transformBigInt = (obj: any, bigIntObj: any, field: string): any => {
  if (Array.isArray(obj)) {
    return (obj as unknown as Array<JSON>).map((row, index) => {
      return transformBigInt(
        row,
        (bigIntObj as unknown as Array<JSON>)[index],
        field,
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
        subKeys.slice(1).join('.'),
      ),
    };
  }
  return { ...obj, [field]: BigInt(bigIntObj[field]) };
};
export const JsonFieldBigintFactory = (fields: Array<string>) => {
  return (data: any) => {
    try {
      let dataJson = JSON.parse(data);
      const dataBigInt = JsonBigInt.parse(data);
      fields.forEach((field) => {
        dataJson = transformBigInt(dataJson, dataBigInt, field);
      });
      return dataJson;
    } catch (e) {
      return data;
    }
  };
};

export const createAxiosInstanceWithHeaders = (
  url: string,
  headers: { [key: string]: string },
) => {
  const instance = rateLimitedAxios.create();
  instance.defaults.baseURL = url;
  Object.entries(headers).forEach((header) => {
    instance.defaults.headers.common[header[0]] = header[1];
  });
  return <T>(config: AxiosRequestConfig): Promise<T> => {
    return instance.request<T>(config).then((response) => response.data);
  };
};
