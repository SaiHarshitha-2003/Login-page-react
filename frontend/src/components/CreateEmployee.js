// CreateEmployee.js
import React, { useState } from "react";
import "./CreateEmployee.css";

const CreateEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    course: [],
    img: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        course: checked
          ? [...prevData.course, value]
          : prevData.course.filter((course) => course !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setFormData({ ...formData, img: file });
    } else {
      alert("Only JPG/PNG files are allowed.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and submission logic here
    alert("Form submitted!");
  };

  return (
    <div className="create-employee">
      <h1>Create Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Mobile No</label>
          <input type="text" name="mobile" value={formData.mobile} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Designation</label>
          <select name="designation" value={formData.designation} onChange={handleInputChange} required>
            <option value="">Select</option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <label>
            <input type="radio" name="gender" value="M" checked={formData.gender === "M"} onChange={handleInputChange} /> M
          </label>
          <label>
            <input type="radio" name="gender" value="F" checked={formData.gender === "F"} onChange={handleInputChange} /> F
          </label>
        </div>
        <div className="form-group">
          <label>Course</label>
          <label>
            <input type="checkbox" name="course" value="MCA" checked={formData.course.includes("MCA")} onChange={handleInputChange} /> MCA
          </label>
          <label>
            <input type="checkbox" name="course" value="BCA" checked={formData.course.includes("BCA")} onChange={handleInputChange} /> BCA
          </label>
          <label>
            <input type="checkbox" name="course" value="BSC" checked={formData.course.includes("BSC")} onChange={handleInputChange} /> BSC
          </label>
        </div>
        <div className="form-group">
          <label>Img Upload</label>
          <input type="file" name="img" accept=".jpg,.png" onChange={handleFileChange} />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default CreateEmployee;
