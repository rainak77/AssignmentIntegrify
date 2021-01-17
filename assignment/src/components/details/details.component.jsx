import React from 'react';

export const DetailsComponent = ({ user: { name, username, email, phone, website, company: { name: companyName }, address: { street, city, suite, zipcode } } }) => {
    return (
        name ?
            <div>
                <div>- Name: {name}</div>
                <div>- Username: {username}</div>
                <div>- Email: {email}</div>
                <div>- Phone: {phone}</div>
                <div>- Website: {website}</div>
                <div>- Company: {companyName}</div>
                <div>- Address:
                    <li>{street}</li>
                    <li>{suite}</li>
                    <li>{city}</li>
                    <li>{zipcode}</li>
                </div>
            </div>
            : null
    );
};

