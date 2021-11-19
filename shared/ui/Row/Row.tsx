import React from 'react';
// import classNames from 'classnames';

export const Row: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className,
  style,
  ...props
}) => {
  return <div style={style} className={'flex flex-row ' + className} {...props} />;
};
