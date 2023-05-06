import React, {ChangeEvent, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {CITY_ROUTE, MAIN_ROUTE} from "../../utils/consts";

interface weather {
    data: any
}

const Search = () => {
    const [city, setCity] = useState<string>("")
    const [variants, setVariants] = useState<any[]>([])
    const history = useNavigate()
    const handlerClick = async (cityName: string, countryName: string) => {
        history(CITY_ROUTE + "/" + cityName.split(" ").join("_") + "&" + countryName);
    }
    const handlerChange = async (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value)
        await axios.get("https://api.api-ninjas.com/v1/city?limit=10&name=" + city, {headers: {'X-Api-Key': "kTsJYXwEkCmuRBsag4jeNA==Rb0EZRnfo6WOS78y"}})
            .then(res => setVariants(res.data))

    }
    const homeHandler = ()=>{
        history(MAIN_ROUTE)
    }
    return (
        <div className={"flex mt-10 w-full"}>
            <div className={"relative search-box w-full"}>
                <form>
                    <svg aria-hidden="true" className="absolute mx-3 my-1 w-5 h-5 text-gray-500 dark:text-gray-400"
                         fill="none"
                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    <input type="search"
                           className="w-full p-1 pl-10 text-gray-500 focus:bg-gray-250  text-sm outline outline-none rounded-xl bg-gray-200"
                           placeholder="search for places"
                           onChange={handlerChange}
                    />
                </form>
                <div className={"suggestion bg-gray-100 rounded-2xl w-full"}>
                    {
                        variants.map(v => <div
                            onClick={() => handlerClick(v.name, v.country)}
                            className={"cursor-pointer active:bg-gray-500 hover:bg-gray-300 rounded-xl pl-5 flex justify-between"}
                            key={v.name}
                        >
                            <li>{v.name}</li>
                            <li className={"mr-5"}>{v.country}</li>
                        </div>)
                    }
                </div>

            </div>
            <span onClick={homeHandler} className={"mx-6 bg-gray-200 h-8 p-1 rounded-full hover:bg-gray-300"}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-5 h-5">
                   <path stroke-linecap="round" stroke-linejoin="round"
                         d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
               </svg>
           </span>
        </div>
    );
};

export default Search;
