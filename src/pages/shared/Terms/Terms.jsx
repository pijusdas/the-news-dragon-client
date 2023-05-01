import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='container'>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iusto, quaerat quas quia quae cupiditate illo culpa similique sequi eos quam! Quo neque impedit enim, perspiciatis totam animi exercitationem facilis.</p>
             <p>Go Back <Link to='/register'>Register page</Link></p>
        </div>
    );
};

export default Terms;