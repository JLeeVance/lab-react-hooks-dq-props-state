import React , {useState} from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`
const eyeColorMapper = {
  blue: BlueBaby,
  sun: SunBaby,
  glowing: GlowingBaby,
}


function BabyHog({ eyeColor, name, hobby }) {
  // const [eyeImage , setEyeImage] = useState(normalBaby);
  const [weight, setWeight] = useState(10)



  function handleChangeWeight(e) {
    const newWeight = e.target.name === "+" ? weight + 10 : weight - 10;
    setWeight(newWeight)
  }

  return (
    <li className="hogbabies">
      <h1>Name: {name} </h1>
      <h3>Weight: {weight} </h3>
      <h3>Hobby: {hobby} </h3>
      <h4>Eye Color: {eyeColor} </h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper[eyeColor]}      //The source of the image tag is what we need
          style={{ height: `${weight}px` }}         //Created an object containing our imgs
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
