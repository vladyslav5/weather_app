import React, {FC} from 'react';

interface CardProps {
    children: React.ReactNode,
}

const Card: FC<CardProps> = ({children}) => {
    return (
        <div className={`h-full rounded-2xl bg-white shadow-lg`}>
            {children}
        </div>
    );
};

export default Card;