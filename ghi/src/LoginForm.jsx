import useToken from "@galvanize-inc/jwtdown-for-react";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useToken();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    e.target.reset();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <input
            name="username"
            type="text"
            placeholder="email"
            className="w-full px-4 py-2 mb-4 rounded border focus:outline-none focus:ring focus:border-blue-300"
            onChange= {(e) => setUsername(e.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 rounded border focus:outline-none focus:ring focus:border-blue-300"
            onChange= {(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            type="submit" value="Login"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
