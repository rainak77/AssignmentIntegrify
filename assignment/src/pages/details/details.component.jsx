import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserById } from '../../api/index';
import './details.styles.css';

export const Details = (props) => {
    const { id } = useParams();

    const [user, setUser] = useState({});

    useEffect(() => {
        fetchUserById(id).then(data => setUser(data));
    }, []);
    if (!user.name) {
        return 'loading!!!';
    }
    return (
        <div>
            <p>{user.id}: User Detail page </p>
            <div className='details'>
                {
                    user.name ?
                        <div>
                            <div>- Name: {user.name}</div>
                            <div>- Username: {user.username}</div>
                            <div>- Email: {user.email}</div>
                            <div>- Phone: {user.phone}</div>
                            <div>- Website: {user.website}</div>
                            <div>- Company: {user.company.name}</div>
                            <div>- Address:
                                    <li>{user.address.street}</li>
                                <li>{user.address.suite}</li>
                                <li>{user.address.city}</li>
                                <li>{user.address.zipcode}</li>
                            </div>
                        </div>
                        : null
                }
            </div>
        </div>
    );
};

