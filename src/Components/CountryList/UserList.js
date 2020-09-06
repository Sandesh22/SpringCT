class UserList extends Component {
    state = {
      teams: [],
      selectedTeam: "",
      validationError: ""
    };
  
    componentDidMount() {
      fetch(
        "http://localhost:26854/api/premiershipteams"
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          let teamsFromApi = data.map(team => {
            return { value: team, display: team };
          });
          this.setState({
            teams: [
              {
                value: "",
                display:
                  "(Select User)"
              }
            ].concat(teamsFromApi)
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  
    render() {
      return (
        <div>
          <select
            value={this.state.selectedTeam}
            onChange={e =>
              this.setState({
                selectedTeam: e.target.value,
                validationError:
                  e.target.value === ""
                    ? "You must select user"
                    : ""
              })
            }
          >
            {this.state.teams.map(team => (
              <option
                key={team.value}
                value={team.value}
              >
                {team.display}
              </option>
            ))}
          </select>
          <div
            style={{
              color: "red",
              marginTop: "5px"
            }}
          >
            {this.state.validationError}
          </div>
        </div>
      );
    }
  }