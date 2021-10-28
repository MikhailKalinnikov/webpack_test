
import "./styles/index.scss"

const elvenShield = {
  leathrStrips: 2,
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
