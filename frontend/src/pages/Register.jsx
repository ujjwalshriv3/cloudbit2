import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5001/api/users/register", form);
    alert("User Registered");
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })} 
        />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
