import ItemList from "./item-list";

export default function Items({name, quantity, category}) {
    return(
        <div className="border border-yellow-200 bg-blue-200 w-full max-w-xs m-4 p-2">
            <h2 className="text-2xl font-bold m-2 text-blue-950">{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </div>

    );
}