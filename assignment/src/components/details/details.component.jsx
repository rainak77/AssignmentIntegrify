import React from 'react';

export const DetailsComponent = ({ user: { name, username, email, phone, website, company: { name: companyName }, address: { street, city, suite, zipcode } } }) => {
    return (
        name ?
            <div>
                <div>- Name: {name}</div>
                <div>- Username: {username}</div>
                <div>- Email: {email}</div>
                <div>- Phone: {phone}</div>
                <div>- Company: {companyName}</div>
                <div>- Website: {website}</div>
                <div>- Address:
                    <li>street: {street}</li>
                    <li>suite: {suite}</li>
                    <li>city: {city}</li>
                    <li>zipcode: {zipcode}</li>
                </div>
            </div>
            : null
    );
};

