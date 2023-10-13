import React from 'react';

import s from './styles.module.css';

type ComponentProps = {
  textText?: string;
};

export const Component: React.FC<ComponentProps> = ({ textText }) => {
  return <div className={s.root}>{textText ?? 'Hello!'}</div>;
};
