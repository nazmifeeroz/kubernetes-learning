import React, { useState, useEffect } from 'react'

export default ({ postId }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:4001/posts/${postId}/comments`)
      const data = await res.json()

      setComments(data)
    }

    fetchData()
  }, [postId])

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>
  })

  console.log({ comments })
  return <ul>{renderedComments}</ul>
}
