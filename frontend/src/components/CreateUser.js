import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  state = {
    users: [],
    username: "",
  };

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  //ayuda a ejecutar el codigo una ves que el componente haya sido montado
  //lo que va  a ser es pedir los datos del servidor para mostrarlos en pantalla
  //para hacer una peticion se usa el fetch get/put/push/delete
  //en este caso instalamos axios = fetch
  async componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const res = await axios.get("http://localhost:4000/api/users");
    this.setState({ users: res.data });
  };
  //este evento resetea el formulario, piden datos
  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/api/users", {
      username: this.state.username,
    });
    this.setState({ username: "" });
    //actualiza la tabla this.getUsers()
    this.getUsers();
  };

  deleteUser = async (id) => {
    await axios.delete("http://localhost:4000/api/notes/" + id);
    this.getUsers();
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
          <div className="col-ms-8">
            <ul className="list-group">
              {this.state.users.map((user) => (
                <li
                  className="list-group-item list-group-item-action"
                  key={user._id}
                  onDoubleClick={() => this.deleteUser(user._id)}
                >
                  {user.username}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
