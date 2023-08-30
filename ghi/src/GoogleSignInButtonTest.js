import React from 'react';
import { GoogleLogin } from 'react-google-login';

function GoogleSignInButton() {
  const responseGoogle = (response) => {
    // Handle Google login response
  };

  return (
    <div className="mt-4">
      <GoogleLogin
        clientId="your-google-client-id"
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default GoogleSignInButton;
