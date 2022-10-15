import React, { useState, useEffect } from 'react'
import { slice } from 'lodash'
import jsonData from "./data.json";

function Posts() {
  const [post, setPost] = useState([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(3)
  const initialPosts = slice(post, 0, index)
  const getData = () => {
    fetch('http://localhost:3000/hiking/data.json')
      .then((res) => res.json())
      .then((json) => setPost(json))
      .catch((e) => console.log(e))
  }
  const loadMore = () => {
    setIndex(index + 3)
    console.log(index)
    if (index >= post.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="gallery">
      {initialPosts.map((item) => {
        return (
          <div
            className="card"
            key={item.id}
          >
            <div className="card-image"><img src={item.image} alt="" /></div>
            <div className="card-body">{item.title}</div>
            <div className="card-para">{item.desc}</div>
          </div>
        )
      })}
      <div className="load-more">
        {isCompleted ? (
          <button
            onClick={loadMore}
            type="button"
            className="btn-loadmore disabled"
          >
            All loaded
          </button>
        ) : (
          <button onClick={loadMore} type="button" className="btn-loadmore">
            Show More
          </button>
        )}
      </div>
    </div>
  )
}
export default Posts