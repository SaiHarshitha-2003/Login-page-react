import React, { useState, useEffect } from 'react';

const EmployeeEdit = ({ match }) => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    mobileNo: '',
    designation: '',
    gender: '',
    course: [],
    image: null,
  });
  const [error, setError] = useState({});

  useEffect(() => {
    // Fetch employee data based on ID (match.params.id) and populate form fields
    // Replace with API call to fetch employee details
    setEmployee({
      name: 'Sai',
      email: 'sai@gmail.com',
      mobileNo: '954010044',
      designation: 'HR',
      gender: 'F',
      course: ['MBA'],
    });
  }, [match.params.id]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
    setError({ ...error, [name]: '' });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (file && allowedTypes.includes(file.type)) {
      setEmployee({ ...employee, image: file });
      setError({ ...error, image: '' });
    } else {
      setError({ ...error, image: 'Only jpg/png files are allowed' });
    }
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setEmployee((prev) => ({
      ...prev,
      course: prev.course.includes(value)
        ? prev.course.filter((course) => course !== value)
        : [...prev.course, value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    let formValid = true;
    let newError = {};

    if (!employee.name) {
      newError.name = 'Name is required';
      formValid = false;
    }

    if (!validateEmail(employee.email)) {
      newError.email = 'Invalid email format';
      formValid = false;
    }

    if (!/^\d+$/.test(employee.mobileNo)) {
      newError.mobileNo = 'Mobile number must be numeric';
      formValid = false;
    }

    if (!employee.designation) {
      newError.designation = 'Designation is required';
      formValid = false;
    }

    setError(newError);
    if (formValid) {
      // Submit form data to backend
      alert('Form submitted successfully!');
    }
  };

  return (
    <div>
      <h2>Employee Edit</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
          {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
          />
          {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
        </div>

        <div>
          <label>Mobile No:</label>
          <input
            type="text"
            name="mobileNo"
            value={employee.mobileNo}
            onChange={handleChange}
          />
          {error.mobileNo && <p style={{ color: 'red' }}>{error.mobileNo}</p>}
        </div>

        <div>
          <label>Designation:</label>
          <select
            name="designation"
            value={employee.designation}
            onChange={handleChange}
          >
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
          {error.designation && <p style={{ color: 'red' }}>{error.designation}</p>}
        </div>

        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="M"
              checked={employee.gender === 'M'}
              onChange={handleChange}
            />{' '}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="F"
              checked={employee.gender === 'F'}
              onChange={handleChange}
            />{' '}
            Female
          </label>
        </div>

        <div>
          <label>Course:</label>
          <label>
            <input
              type="checkbox"
              value="MCA"
              checked={employee.course.includes('MCA')}
              onChange={handleCheckboxChange}
            />{' '}
            MCA
          </label>
          <label>
            <input
              type="checkbox"
              value="BCA"
              checked={employee.course.includes('BCA')}
              onChange={handleCheckboxChange}
            />{' '}
            BCA
          </label>
          <label>
            <input
              type="checkbox"
              value="BSC"
              checked={employee.course.includes('BSC')}
              onChange={handleCheckboxChange}
            />{' '}
            BSC
          </label>
        </div>

        <div>
          <label>Image Upload:</label>
          <input type="file" onChange={handleFileUpload} />
          {error.image && <p style={{ color: 'red' }}>{error.image}</p>}
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EmployeeEdit;
