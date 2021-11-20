import React from 'react';
// @ts-ignore
import classNames from 'classnames';

export const Column: React.FC<{ className?: string }> = ({ className, ...props }) => {
  return <div className={classNames('flex flex-col', className)} {...props} />;
};
