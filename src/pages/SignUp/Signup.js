import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Form, Container } from "./styles";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = e => {
    e.preventDefault();
    alert("Eu vou te registrar");
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <h1><strong>Sign up</strong></h1>
          <strong>Sign up to change cultural narratives.</strong>
          {this.state.error && <p>{this.state.error}</p>}
          <label>Email*</label>
          <input
            type="email"
            placeholder="Your e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <label>Password*</label>
          <input
            type="password"
            placeholder="Type a password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Sign up</button>
          <br />
          <Link to="/login" type="button">Login</Link>
        </Form>
      </Container>
    );
  }
}

export default SignUp;

// // De
// import { Link } from "react-router-dom";
// // Para
// import { Link, withRouter } from "react-router-dom";

// // ...
// import api from "../../services/api";

// // ...
// handleSignUp = async e => {
//   e.preventDefault();
//   const { username, email, password } = this.state;
//   if (!username || !email || !password) {
//     this.setState({ error: "Preencha todos os dados para se cadastrar" });
//   } else {
//     try {
//       await api.post("/users", { username, email, password });
//       this.props.history.push("/");
//     } catch (err) {
//       console.log(err);
//       this.setState({ error: "Ocorreu um erro ao registrar sua conta. T.T" });
//     }
//   }
// };
// ///...

// export default withRouter(SignUp);