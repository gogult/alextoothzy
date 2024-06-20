"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
const CrudComponent = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    axios
      .get("https://blushing-efficient-trouble.glitch.me/items")
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
  }, []);

  const addItem = () => {
    axios
      .post("https://blushing-efficient-trouble.glitch.me/items", { name })
      .then((response) => {
        setItems([...items, response.data]);
        setName("");
      })
      .catch((error) => console.error(error));
  };

  const updateItem = () => {
    axios
      .put(`https://blushing-efficient-trouble.glitch.me/items/${currentItem._id}`, { name })
      .then((response) => {
        setItems(
          items.map((item) =>
            item._id === currentItem._id ? response.data : item
          )
        );
        setEditing(false);
        setName("");
        setCurrentItem(null);
      })
      .catch((error) => console.error(error));
  };

  const deleteItem = (id) => {
    axios
      .delete(`https://blushing-efficient-trouble.glitch.me/items/${id}`)
      .then(() => setItems(items.filter((item) => item._id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <div className="bg-slate-200">
      <h1 >CRUD Application</h1>
      <input className=" bg-slate-400"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {editing ? (
        <button onClick={updateItem}>Update Item</button>
      ) : (
        <button onClick={addItem}>Add Item</button>
      )}
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name}
            <button
              onClick={() => {
                setEditing(true);
                setName(item.name);
                setCurrentItem(item);
              }}
            >
              Edit
            </button>
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudComponent;