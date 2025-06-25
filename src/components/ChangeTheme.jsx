import { useState } from "react";

function ChangeTheme() {
  const [isDark, setDarkTheme] = useState(0);

  const toggle = () => {
    setDarkTheme(!isDark);
  };
    const appCss = {
 height : "100vh",
 backgroundColor :isDark ? "white": "black",
 color :isDark ? "black": "white",
 display :'flex',
 alignItems:"center", 
 justifyContent:'center',
 flexDirection:"column"
  };
  return (
    <div style={appCss}>
      <p>{isDark ? "Light Mode☀️" : "Dark Mode🌙"}</p>
      <button onClick={toggle}>{!isDark ? "Light Mode" : "Dark Mode"}</button>
    </div>
  );
}

export default ChangeTheme;
