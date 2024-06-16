import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface EndPoints {
  LOGIN: string;
  REFRESH_TOKEN: string;
}

const apiUtils = () => {
  const pending_get: { [key: string]: boolean } = {};
  const pending_post: { [key: string]: boolean } = {};
  const pending_put: { [key: string]: boolean } = {};
  const pending_patch: { [key: string]: boolean } = {};
  const pending_delete: { [key: string]: boolean } = {};

  const reqOption = (): AxiosRequestConfig => {
    return {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 60000,
    };
  };

  const reqOptionWithToken = (): AxiosRequestConfig => {
    const token = sessionStorage.getItem("accessToken");
    return {
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : undefined,
      },
      timeout: 60000,
    };
  };

  const reqOptionFormData = (): AxiosRequestConfig => {
    return {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      timeout: 60000,
    };
  };

  const reqOptionWithTokenFormData = (): AxiosRequestConfig => {
    const token = sessionStorage.getItem("accessToken");
    return {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token ? `Bearer ${token}` : undefined,
      },
      timeout: 60000,
    };
  };

  const statusHandler = (
    status: number,
    noRedirection: () => void,
    isRedirection: () => void
  ) => {
    if (status === 400) {
      noRedirection();
    } else {
      isRedirection();
    }
  };

  const endPoints: EndPoints = {
    LOGIN: "/api/auth/login",
    REFRESH_TOKEN: "/api/auth/refresh",
  };

  const httpGet = async (
    callUrl: string,
    caller: string,
    useToken: boolean,
    success: (response: AxiosResponse) => void,
    fail: (error: unknown) => void,
    redirection: () => void,
    finallyCallback: () => void
  ) => {
    const reqKey = callUrl + caller;
    if (pending_get[reqKey]) {
      console.log("duplication api get fail : " + reqKey);
      return;
    }

    pending_get[reqKey] = true;

    let _reqOption = reqOption();

    if (useToken) {
      _reqOption = reqOptionWithToken();
      if (!_reqOption.headers?.Authorization) {
        redirection();
      }
    }

    try {
      const response = await axios.get(callUrl, _reqOption);
      success(response);
    } catch (err) {
      fail(err);
    } finally {
      pending_get[reqKey] = false;
      finallyCallback();
    }
  };

  const httpPost = async (
    callUrl: string,
    caller: string,
    postData: Record<string, unknown>,
    useToken: boolean,
    success: (response: AxiosResponse) => void,
    fail: (error: unknown) => void,
    redirection: () => void,
    finallyCallback: () => void
  ) => {
    const reqKey = callUrl + caller;
    if (pending_post[reqKey]) {
      console.log("duplication api post fail : " + reqKey);
      return;
    }

    pending_post[reqKey] = true;

    let _reqOption = reqOption();

    if (useToken) {
      _reqOption = reqOptionWithToken();
      if (!_reqOption.headers?.Authorization) {
        redirection();
      }
    }

    try {
      const response = await axios.post(callUrl, postData, _reqOption);
      success(response);
    } catch (err) {
      fail(err);
    } finally {
      pending_post[reqKey] = false;
      finallyCallback();
    }
  };

  const httpPut = async (
    callUrl: string,
    caller: string,
    postData: Record<string, unknown>,
    useToken: boolean,
    success: (response: AxiosResponse) => void,
    fail: (error: unknown) => void,
    redirection: () => void
  ) => {
    const reqKey = callUrl + caller;
    if (pending_put[reqKey]) {
      console.log("duplication api put fail : " + reqKey);
      return;
    }

    pending_put[reqKey] = true;

    let _reqOption = reqOption();

    if (useToken) {
      _reqOption = reqOptionWithToken();
      if (!_reqOption.headers?.Authorization) {
        redirection();
      }
    }

    try {
      const response = await axios.put(callUrl, postData, _reqOption);
      success(response);
    } catch (err) {
      fail(err);
    } finally {
      pending_put[reqKey] = false;
    }
  };

  const httpPatch = async (
    callUrl: string,
    caller: string,
    postData: Record<string, unknown>,
    useToken: boolean,
    success: (response: AxiosResponse) => void,
    fail: (error: unknown) => void,
    redirection: () => void
  ) => {
    const reqKey = callUrl + caller;
    if (pending_patch[reqKey]) {
      console.log("duplication api patch fail : " + reqKey);
      return;
    }

    pending_patch[reqKey] = true;

    let _reqOption = reqOption();

    if (useToken) {
      _reqOption = reqOptionWithToken();
      if (!_reqOption.headers?.Authorization) {
        redirection();
      }
    }

    try {
      const response = await axios.patch(callUrl, postData, _reqOption);
      success(response);
    } catch (err) {
      fail(err);
    } finally {
      pending_patch[reqKey] = false;
    }
  };

  const httpDelete = async (
    callUrl: string,
    caller: string,
    postData: Record<string, unknown>,
    useToken: boolean,
    success: (response: AxiosResponse) => void,
    fail: (error: unknown) => void,
    redirection: () => void,
    finallyCallback: () => void
  ) => {
    const reqKey = callUrl + caller;
    if (pending_delete[reqKey]) {
      console.log("duplication api delete fail : " + reqKey);
      return;
    }

    pending_delete[reqKey] = true;

    let _reqOption = reqOption();

    if (useToken) {
      _reqOption = reqOptionWithToken();
      if (!_reqOption.headers?.Authorization) {
        redirection();
      }
    }

    try {
      const response = await axios.delete(callUrl, {
        ..._reqOption,
        data: postData,
      });
      success(response);
    } catch (err) {
      fail(err);
    } finally {
      pending_delete[reqKey] = false;
      finallyCallback();
    }
  };

  const httpPostFormData = async (
    callUrl: string,
    caller: string,
    postData: Record<string, unknown>,
    useToken: boolean,
    success: (response: AxiosResponse) => void,
    fail: (error: unknown) => void,
    redirection: () => void,
    finallyCallback: () => void
  ) => {
    const reqKey = callUrl + caller;
    if (pending_post[reqKey]) {
      console.log("duplication api post fail : " + reqKey);
      return;
    }

    pending_post[reqKey] = true;

    let _reqOption = reqOptionFormData();

    if (useToken) {
      _reqOption = reqOptionWithTokenFormData();
      if (!_reqOption.headers?.Authorization) {
        redirection();
      }
    }

    try {
      const response = await axios.post(callUrl, postData, _reqOption);
      success(response);
    } catch (err) {
      fail(err);
    } finally {
      pending_post[reqKey] = false;
      finallyCallback();
    }
  };

  const httpPutFormData = async (
    callUrl: string,
    caller: string,
    postData: Record<string, unknown>,
    useToken: boolean,
    success: (response: AxiosResponse) => void,
    fail: (error: unknown) => void,
    redirection: () => void,
    finallyCallback: () => void
  ) => {
    const reqKey = callUrl + caller;
    if (pending_post[reqKey]) {
      console.log("duplication api put fail : " + reqKey);
      return;
    }

    pending_post[reqKey] = true;

    let _reqOption = reqOptionFormData();

    if (useToken) {
      _reqOption = reqOptionWithTokenFormData();
      if (!_reqOption.headers?.Authorization) {
        redirection();
      }
    }

    try {
      const response = await axios.put(callUrl, postData, _reqOption);
      success(response);
    } catch (err) {
      fail(err);
    } finally {
      pending_post[reqKey] = false;
      finallyCallback();
    }
  };

  return {
    httpGet,
    httpPost,
    httpPut,
    httpPatch,
    httpDelete,
    httpPostFormData,
    httpPutFormData,
    endPoints,
    statusHandler,
  };
};

export default apiUtils;
