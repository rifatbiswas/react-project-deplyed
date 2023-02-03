import React from 'react';

const Country = ({country}) => {
    const {area, region, name, flags, poplation} = country;
    return (
        <div className='country'>

            <h1>Country Nmae:{name.common}</h1>
            <h2>Population:{poplation}</h2>
            <h3>Area: {area}</h3>
            <img src={flags.png} alt="" />
            <p>Region: {region}</p>

        </div>
    );
};

export default Country;