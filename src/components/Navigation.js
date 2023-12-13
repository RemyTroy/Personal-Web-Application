import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAddHomeWork } from 'react-icons/md';
import { RiContactsBook2Line,  RiMoneyDollarCircleLine} from 'react-icons/ri';
import { SlNotebook } from 'react-icons/sl';
import { TbCameraSelfie } from 'react-icons/tb';
import { BsAirplaneEngines } from 'react-icons/bs';
// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">  <MdOutlineAddHomeWork /> Home</Link>
        <Link to="/Contact"><RiContactsBook2Line /> Contact</Link>
        <Link to="topics"><SlNotebook />Topics</Link>
        <Link to="/Gallery"><TbCameraSelfie />Gallery</Link>
        <Link to="/Order"><RiMoneyDollarCircleLine />Order</Link>
        <Link to="/TravelList"><BsAirplaneEngines /> Travel List</Link>
    </nav>
  );
}

export default Navigation;
