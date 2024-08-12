import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = (props: CardProps) => {
  const { children, className } = props;
  return (
    <div className={`w-full rounded-lg ${className} border`}>
      {children}
    </div>
  );
};

export default Card;
