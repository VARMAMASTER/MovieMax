import React from 'react'

export default function Header() {
  return (
    <>
        <nav>
        <div className="title">MovieMax</div>
        <div className="menu">
            {/* <label htmlFor="menu-card"></label> */}
            <select name='menu-card' id="menu-list">
                    <option value="download">Menu</option>
                    <option value="download">Download</option>
            </select>
        </div>
        </nav>
        <hr />
    </>
  )
}
