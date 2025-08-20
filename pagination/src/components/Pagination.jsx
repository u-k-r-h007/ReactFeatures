import React, { useState } from 'react'

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1) // 1-based index
  const itemsPerPage = 5

  const list = Array.from({ length: 50 }, (_, i) => i + 1)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = list.slice(startIndex, endIndex)

  const totalPages = Math.ceil(list.length / itemsPerPage)

  return (
    <div>
      <div>
        {currentItems.map(item => (
          <div key={item}>{item}</div>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              fontWeight: currentPage === i + 1 ? 'bold' : 'normal'
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination
