import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                src="https://fontmeme.com/permalink/201111/201754ef73c66990d6fe6b2edffbbd68.png"
                alt="Netflix Logo"
                className="nav_logo"
            />

            <img
                src="https://i.pravatar.cc/300"
                alt="Avatar"
                className="nav_avatar"
            />
        </div>
    );
};

export default Nav;
