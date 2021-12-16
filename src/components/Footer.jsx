import React from 'react'

function Footer() {
    const date = new Date().getFullYear();
    return (
        <footer> &copy; {date} All rights reserved. AkDA</footer>
    )
}

export default Footer
