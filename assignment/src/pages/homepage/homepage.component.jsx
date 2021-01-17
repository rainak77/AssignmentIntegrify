import React from 'react';
import { Cardlist } from '../../components/card-list/card-list.component';
import './homepage.styles.css';

const Homepage = () => {
    return (
        <div className='homepage'>
            <h3>Home Page</h3>
            <Cardlist />
        </div>
    );
};

export default Homepage;