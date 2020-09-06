import React from "react";

function User({ userList }) {
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

  if (userList.length > 0) {
    Users = userList.map((User) => (
      <React.Fragment>
        <tr key={User.alpha3Code} id={User.alpha3Code}>
        <td className="slide-up-fade-in py-10"> {User.company}</td>
          <td className="slide-up-fade-in py-10"> {User.name}</td>
          <td className="slide-up-fade-in py-10"> {User.email}</td>
          <td className="slide-up-fade-in py-10"> {User.phone}</td>
          
        </tr>
      </React.Fragment>
    ));
  }

  return Users;
}

export default User;
