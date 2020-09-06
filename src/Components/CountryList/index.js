import React, { Component } from "react";
// import ReactPaginate from "react-paginate";
import "./index.css";
import User from "./Users";
import getUserList from "./API/fetchUserList";
import getCompanyList from "./API/fetchCompanyList";
import getUserData from "./API/fetchUserData";
import assignUserInCompany from "./API/assignUserInCompany"
const pageSizes = [5, 10, 20, 50];
export default class UserList extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = {
      countryName: "",
      offset: 0,
      userList: [],
      users:[],
      companies:[],
      perPage: 5,
      currentPage: 0,
      loading: true,
      pageCount: 0,
      selectedUser:0,
      selectedCompany:[]
    };
  }
handleAssignClick = ()=>{
  let fn = assignUserInCompany(this.state.selectedUser, this.state.selectedCompany)
    fn.then(
      function (data) {
        loadUserData();
      }.bind(this)
    );
}

  // handlePageClick = (e) => {
  //   const selectedPage = e.selected;
  //   const offset = parseInt(selectedPage) * parseInt(this.state.perPage);

  //   this.setState(
  //     {
  //       currentPage: selectedPage,
  //       offset: offset,
  //       countryName: this.inputRef.current.value,
  //     },
  //     () => {
  //       if (this.state.countryName) {
  //         this.LoadCountryByName(this.state.countryName);
  //       } else {
  //         this.loadCountries();
  //       }
  //     }
  //   );
  // };
  // handlePageSizeOnchange = (event) => {
  //   this.setState(
  //     {
  //       perPage: event.target.value,
  //       countryName: this.inputRef.current.value,
  //     },
  //     () => {
  //       if (this.state.countryName) {
  //         this.LoadCountryByName(this.state.countryName);
  //       } else {
  //         this.loadCountries();
  //       }
  //     }
  //   );
  // };

  

  loadUserList = () => {
    let fn = getUserList()
    fn.then(
      function (data) {
        console.log("Users " +data)
        this.setState({
          users: data,
          loading: false,
          
        });
      }.bind(this)
    );

  }
  loadCompanyList = () => {
    let fn = getCompanyList()
    fn.then(
      function (data) {
        console.log("compamny " +data)
        this.setState({
          companies: data,
          loading: false,
          
        });
      }.bind(this)
    );

  }
  loadUserData = () => {
   
    let fn = getUserData();

    fn.then(
      function (data) {
       
        const sliceData = data.slice(
          this.state.offset,
          this.state.offset + Number(this.state.perPage)
        );
        this.setState({
          userList: sliceData,
          loading: false,
          pageCount: Math.ceil(data.length / this.state.perPage),
        });
      }.bind(this)
    );
  };
  

  componentDidMount() {
    this.loadUserData();
    this.loadCompanyList();
    this.loadUserList();
  
  }

  render() {
    return (
      <div className="">
        <div className="divtop">
         
        </div>

        {this.state.loading ? (
          <div className="divcontent">loading ...</div>
        ) : (
          <div className="divcontent">
            <table id="country">
              <thead>
                <th>Company</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </thead>
              <tbody>
                <User userList={this.state.userList}></User>
              </tbody>
              
            </table>
            <table>
              <tr>
                <td>select Emp</td>
                <td>
                    <div>
                          
                        <select  >
                          {this.state.users.map(user=><option  key ={user.id } value ={user.name} > {user.name}</option>)}
                        </select>
                    
                    </div>
                </td>
                <td>select company</td>
                <td>
                  <div>
                  {  
            this.state.companies.map(item => (<label key={item.id}>
              
              <input type="checkbox" value={item.id} onChange={this.handleChange}/>  {item.name}
            </label>
          ))}
                    
                  </div>
                </td>
              </tr>
              <tr>
              <td> <button onClick={this.handleAssignClick}>Assign</button></td> 
              </tr>

            </table>
          </div>
        )}

        <div className="mt-50 slide-up-fade-in" data-testid="no-result"></div>
      </div>
    );
  }
}
