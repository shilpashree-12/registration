import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    state: "",
    district: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!/^[A-Za-z]+$/.test(formData.firstName))
      newErrors.firstName = "First name must contain only letters.";

    if (!/^[A-Za-z]+$/.test(formData.lastName))
      newErrors.lastName = "Last name must contain only letters.";

    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Phone number must be exactly 10 digits.";

    if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";

    if (!formData.state)
      newErrors.state = "Please select a state.";

    if (!formData.district)
      newErrors.district = "Please select a district.";

    if (!/^[A-Za-z0-9]{4,8}$/.test(formData.password))
      newErrors.password = "Password must be 4–8 letters or numbers only.";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration Successful ✅");
      console.log("User Data:", formData);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        state: "",
        district: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    }
  };

  const handleClear = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      state: "",
      district: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter first name"
        />
        <p className="error">{errors.firstName}</p>

        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter last name"
        />
        <p className="error">{errors.lastName}</p>

        <label>Phone Number:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="10-digit number"
        />
        <p className="error">{errors.phone}</p>

        <label>Email ID:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
        />
        <p className="error">{errors.email}</p>

        <label>State:</label>
        <select name="state" value={formData.state} onChange={handleChange}>
          <option value="">-- Select State --</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Bihar">Bihar</option>
          <option value="Kerala">Kerala</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
        </select>
        <p className="error">{errors.state}</p>

        <label>District:</label>
        <select name="district" value={formData.district} onChange={handleChange}>
          <option value="">-- Select District --</option>
          <option value="Mandya">Mandya</option>
          <option value="Mysore">Mysore</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Haasan">Haasan</option>
        </select>
        <p className="error">{errors.district}</p>

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="4–8 characters"
        />
        <p className="error">{errors.password}</p>

        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Re-enter password"
        />
        <p className="error">{errors.confirmPassword}</p>

        <div className="button-container">
          <button type="submit" className="register-btn">Register</button>
          <button type="button" className="clear-btn" onClick={handleClear}>Clear</button>
        </div>
      </form>
    </div>
  );
}

export default App;