import React, { useEffect, useState } from 'react'
import defaultImg from '../../assets/images/default.jpg'
import './Users.css'

const API = () => {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log(users)
        setUsers(users);
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            <h1>Users</h1>
            <ul className="users">
                {users.map((user) => {
                    const { id, name, website, imgSrc } = user
                    return(
                        <li key={id}>
                            <img src={imgSrc ? imgSrc : defaultImg} alt="" />
                            <div className="user-content">
                                <h4>{name}</h4>
                                <a href={website}>profile</a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default API
