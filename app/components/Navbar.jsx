import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
      
        <nav>
            <h2>Task Manager</h2>
            <Link href="/">Dashboard</Link>
            <Link href="/tickets">Tickets</Link>

        </nav>
    )
}

export default Navbar