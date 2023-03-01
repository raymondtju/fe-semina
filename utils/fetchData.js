import axios from "../configs";

export function getData(url, params, token) {
  return axios.get(`${url}`, {
    params,
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
  });
}

export async function postData(url, payload, token) {
  try {
    return await axios.post(`${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    return err;
  }
}

export async function putData(url, payload, token) {
  try {
    return await axios.put(`${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return error;
  }
}
