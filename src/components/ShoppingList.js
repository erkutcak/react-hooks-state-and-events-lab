import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [category, setCategory] = useState('All');

  const newItems = items.filter((item) => {
    if (category === 'All') {
      return items;
    } else {
      return item.category === category
    }
  })

  const categoryFilters = newItems.map((items) => {
    return (
      <Item key={items.id} name={items.name} category={items.category} />
    )
  })

  function handleChange(e) {
    setCategory(e.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={category} onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">{categoryFilters}</ul>
    </div>
  );
}

export default ShoppingList;
