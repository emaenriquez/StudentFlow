import React from 'react';
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 text-center">
      <Typography variant="body2">
        Todos los derechos reservados &copy; {currentYear} por emaenriquez
      </Typography>
    </footer>
  );
};

export default Footer;