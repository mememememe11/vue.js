import axios from "axios";

export default {
  methods: {
    async $api(url, data) {
      let result = await axios({
        method: "post",
        url: url,
        data: data,
      });
      return result.data;
    },
  },
  $base64(file) {
    return new Promise((resolve) => {
      let fn = new FileReader();
      fn.onlad = (e) => {
        resolve(e.target.result);
      };
      fn.readAsDataURL(file);
    });
  },
};
