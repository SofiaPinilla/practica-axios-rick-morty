import axios from "axios";
import React, { useState } from "react";

const AddCharacter = ({ getCharacters }) => {
  const [formData, setFormData] = useState({
    name: "",
    status: "",
    image: "",
    gender: "",
  });

  const onHandleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://api-rick-ymorty-production-59b0.up.railway.app/characters",
        formData
      );
      getCharacters();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>AddCharacter</h2>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={onHandleChange}
        />
        <input
          type="text"
          name="status"
          placeholder="status"
          onChange={onHandleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="image"
          onChange={onHandleChange}
        />
        <input
          type="text"
          name="gender"
          placeholder="gender"
          onChange={onHandleChange}
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default AddCharacter;
