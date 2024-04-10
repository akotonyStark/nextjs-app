import {notFound} from 'next/navigation'
import React from 'react'

//what to do when a page hasnt been pre-rendered ahead of time
export const dynamicParams = true

//cache static data for the pages
export const generateStaticParams = async() => {
    const response = await fetch(`http://localhost:4000/tickets`)
    const tickets = await response.json()

    return tickets.map((ticket) => {
        return {id: ticket.id}
    })
} 

const getData = async (id) => {
    const response = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 30 //use 0 to opt out of cache
         }
    })

    if(!response.ok){
        notFound()
    }
    return response.json()
}


const TicketDetails = async({params}) => {

 const ticket = await getData(params.id)
  return (
    <div>
        <nav>
            <h2>Ticket Details</h2>
        </nav>
        <div className='card'>
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
        </div>
    </div>
  )
}

export default TicketDetails