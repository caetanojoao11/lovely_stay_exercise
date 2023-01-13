import React, { useState } from "react";
import "./Home.css";
import axios from "../../../axios";
import User from "../ui/User";


const Home = () => {

    const [query, setQuery] = useState("");
    //Users fetched from the API
    const [users, setUsers] = useState([]);

    const handleQueryInput = (e) => {
        const value = e.target.value;
        setQuery(value);
    }

    const fetchUsers = async () => {
        try {
            const { data } = await axios.get("/search/users?q=" + query);
            return data?.items;
        } catch (error) {

            console.error(error);
            return null;
        }
    }

    const handleSearchUsers = async (e) => {
        e.preventDefault();
        if (query) {
            const items = await fetchUsers();
            setUsers(items);
        }
        else {
            console.log("Query is empty");
        }
    }

    return (
        <div className="container">
            <div className="search-form">
                <h3>GitHub Search User</h3>
                <form>
                    <input value={query} onChange={handleQueryInput} type="text" />
                    <button onClick={handleSearchUsers}> Search</button>
                </form>
            </div>
            <div className="search-results">
                
                
               {users ? (
                users.map((user) => {
                return <User user={user} key={user.id}/>;
               })
               ) : (
                 <h2>There is nothing to display</h2>
                 )}
                

            </div>

        </div>
    )
};

export default Home;