import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const T2 = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate(); // To navigate to other routes

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handle = () => {
    // Handle navigation based on selected option
    if (selectedOption === 'option1') {
      alert('you will be redirected to our pdf summariser bot')
      window.open("https://pdf-bot-4kop6sutb9lglhpvnumu7f.streamlit.app/", "_blank"); // Open TailwindCSS website in a new tab
    } else if (selectedOption === 'option2') {
      alert('you will be redirected to our url summariser bot')
      window.open("https://url-summerizer-6fwrqppw7lxgdvuqgsazvx.streamlit.app/", "_blank"); // Open YouTube in a new tab
    } else if (selectedOption === 'option3') {
      alert('you will be Redirected to our mini-search engine bot')
      window.open("https://mini-search-binarybrains.streamlit.app/", "_blank"); // Open Instagram in a new tab
    } 
    else{
      alert('Please select a valid option');
    }
  };

  return (
    <div className="container" style={containerStyles}>
      <h1 className="title" style={titleStyles}>
        Intelligent Research Paper Query Assistant
      </h1>
      <form onSubmit={handleSubmit} style={formStyles}>
        {/* Option 1 */}
        <div className="input-group" style={inputGroupStyles}>
          <input
            type="radio"
            id="option1"
            name="queryOption"
            onChange={() => setSelectedOption('option1')}
          />
          <label htmlFor="option1" style={labelStyles}>
            For Research Paper PDF Summerizer
          </label>
        </div>

        {/* Option 2 */}
        <div className="input-group" style={inputGroupStyles}>
          <input
            type="radio"
            id="option2"
            name="queryOption"
            onChange={() => setSelectedOption('option2')}
          />
          <label htmlFor="option2" style={labelStyles}>
            For Any Research Related Query
          </label>
        </div>

        {/* Option 3 */}
        <div className="input-group" style={inputGroupStyles}>
          <input
            type="radio"
            id="option3"
            name="queryOption"
            onChange={() => setSelectedOption('option3')}
          />
          <label htmlFor="option3" style={labelStyles}>
            To Get Information Upto Current Day  Context
          </label>
        </div>
       

        {/* Submit Button */}
        <button
          type="button" // Use type="button" to avoid form submission if not needed
          className="btn"
          style={buttonStyles}
          onClick={handle} // Trigger handle function on button click
        >
          Select
        </button>
      </form>
    </div>
  );
};

// Inline styles
const containerStyles = {
  backgroundColor: '#ffffff',
  border: '1px solid #ddd',
  borderRadius: '20px',
  padding: '25px',
  width: '90%',
  maxWidth: '600px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundImage: 'linear-gradient(135deg, #ece9e6, #ffffff)',
};

const titleStyles = {
  textAlign: 'center',
  fontSize: '30px',
  color: '#333',
  fontWeight: 'bold',
  marginBottom: '20px',
  marginTop: '30px',
};

const formStyles = {
  width: '100%',
};

const inputGroupStyles = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  backgroundColor: '#f7f9fc',
};

const labelStyles = {
  marginLeft: '10px',
  flex: '1',
  fontSize: '16px',
  color: '#555',
};

const buttonStyles = {
  display: 'block',
  width: '100%',
  padding: '12px',
  backgroundColor: '#007bff',
  color: 'white',
  fontSize: '18px',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  textAlign: 'center',
};

export default T2;
3 options for bots page