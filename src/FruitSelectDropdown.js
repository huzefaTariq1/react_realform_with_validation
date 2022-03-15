import React, { useState } from 'react'

export const FruitSelectDropdown = () => {
  const [currentFruit, setCurrentFruit] = useState('oranges')
  
  const changeFruit = (newFruit) => {
    setCurrentFruit(newFruit)
  }

  console.log(currentFruit);
  
  return (
    <form>
      <select 
        onChange={(event) => changeFruit(event.target.value)}
        value={currentFruit}
      >
        <option value="apples">Red Apples</option>
        <option value="oranges">Outrageous Oranges</option>
        <option value="tomatoes">Technically a Fruit Tomatoes</option>
        <option value="bananas">Bodacious Bananas</option>
      </select>
    </form>
  )
}