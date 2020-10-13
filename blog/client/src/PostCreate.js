import React, { useState } from 'react'

export default () => {
  const [title, setTitle] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:4000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
      }),
    })

    setTitle('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
