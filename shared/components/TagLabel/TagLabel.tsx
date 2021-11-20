import React from 'react';

export function TagLabel({
  label = 'Kino',
  className,
  wrapperStyle,
  textStyle,
}: {
  label: string;
  className?: string;
  wrapperStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
}) {
  return (
    <div style={wrapperStyle} className={'text-white bg-primary-blue ' + className}>
      <p
        className="uppercase px-1.5 py-px border-4 border-black group-hover:border-white"
        style={{
          fontWeight: 900,
          lineHeight: 1.2,
          fontFamily: 'Montserrat',
          fontSize: '12px',
          ...textStyle,
        }}
      >
        {label}
      </p>
    </div>
  );
}
