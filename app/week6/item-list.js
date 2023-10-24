"use client"

import Item from "./item";
import { useState } from "react";


export default function ItemList({items}) {

    const [sortBy, setSortBy] = useState("name");  

    const sortItems = (itemsSort, sortBy) => {
        return itemsSort.sort((a,b) => a[sortBy].localeCompare(b[sortBy]));
    };

    const handleName = () => {
        setSortBy("name");
    };

    const handleCategory = () => {
        setSortBy("category");
    }; 

    const sortedItems = sortItems([...items, sortBy]);

    return(
        <>
        <div className="flex items-center justify-center">
            <button className="bg-blue-200 text-white font-bold py-2 rounded focus:bg-yellow-200 " onClick={handleName}>Sort by Name</button>
            <button className="bg-blue-200 text-white font-bold py-2 rounded focus:bg-yellow-200 " onClick={handleCategory}>Sort by Category</button> 
        </div>
        <ul>
            <li>
                {items.map((item) => (
                    <Item 
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </li>
        </ul>
        </>
    );
}