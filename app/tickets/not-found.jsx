import Link from 'next/link'

function NotFound() {
  return (
    <main>
    <h2>There was a problem</h2>
    <p>We could not find the ticket you were looking for</p>
    <p>Go back to the <Link href={'/tickets'}>Tickets</Link></p>
</main>
  )
}

export default NotFound