import { Component } from "react";
import { auth, signInWithGoogle } from  '../../firebase/utils';

import Button from "../forms/Button";
import FormInput from "../forms/FormInput";

import './styles.scss'

const initialState = {
  email: '',
  password: ''
}

class SingIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const {name, value} = e.target;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password)

      this.setState({
        ...initialState
      })
    } catch(e) {
      // console.log(e)
    }
  };

  render() {
    const { email, password } = this.state;
    return (
        <div className="signin">
          <div className="wrap">
            <h2>
              LogIn
            </h2>

            <div>
              <form onSubmit={this.handleSubmit}>

                <FormInput
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={this.handleChange}
                />
                <FormInput
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <Button type="submit">
                  Login
                </Button>
                <div className="socialSingin">
                  <div className="row">
                    <Button onClick={signInWithGoogle}>
                      Sign in with Google
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    )
  }
}

export default SingIn;
