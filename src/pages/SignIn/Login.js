import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import api from "../../services/api";
import { login } from "../../services/auth";

import { Form, Container } from "./styles";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Type e-mail and password to continue!" });
    } else {
      try {
        const response = await api.post("/sessions", { email, password });
        login(response.data.token);
        this.props.history.push("/dash");
      } catch (err) {
        this.setState({
          error:
            "We had a problem with the login, check your credentials."
        });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <h1><strong>Log In</strong></h1>
          <strong>Log in to change cultural narratives.</strong>
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
            placeholder="Your password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Log in</button>
          <hr />
          <Link to="/signup" type="button">Sign up</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignIn);