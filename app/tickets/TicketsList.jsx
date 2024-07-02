import Link from 'next/link'
const getData = async () => {
    const response = await fetch("http://localhost:4000/tickets", 
        //{cache: 'no-store'}, 
        {next: {revalidate: 30 }}
    )//use 0 to opt out of cache //cache function is only present in fetch api...if you use axios, it wont work
    return response.json()
}

const TicketsList = async () => {

    const tickets = await getData()
    return (
        <>
            <p>{new Date().toUTCString()}</p>
            {tickets.map((ticket) => (
                <div key={ticket.id} className="card my-5">
                    <Link href={`/tickets/${ticket.id}`}>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)}...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority} priority
                        </div>
                    </Link>
                </div>
            ))}
            {tickets.length === 0 && (
                <p className="text-center">There are no open tickets, yay!</p>
            )}
        </>
    )
}

export default TicketsList