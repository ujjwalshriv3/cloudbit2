import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/users/login", form);
      alert("Login Successful");
      // You can add navigation logic here
    } catch (error) {
      alert("Login Failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })} 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}