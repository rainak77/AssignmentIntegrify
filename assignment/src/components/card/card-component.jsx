import React from 'react';
import { CustomButton } from '../custom-button/custom-button.component';
import './card.styles.css';
import { Link } from 'react-router-dom';



export const Card = ({ prop }) => {

    const { id, name, username, website } = prop;
    const link = `http://${website}`;
    const firstletter = name.substring(0, 1);

    return (
        <div className="container">
            <div className="firstLetter">
                {firstletter}
            </div>
            <div className="info">
                <div className="name">{name}</div>
                <div className="username">{`@${username}`}</div>
            </div>
            <div className="link">
                <a href={link}>{link}</a>
            </div>

            <Link to={`/details/${id}`} >
                <CustomButton type='button'> More Details </CustomButton>
            </Link>
        </div >

    );
};

