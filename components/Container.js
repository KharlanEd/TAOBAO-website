import React from 'react';
import styled from '../styles/Container.module.css'

export const Container = ({ children }) => {
  return <div className={styled.container}>{children}</div>;
};
