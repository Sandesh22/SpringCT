import axios from "axios";
import { API_URL } from "../URLConst";
function assignUserInCompany(userID, companyIds) {
  var promise = new Promise(function (resolve, reject) {
    axios
      .post(API_URL.getCompanyList, {   
        params: {
            userID: userID,
            companyIDs: companyids
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
export default assignUserInCompany;
