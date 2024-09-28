'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaHome, FaBookOpen, FaUser, FaCog } from 'react-icons/fa';
import { GiCakeSlice } from 'react-icons/gi';

const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: ${({ $isOpen }) => ($isOpen ? '250px' : '80px')};
  background-color: #1e1e2d;
  transition: width 0.3s;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  padding: 20px;
  font-weight: bold;
  text-align: center;
  width: 100%;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const MenuItem = styled.li<{ $isOpen: boolean }>`
  width: 100%;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: ${({ $isOpen }) => ($isOpen ? 'flex-start' : 'center')};
  padding-left: ${({ $isOpen }) => ($isOpen ? '20px' : '0')};

  &:hover {
    background-color: #3a3a4d;
    cursor: pointer;
  }

  a {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: margin-left 0.2s;
    margin-left: ${({ $isOpen }) => ($isOpen ? '10px' : '0')};
  }

  svg {
    font-size: 1.5rem;
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  right: -20px;
  background-color: #1e1e2d;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
`;

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer $isOpen={isOpen}>
      <ToggleButton onClick={toggleSidebar}>
        <FaBars />
      </ToggleButton>
      <Logo>{isOpen ? 'Dashboard' : 'D'}</Logo>
      <Menu>
        <MenuItem $isOpen={isOpen}>
          <FaHome />
          {isOpen && <a href="#">Home</a>}
        </MenuItem>
        <MenuItem $isOpen={isOpen}>
          <GiCakeSlice />
          {isOpen && <a href="#">Products</a>}
        </MenuItem>
        <MenuItem $isOpen={isOpen}>
          <FaBookOpen />
          {isOpen && <a href="#">Recipes</a>}
        </MenuItem>
        <MenuItem $isOpen={isOpen}>
          <FaUser />
          {isOpen && <a href="#">Users</a>}
        </MenuItem>
        <MenuItem $isOpen={isOpen}>
          <FaCog />
          {isOpen && <a href="#">Settings</a>}
        </MenuItem>
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;