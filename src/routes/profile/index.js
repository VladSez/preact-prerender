import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import style from "./style";

const Profile = () => {
  const [val, setVal] = useState(0);
  const inc = () => {
    setVal(val + 1);
  };
  useEffect(() => {
    console.log("lol");
  }, [val]);
  return (
    <div class={style.profile}>
      <h1>{val + 1}</h1>
      <p>This is the user profile for a user named.3453455</p>
      <button onClick={inc}>Click Me</button> Clicked {val} times.
    </div>
  );
};

export default Profile;
