// EmployeeList.js
import React, { useState } from "react";
import "./EmployeeList.css";

const EmployeeList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const employees = [
    { id: 1, image: "public/image.png", name: "Sushu", email: "sushu1@gmail.com", mobile: "9012348655", designation: "HR", gender: "Female", course: "MCA", createDate: "15-Oct-24" },
    { id: 2, image: "image.png", name: "Harshi", email: "harshi2@gmail.com", mobile: "9540178456", designation: "Sales", gender: "Female", course: "BCA", createDate: "1-Nov-23" },
    { id: 3, image: "image.png", name: "Nani", email: "nani3@gmail.com", mobile: "9678953219", designation: "Manager", gender: "Male", course: "BSC", createDate: "5-Aug-24" },
    { id: 4, image: "image.png", name: "Chintu", email: "chintu4@gmail.com", mobile: "7934956565", designation: "HR", gender: "Male", course: "MCA", createDate: "13-Feb-22" },
  ];

  const filteredEmployees = employees.filter(employee => 
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="employee-list">
      {/* Header */}
      <div className="header">
        <div className="logo">Logo</div>
        <nav className="nav-menu">
          <a href="/">Home</a>
          <a href="/employee-list">Employee List</a>
          <span className="user-info">Harshi -</span>
          <a href="/logout">Logout</a>
        </nav>
      </div>

      {/* Title and Actions */}
      <div className="title-row">
        <h1>Employee List</h1>
        <span>Total Count: {filteredEmployees.length}</span>
        <button className="create-employee">Create Employee</button>
        <div className="search">
          <label>Search:</label>
          <input 
            type="text" 
            placeholder="Enter Search Keyword" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
      </div>

      {/* Employee Table */}
      <table>
        <thead>
          <tr>
            <th>Unique Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Create date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td><img src={employee.image} alt={employee.name} className="employee-image" /></td>
              <td>{employee.name}</td>
              <td><a href={`mailto:${employee.email}`}>{employee.email}</a></td>
              <td>{employee.mobile}</td>
              <td>{employee.designation}</td>
              <td>{employee.gender}</td>
              <td>{employee.course}</td>
              <td>{employee.createDate}</td>
              <td><a href={`/edit/${employee.id}`}>Edit</a> - <a href={`/delete/${employee.id}`}>Delete</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
