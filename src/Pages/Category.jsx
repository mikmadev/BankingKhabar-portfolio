import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Category() {
  let{cid}=useParams()
  let [data, setData] = useState([])
      useEffect(() => {
          fetch(`https://bankingkhabar.com/wp-json/wp/v2/posts?categories=${cid}`).then(a => a.json()).then(b => setData(b))
      }, [cid])
  return (
   <>
   <div className="container py-2">
    <h2></h2>
    <div className="row">
      {data.map((a)=>(
        <div className="col-lg-4">
          <Link to={`/details/${a.id}`} className="text-decoration-none text-dark">
          <img className='w-100 thumb' src={a.featured_image_src} alt="" />
          <p className='py-2'>{a.title.rendered}</p>
          </Link>
        </div>
      ))}
    </div>
   </div>
   </>
  )
}

export default Category
