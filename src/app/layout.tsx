'use client';

import './globals.css';
import { useState } from 'react';
import Sidebar from '../components/global/Sidebar.style';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <body>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div style={{
          marginLeft: isOpen ? '250px' : '80px', 
          transition: 'margin-left 0.3s', 
          padding: '20px',
          background: '#f4f4f4',
          minHeight: '100vh',
        }}>
          {children}
        </div>
      </body>
    </html>
  );
}