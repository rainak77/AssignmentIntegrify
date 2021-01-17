import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserById } from '../../api/index';
import { DetailsComponent } from '../../components/details/details.component';
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
            <h2 className='info'>{user.id}: User Detail page </h2>
            <div className='details'>
                <DetailsComponent user={user} />
            </div>
        </div>
    );
};