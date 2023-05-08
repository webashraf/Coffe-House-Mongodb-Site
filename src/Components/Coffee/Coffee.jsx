import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeCard from '../CoffeCard/CoffeCard';

const Coffee = () => {
    const coffees = useLoaderData()



    return (
        <>
            <div className='grid grid-cols-2 gap-10'>
            {
                coffees.map(coffee => <CoffeCard key={coffee._id} coffee={coffee} ></CoffeCard>)
            }
            </div>
        </>
    );
};

export default Coffee;