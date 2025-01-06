import React from "react";

function Footer() {
  return (
    <footer
      style={{ backgroundColor: "rgba(72, 85, 247, 0.60)" }}
      className="w-screen py-1 fixed bottom-0 text-white text-center"
    >
      <p>© {new Date().getFullYear()} All Rights Reserved Christine Hoang</p>
    </footer>
  );
}

export default Footer;
