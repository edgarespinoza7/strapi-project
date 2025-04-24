import React from "react";

const Footer = () => {
  const fullYear = new Date().getFullYear();

  return (
    <footer className="bg-white/50 backdrop-blur">
      <div className="max-w-5xl mx-auto py-6 text-center text-xs text-zinc-500">
        <p>&copy; {fullYear} - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
