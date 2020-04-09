import React from 'react';

const SideDrawer = props => (
  <nav className='side-drawer'>
    <div className='flex items-center mt-4 justify-center'>
      <div className='rounded-full bg-gray-600 text-xs h-16 w-16 mr-3'>

      </div>
      <div className='text-xs '>
        <p>Habib Korede</p>
        <p>Product Designer</p>
      </div>
    </div>
    <ul class="list-none text-xs  text-center">
      <li class="my-6 ">
        <a href="#"></a>Dashboard
        </li>
      <li class="my-3">
        <a href="#"></a>Transfers
        </li>
      <li class="my-3">
        <a href="#"></a>Credit
        </li>
      <li class="my-3">
        <a href="#"></a>Debit
        </li>
      <li class="my-8">
        <a href="#"></a>Settings
        </li>
      <li>
        <a href="#"></a>Sign Out
        </li>
    </ul>
  </nav>
);

export default SideDrawer;