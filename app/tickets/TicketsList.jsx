import Link from 'next/link'
const getData = async () => {
    const response = await fetch("http://localhost:4000/tickets", {next: {
        revalidate: 30 //use 0 to opt out of cache
    }})
    return response.json()
}

const TicketsList = async () => {

    const tickets = await getData()
    return (
        <>
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