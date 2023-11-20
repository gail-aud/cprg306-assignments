"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdea from "./meal-ideas";
import SignAndSignOut from "../page";
import Link from "next/link";
import { getItems, addItem } from "./shopping-list-service";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";


export default function Page () {

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    const [items, setItems] = useState([]);
    const [selectItemName, setSelectItemName] = useState("");

    const loadItems = async () => {
        if (user && user.uid) {
            const items = await getItems(user.uid);
            setItems(userItems);
        }

    };

    useEffect(() => {
        loadItems();
    }, [user?.uid]);

    function handleAddItem(item) {
        if(user && user.uid) {
            addItem(user.uid, item).then((id) => {
                item.id = id;

                setItems( [...items, item]);
        });
    }

    }

    function handleItemSelect(item) {
        let name = item.name.split(",")[0].replace(/[^a-zA-Z ]/g, "").trim();
        setSelectItemName(item.name);
    }

    return(
        <main>
            {user ? (
                <>
                <div>
                    <button className="bg-blue-200 hover:bg-blue-400n text-white font-bold py-2 px-4 rounded" onClick={firebaseSignOut}>Sign Out</button>
                </div>
                <div className="flex">
        <div className="w-1/2">
            <h1 className="text-3xl font-bold m-2 text-blue-200">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect}/>
        </div>
        <div className="w-1/2">
            <MealIdea name={selectItemName} />
        </div>
        </div>
    </>) :
    <div>
        <p className="mb-2">Please sign in to use shopping list</p>
        <button onClick={gitHubSignIn}>Sign In with GitHub</button>
    </div>}

        </main>
    );
}