import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-fira-code">
          © {new Date().getFullYear()} shaan kohli. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
