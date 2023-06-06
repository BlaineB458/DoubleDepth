import React, { useState } from 'react';
import axios from 'axios';

// JSX form component
const Form = () => {
    const [formData, setFormData] = useState({
      companyName: '',
      serviceType: '',
      description: '',
    });
  
    const handleChange = (e) => {
        console.log(e.target.value);
      setFormData({
        ...formData,
        [e.target.name] : e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      console.log(formData);
  
      axios.post('https://double-depth.onrender.com/api/project', formData, config)
        .then((response) => {
          console.log('Portfolio created:', response.data);
          // Handle success
        })
        .catch((error) => {
          console.error('Error creating portfolio:', error.response.data);
          // Handle error
        });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Company"
        />
        <input
          type="text"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          placeholder="Service Type"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <button type="submit">Submit</button>
      </form>
    );
  };

export default Form;