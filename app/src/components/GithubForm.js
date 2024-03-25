import React, { useState } from "react";
import axios from "axios";

const GithubForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to the API endpoint
      const response = await axios.post(
        "https://localhost:8080/api/v1/github",
        { field_name: inputValue }
      );

      const field_name = response?.data?.field_name;

      // Check if field_name is a string
      if (typeof field_name === "string") {
        // Show the string value
        setResponseMessage(field_name);
      } else if (typeof field_name === "boolean") {
        // Convert boolean to string
        setResponseMessage(field_name.toString());
      } else {
        // Show "Nothing found" if neither string nor boolean
        setResponseMessage("Nothing found");
      }
    } catch (error) {
      // Handle errors
      setResponseMessage("Error fetching data. Please try again later.");
    }
  };

  return (
    <div className="github-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Enter field value eg: operatingStatus"
        />
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </div>
  );
};

export default GithubForm;
