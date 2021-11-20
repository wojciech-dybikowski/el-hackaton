import React from 'react';
// @ts-ignore
import classNames from 'classnames';

interface GridProps {
  className?: string;
  gridGap?: 2 | 4 | 6 | 8;
  lgGridGap?: 2 | 4 | 6 | 8;
}

export const Grid: React.FC<GridProps> = ({ lgGridGap = 6, children, className, gridGap = 2 }) => (
  <div
    className={classNames('grid grid-cols-12', className, {
      'gap-2': gridGap === 2,
      'gap-4': gridGap === 4,
      'gap-6': gridGap === 6,
      'gap-8': gridGap === 8,
      'lg:gap-2': lgGridGap === 2,
      'lg:gap-4': lgGridGap === 4,
      'lg:gap-6': lgGridGap === 6,
      'lg:gap-8': lgGridGap === 8,
    })}
  >
    {children}
  </div>
);

type spanRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridColProps {
  colSpan?: spanRange;
  mdColSpan?: spanRange;
  lgColSpan?: spanRange;
  xsColSpan?: spanRange;
  className?: string;
}

export const GridCol: React.FC<GridColProps> = ({
  mdColSpan,
  lgColSpan,
  colSpan,
  children,
  xsColSpan,
  className,
}) => (
  <div
    className={classNames(className, {
      'col-span-1': colSpan === 1,
      'col-span-2': colSpan === 2,
      'col-span-3': colSpan === 3,
      'col-span-4': colSpan === 4,
      'col-span-5': colSpan === 5,
      'col-span-6': colSpan === 6,
      'col-span-7': colSpan === 7,
      'col-span-8': colSpan === 8,
      'col-span-9': colSpan === 9,
      'col-span-10': colSpan === 10,
      'col-span-11': colSpan === 11,
      'col-span-12': colSpan === 12,
      'md:col-span-1': mdColSpan === 1,
      'md:col-span-2': mdColSpan === 2,
      'md:col-span-3': mdColSpan === 3,
      'md:col-span-4': mdColSpan === 4,
      'md:col-span-5': mdColSpan === 5,
      'md:col-span-6': mdColSpan === 6,
      'md:col-span-7': mdColSpan === 7,
      'md:col-span-8': mdColSpan === 8,
      'md:col-span-9': mdColSpan === 9,
      'md:col-span-10': mdColSpan === 10,
      'md:col-span-11': mdColSpan === 11,
      'md:col-span-12': mdColSpan === 12,
      'lg:col-span-1': lgColSpan === 1,
      'lg:col-span-2': lgColSpan === 2,
      'lg:col-span-3': lgColSpan === 3,
      'lg:col-span-4': lgColSpan === 4,
      'lg:col-span-5': lgColSpan === 5,
      'lg:col-span-6': lgColSpan === 6,
      'lg:col-span-7': lgColSpan === 7,
      'lg:col-span-8': lgColSpan === 8,
      'lg:col-span-9': lgColSpan === 9,
      'lg:col-span-10': lgColSpan === 10,
      'lg:col-span-11': lgColSpan === 11,
      'lg:col-span-12': lgColSpan === 12,
      'xs:col-span-1': xsColSpan === 1,
      'xs:col-span-2': xsColSpan === 2,
      'xs:col-span-3': xsColSpan === 3,
      'xs:col-span-4': xsColSpan === 4,
      'xs:col-span-5': xsColSpan === 5,
      'xs:col-span-6': xsColSpan === 6,
      'xs:col-span-7': xsColSpan === 7,
      'xs:col-span-8': xsColSpan === 8,
      'xs:col-span-9': xsColSpan === 9,
      'xs:col-span-10': xsColSpan === 10,
      'xs:col-span-11': xsColSpan === 11,
      'xs:col-span-12': xsColSpan === 12,
    })}
  >
    {children}
  </div>
);
