import React, {FC} from 'react';
import StatisticCard from "./StatisticCard";
import Card from "./Card";
import {WeatherData} from "../types/WeatherType";

interface day {
    text: string,
    graduses: string
}

interface ContentProps {
    weather?: WeatherData
}

const Content: FC<ContentProps> = ({weather}) => {
    const deg: string = weather ? (-180 + (weather?.feels_like / 100) * 180) + "deg" : -180 + "deg";
    console.log(deg)
    const sunset = weather && new Date(weather?.sunset * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    })
    const sunrise = weather && new Date(weather?.sunrise * 1000).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    })
    return (
        <div className={"w-full pl-5 xl:w-5/6 pt-5"}>
            <div className={" text-2l font-bold"}>Today's Highlights</div>
            <div className={"grid my-5 grid-cols-3 gap-5"}>
                <StatisticCard>
                    <div className={"z-10 m-3 text-gray-300"}>
                        Feels Like
                    </div>
                    {}
                    <div className={"mx-auto  w-fit text-xl"}>{weather?.feels_like}</div>
                    <div className={"flex justify-center items-end flex w-54 h-20  mb-5   overflow-hidden relative"}>
                        <div style={{rotate: deg}}
                             className={"absolute z-10 w-40 h-20 z-1 rounded-t-full bg-orange-400 origin"}></div>
                        <div className={"w-40 h-20 z-0 rounded-t-full bg-gray-300"}></div>
                        <div className={"absolute z-10 mt-2 w-36 h-18 rounded-t-full bg-gray-200  "}></div>
                    </div>
                </StatisticCard>
                <StatisticCard>
                    <div className={"z-10 m-3 text-gray-300"}>
                        Wind Status
                    </div>
                    <div className={"ml-3 flex items-end"}>
                        <div className={"text-2xl"}>{weather?.wind_speed}</div>
                        <div>km/h</div>
                    </div>
                    <div className={"ml-3 mt-5"}>Light breeze</div>
                </StatisticCard>
                <StatisticCard>
                    <div className={"text-gray-300 m-3"}>
                        Sunrise & Sunset
                    </div>
                    <div className={"w-full h-full flex flex-col  m-3 items-evenly space-y-5"}>
                        <div className={"flex space-x-5"}>
                            <img width="30px" alt="arrow-up"
                                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Eo_circle_orange_arrow-up.svg/512px-Eo_circle_orange_arrow-up.svg.png"/>
                            <div>{sunrise}</div>
                        </div>
                        <div className={"flex space-x-5"}>
                            <img width="30px" alt="arrow-up" className={"rotate-180"}
                                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Eo_circle_orange_arrow-up.svg/512px-Eo_circle_orange_arrow-up.svg.png"/>

                            <div>{sunset}</div>
                        </div>
                    </div>
                </StatisticCard>
                <StatisticCard>
                    <div className={"m-3 text-gray-300"}>Humidity</div>
                    <div className={"flex justify-evenly"}>
                        <div className={"m-3 text-3xl"}>{weather?.humidity}%</div>
                        <div
                            className={"h-18 w-5 rounded-xl  border-2 border-gray-200 flex  flex-col-reverse items-center pb-1"}>
                            <div className={"w-3 rounded-xl bg-blue-800"}
                                 style={{height: (weather ? weather?.humidity / 100 : 0) * 4 + "rem"}}>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className={"ml-3"}>Miserable</div>
                </StatisticCard>
                <StatisticCard>
                    <div className={"m-3 text-gray-300"}>Wind degrees</div>
                    <div className={"m-6 text-3xl"}>{weather?.wind_degrees}<sup>&deg;</sup></div>
                    {/*<div className={"m-3"}>Good Visibility</div>*/}
                </StatisticCard>
                <StatisticCard>
                    <div className={""}>
                        <div className={"m-3 text-gray-300"}>Min & Max temperature</div>
                        <div className={"w-full h-full flex flex-col  m-3 items-evenly space-y-5"}>
                            <div className={"flex space-x-5"}>
                                <img alt={"max_tem"} width={"40px"}
                                     src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/null/external-warm-resort-xnimrodx-lineal-color-xnimrodx.png"/>
                                <div className={"text-3xl"}>{weather?.max_temp}<sup>&deg;</sup></div>
                            </div>
                            <div className={"flex space-x-5"}>
                                <img alt={"min_temp"}
                                     width={"40px"}
                                     src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/64/null/external-warm-resort-xnimrodx-blue-xnimrodx.png"/>
                                <div className={"text-3xl"}>{weather?.min_temp}<sup>&deg;</sup></div>
                            </div>
                        </div>
                    </div>
                </StatisticCard>
            </div>
        </div>
    );
};

export default Content;