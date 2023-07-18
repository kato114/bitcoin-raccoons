import { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";

const ToggleSwitch = () => {
  const [status, setStatus] = useState(false)

  return <Toggle defaultChecked={status} onChange={setStatus} icons={false} />;
};

export default ToggleSwitch;
