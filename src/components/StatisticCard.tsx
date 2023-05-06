import React, {FC, ReactNode} from 'react';
import Card from "./Card";

interface StatisticCardProps {
    children: ReactNode
}

const StatisticCard: FC<StatisticCardProps> = ({children}) => {
    return (
        <div className={"h-36"}>
            <Card>
                {children}
            </Card>
        </div>
    );
};

export default StatisticCard;