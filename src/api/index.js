const signin = (params) => axios.post(`${url}${authPath}signin`, params);

export default {
  signin,
};
