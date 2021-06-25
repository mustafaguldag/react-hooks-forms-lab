import React, {useState} from "react";
import { v4 as uuid } from "uuid";






function ItemForm({ onItemFormSubmit }) {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const selectHandle = (e) => {
    setCategory(e.target.value)
  };
  
  const changeHandle = (e) => {
    setName(e.target.value)
  };
  
  

  const handleSubmit = (e) => {
      e.preventDefault();
      onItemFormSubmit({
        id: uuid(),
        name,
        category,
      });
    }
  


  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={changeHandle} type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={selectHandle} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
