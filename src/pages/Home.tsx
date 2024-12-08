import { Link } from 'react-router'

function Home() {
  return (
    <div className="flex-center flex-col size-full gap-4">
      <h1 className="text-3xl font-bold">Home</h1>
      <nav className="flex gap-4">
        <Link to="/cards" className="text-blue-500 hover:underline">
          View Cards
        </Link>
      </nav>
    </div>
  )
}

export default Home 