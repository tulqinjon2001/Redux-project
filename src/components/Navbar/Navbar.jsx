import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo-black.png';

function Navbar() {
  return (
    <React.Fragment>
      <header className='bg-secondary'>
        <div className='container'>
          <div className='row p-5'>
            <Link className='col-2' to='/'>
              <img className='w-50 rounded-pill' src={logo} alt="Site logo" />
            </Link>

            <div class="col-7 d-flex align-items-center justify-content-between'">
              <input class="form-control w-50" type="text" placeholder="Search?" />
              <button class="text-light bg-black btn" type="button">&gt;</button>
            </div>

            <div className='col-3 d-flex align-items-center justify-content-between'>
              <Link className='text-light' to='/login'>
                Login
              </Link>

              <Link className='text-light' to='/register'>
                Register
              </Link>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Navbar