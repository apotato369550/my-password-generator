import { useState } from "react"
import "./PasswordGenerator.css"
import copy_image from "../assets/copy.png"
import generate_image from "../assets/generate.png"

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const passwordLength = 12;
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowerCase = "abcdefghijklmnopqrstuvwxyz"
  const numbers = "0123456789"
  const symbols = "!@#$%^*()_+~|{}[]<>/-="
  const randomizer =
    upperCase + lowerCase + numbers + symbols;

  const createPassword = () => {
    let tempPassword = "";
    tempPassword += upperCase[Math.floor(Math.random() * upperCase.length)]
    tempPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    tempPassword += numbers[Math.floor(Math.random() * tempPassword.length)];
    tempPassword += symbols[Math.floor(Math.random() * symbols.length)];

    while (tempPassword.length < passwordLength) {
      tempPassword += randomizer[Math.floor(Math.random() * randomizer.length)];
    }

    setPassword(tempPassword)
  }

  return (
    <div className="generator">
      <h1>
        Generate a <br /> <span>Random Password</span>
      </h1>
      <div className="display">
        <input type="text" id="password" placeholder="Password" value={password}/>
        <img src={copy_image} alt="" />
      </div>
      <button onClick={createPassword}><img src={generate_image} alt="" /> Generate a Password</button>
    </div>
  );
}

export default PasswordGenerator