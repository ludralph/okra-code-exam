import React from 'react';
import AvatarImage from '../avatar.png'

const SideDrawer = props => (
  <nav className='side-drawer'>
    <div className='flex items-center mt-4 justify-center'>
      <div className='text-xs h-16 w-16 mr-3'>
        <img className='rounded-full' src={AvatarImage} />

      </div>
      <div className='text-xs '>
        <p>Habib Korede</p>
        <p>Product Designer</p>
      </div>
    </div>
    <ul className="list-none text-xs  text-center">
      <li className="my-6 ">
        <i className="fas fa-tachometer-alt px-4"></i>
        <a href="#"></a>Dashboard
        </li>
      <li className="my-3">
        <i className="fas fa-exchange-alt px-4"></i>
        <a href="#"></a>Transfers
        </li>
      <li className="my-3">
        <i className="fas fa-share px-4"></i>
        <a href="#"></a>Credits
        </li>
      <li className="my-3">
        <i className="fas fa-reply px-4"></i>
        <a href="#"></a>Debits
        </li>
        <div className='my-5'></div>
        <hr className="px-5 my-8" align='center' width='80%' height='50'/>
      <li className="my-8">
      <i className="fas fa-cog px-4"></i>
        <a href="#"></a>Settings
        </li>
      <li>
      <i className="fas fa-sign-out-alt px-4 "></i>
        <a href="#"></a>Sign Out
        </li>
    </ul>
  </nav>
);

export default SideDrawer;