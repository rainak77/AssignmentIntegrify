import React, { useState, useEffect } from 'react';
import { userList } from '../../api';
import { Card } from '../card/card-component';
import './card-list.styles.css';


export const Cardlist = () => {
    const [users, setUserList] = useState([]);

    useEffect(() => {
        userList().then(data => setUserList(data));
    }, []);

    return (
        <div className='card-list'>
            {
                users.map(user =>
                    <Card key={user.id} prop={user} />)
            }
        </div>
    );
};

