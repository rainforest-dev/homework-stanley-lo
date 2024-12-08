import { Link } from 'react-router'

function Cards() {
  const cards = [1, 2, 3, 4, 5, 6]
  
  return (
    <div className="flex-col-center gap-4 p-4">
      <h1 className="text-3xl font-bold">Cards List</h1>
      <div className="grid grid-cols-3 gap-4">
        {cards.map((id) => (
          <Link 
            key={id}
            to={`/cards/${id}`}
            className="p-4 border rounded hover:shadow-lg transition-shadow"
          >
            <div className="flex-col-center gap-2">
              <div className="text-xl">Card {id}</div>
              <p className="text-gray-500">Click to view details</p>
            </div>
          </Link>
        ))}
      </div>
      <Link to="/" className="mt-4 text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  )
}

export default Cards 