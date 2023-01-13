import React, {useEffect, useState} from "react";
import "./User.css";
import site from "../../../assets/site.png";
import github from "../../../assets/github.png";
import location from "../../../assets/location.jpeg";
import user from "../../../assets/user.png";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


const User = () => {

    const {login}= useParams();

    //user info
    const [userInfo, setUserInfo] = useState ({});

    //user repo
    const [repos, setRepos] = useState ([]);

    useEffect (() => {
        const fetchUserInformation = async () => {
            try {
                const response = await Promise.all([
                    axios.get(`/users/${login}`),
                    axios.get(`/users/${login}/repos`)
                ]);
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUserInformation();

    },[]);

    return (
        <div className="container">
             <Link to="/" className="back">Back</Link> 
            <div className="user-information">
                <div className="image">
                    <img src="https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&name=dn2015_detalhe_topo&id=5401162&source=ng7620160.jpg&w=800&h=450&t=20160921140900"
                    />

                </div>
                <div className="user-content">
                    <h3>Name of the User</h3>
                    <p>Bio</p>
                    <div className="more-data">
                        <p> <img src= {user} alt="" /> 20 Followers. Following 10</p>
                        <p> <img src= {location} alt="" /> South Africa</p>
                        <p> <img src= {site} alt="" /> portfolio.com</p>
                        <p> <img src= {github} alt="" /> <a href="#"> View GitHub Profile</a></p>

                    </div>
                </div>

            </div>
            <div className="user-repos">
                <div className="repo">
                    <h3><a href="#">Name of the Repo</a></h3>
                    <p>Description of the Repo</p>
                    <small>Written in JavaScript</small>
                </div>
                <div className="repo">
                    <h3><a href="#">Name of the Repo</a></h3>
                    <p>Description of the Repo</p>
                    <small>Written in JavaScript</small>
                </div>
            </div>
        

        </div>
    );
};

export default User;