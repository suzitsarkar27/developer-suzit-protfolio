import React, { useState } from 'react';

const Header = () => {
     // fixed Header
 window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
    return (
        <div>
            <h2>This is heaser</h2>
        </div>
    );
};

export default Header;