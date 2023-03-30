import Button from "../forms/Button";
import { signInWithGoogle } from  '../../firebase/utils';

import './styles.scss'

const SingIn = props => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signin">
      <div className="wrap">
        <h2>
          LogIn
        </h2>

        <div>
          <form onSubmit={handleSubmit}>
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

export default SingIn;
