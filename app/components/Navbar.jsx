import React from 'react'
import Link from 'next/link'
import Image from "next/image";

const Navbar = () => {
    return (
      
        <nav>
            <Image src={'../../next.svg'} alt='logo' width={80} height={80} placeholder='blur' blurDataURL='https://nextjs.org/'/>
            <h2>Task Manager</h2>
            <Link href="/">Dashboard</Link>
            <Link href="/tickets">Tickets</Link>

        </nav>
    )
}

export default Navbar