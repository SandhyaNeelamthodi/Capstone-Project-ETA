
import React from 'react';
import prof from './prof.jpeg'; // Update the path to your actual image

function Navbar({ searchTerm, setSearchTerm }) {
    return (
      <nav>
        <div className="nav-left">
          <button>Events</button>
          <button>Reminder</button>
          <button>Settings</button>
        </div>
        <div className="nav-right">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
          />
          <img className="profile-picture" src={prof} alt="Profile" />
        </div>
      </nav>
    );
  }
export default Navbar;  