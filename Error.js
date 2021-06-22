import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div>
      <h1>Error Page</h1>
      {/* by using this Link we can go back to back home */}
      {/*thei is to where    this for button*/}
      <Link to='/' className='btn'>Back Home</Link>
    </div>
  );
};

export default Error;
