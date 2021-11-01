import React, {useEffect} from 'react';

const Favorite = () => {
    useEffect(() => {
        document.title = 'Favorite - Notedly';
    });
    
    return (
        <div>
            <h1>Notedly</h1>
            <p>These are my favorites</p>
        </div>
    );
};

export default Favorite;