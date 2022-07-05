import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    // console.log(e);
    if (e.target.name == "email") {
      setCredentials((prev) => {
        return { ...prev, email: e.target.value };
      });
    }
    if (e.target.name == "password") {
      setCredentials((prev) => {
        return { ...prev, password: e.target.value };
      });
    }
  };
  const handleSubmit = () => {
    console.log("Submit");
  };
  const generateLabels = (input) => {
    return input.split("").map((el, index) => {
      return (
        <span key={uuidv4()} style={{ "transition-delay": `${index * 50}ms` }}>
          {el}
        </span>
      );
    });
  };
  return (
    <div className="flex flex-col App bg-[steelblue] h-screen w-full text-white">
      <div className="p-6 bg-[#2a4e6c]">
        <form onSubmit={handleSubmit}>
          <div className="text-[2em] font-bold text-center mb-3">Login</div>
          <div className="form-control">
            <input
              required
              className={credentials.email ? "filled" : undefined}
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
            />
            <label htmlFor="email">{generateLabels("Email")}</label>
          </div>
          <div className="form-control">
            <input
              required
              className={credentials.password ? "filled" : undefined}
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
            <label htmlFor="password">{generateLabels("Password")}</label>
          </div>
          <input
            type="submit"
            value="Login"
            className="w-full p-3 text-[#000] bg-[#add8e6] rounded-[8px] text-center"
          />
        </form>
      </div>
    </div>
  );
}

export default App;
