import React from 'react';

const Login = props => {
      return (
            <>
                  <form>                                               
                        <input placeholder="username" name="usrnm" type="text" required />                                              
                        <input placeholder="password" name="pswrd" type="text" required />
                        <button><a href="#">Login</a></button>
                  </form>
            </>
      )
}

export default Login;