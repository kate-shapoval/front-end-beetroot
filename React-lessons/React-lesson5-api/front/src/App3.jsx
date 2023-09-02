import useFetch from "react-fetch-hook";

import List02 from "./components/List.jsx";

export default function ApiHook() {
    const { data, isLoading } = useFetch(
        "https://rickandmortyapi.com/api/character"
    );

    console.log(data?.results);
    // <List02 item={item} />
    const List = data?.results.map((item) => <List02 item={item} />);
    return isLoading ? (
        <div>Loading...</div>
    ) : (
        <>
            <h2>Load</h2>
            <ul>{List}</ul>
        </>
    );
}