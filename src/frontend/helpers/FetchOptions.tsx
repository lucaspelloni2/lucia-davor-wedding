export enum PROTOCOL_METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}
export const HTTP_OPTIONS = (method: PROTOCOL_METHOD, body?: any) => {
  if (method === PROTOCOL_METHOD.POST) {
    return {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body
    };
  }
  return {
    method,
    headers: {
      "Content-Type": "application/json"
    }
  };
};
