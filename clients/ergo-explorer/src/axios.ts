import { createAxiosInstanceWithHeaders } from '@rosen-clients/axios';

export { JsonFieldBigintFactory } from '@rosen-clients/axios';

export const createAxiosInstance = (url: string) => {
  return createAxiosInstanceWithHeaders(url, {});
};
