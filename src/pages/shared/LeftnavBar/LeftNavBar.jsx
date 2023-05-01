import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNavBar = () => {
    const [categories, setCategories] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <div>
             <h4>All Categories</h4>
             <div className='ps-4'>
                {
                    categories.map(categorie => <p key={categorie.id} >
                        <Link to={`/categorie/${categorie.id}`} className='text-decoration-none text-black'>{categorie.name}</Link>
                    </p>)
                }
             </div>
        </div>
    );
};

export default LeftNavBar;