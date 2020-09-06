import axios from "axios";
import { API_URL } from "../URLConst";
function getUseData(perpage, start) {
  var promise = new Promise(function (resolve, reject) {
    axios
      .post(API_URL.getUserData, {
        params: {
          // size: perpage,
          // start: start,
        },
      })
      .then((response) => {
        //console.log(response.data);

        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
  return promise;
}
export default getUseData;
