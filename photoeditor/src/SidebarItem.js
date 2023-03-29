import React from 'react';

export default function SidebarItem({name, active, handleClick}) {
  return (
    <button className={`sidebar-item ${active ? 'active' : ''}`}
    onClick={handleClick}
    >
      {name}
      </button> //active helps by highlighting an item when hovering. So, here its going to give us an active class if active is true else it will return an empty string
  )
}
