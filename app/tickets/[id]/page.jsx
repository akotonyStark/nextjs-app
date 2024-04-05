import React from 'react'

const getData = async (id) => {
    const response = await fetch(`http://localhost:4000/tickets/${id}`, {next: {
        revalidate: 30 //use 0 to opt out of cache
    }})
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