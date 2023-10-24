import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (  
<nav>
  <a key={NavBar.id} href="#home"> Home</a>
  <a key={NavBar.id} href="#about"> About</a>
  <a key={NavBar.id} href="#projects"> Projects</a>
</nav>
)}

export default NavBar;
