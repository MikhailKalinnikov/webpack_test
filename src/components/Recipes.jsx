

const elvenShield = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonStone:4
}
const elvenSecondShield = {
  ...elvenShield,
  leather: 1,
  refinedMoonStone: 4,
};
console.log(elvenShield);
console.log(elvenSecondShield);


import React, { useState } from 'react'

const Recipes = () => {
const [recipe, setRecipe] = useState({})

  return ( 
    <div>
    <h3>Current Recipe:</h3>
      <button onClick={()=>setRecipe(elvenShield)}>Elven Shield Recipe</button>&nbsp;&nbsp;&nbsp;
      <button onClick={()=>setRecipe(elvenSecondShield)}>Elven Second Shield Recipe</button>
      <ul>
      {Object.keys(recipe).map((material)=>(
        <li key={material}>
          {material}: {recipe[material]}
        </li>
      ))}
      </ul>
    </div>
   );
}
 
export default Recipes;

