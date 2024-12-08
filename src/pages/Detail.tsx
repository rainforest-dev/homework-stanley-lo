import { Link, useParams } from 'react-router'

function Detail() {
  const { id } = useParams()
  
  return (
    <div className="flex-col-center gap-4 p-4">
      <h1 className="text-3xl font-bold">Card Details</h1>
      <div className="p-6 border rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Details for Card {id}</h2>
        <p className="text-gray-600">This is the detailed description for Card {id}...</p>
      </div>
      <div className="flex gap-4 mt-4">
        <Link to="/cards" className="text-blue-500 hover:underline">
          Back to List
        </Link>
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default Detail 