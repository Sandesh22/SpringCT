import React from "react";

function assignUserCompany({ userList ,CompanyList }) {
  console.log(userList.length);

  var Users = (
    <React.Fragment>
      <tr>
        <td colSpan="2" data-testid="no-result">
          No Results Found
        </td>
      </tr>
    </React.Fragment>
  );

  if (UserList.length > 0) {
    Users = UserList.map((User) => (
      <React.Fragment>
        <tr key={User.alpha3Code} id={User.alpha3Code}>
          <td className="slide-up-fade-in py-10"> {User.name}</td>
          <td className="slide-up-fade-in py-10"> {User.email}</td>
          <td className="slide-up-fade-in py-10"> {User.phone}</td>
          <td className="slide-up-fade-in py-10"> {User.company}</td>
        </tr>
      </React.Fragment>
    ));
  }

  return Users;
}

export default assignUserCompany;
