import React from 'react';
import classNames from 'classnames';

export const Column: React.FC<{ className?: string }> = ({ className, ...props }) => {
  return <div className={classNames('flex flex-col', className)} {...props} />;
};
