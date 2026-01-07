import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  let [data, setData] = useState([])
  useEffect(() => {
    fetch(`https://bankingkhabar.com/wp-json/wp/v2/posts?categories=89`).then(a => a.json()).then(b => setData(b))
  }, [])
  return (
    <>
      <section className='py-5 banner '>
        <div className="container border border-dark border-3">
          {data.slice(1, 2).map((a) => (
            <article className='border-5 border-danger text-center my-3' key={a.id}>
              <Link to={`/details/${a.id}`} className="text-decoration-none text-dark">
              <h1>{a.title.rendered}</h1>
              <img className='w-100' src={a.featured_image_src} alt="" />
              </Link>
            </article>
          ))}
          <div className="row">
            {data.slice(1, 10).map((a) => (
              <div className="col-lg-4">
                <Link to={`/details/${a.id}`} className="text-decoration-none text-dark">
                <img className='w-100 thumb' src={a.featured_image_src} alt="" />
                <p className='py-2 fw-bold'>{a.title.rendered}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <img className='w-100' src="https://bankingkhabar.com/wp-content/uploads/2019/03/prabhumoney.gif" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='py-4 bg-for-mukhya mt-5'>
        <div className="container">
           <div className="d-flex mb-3">
              <div className="bg-danger text-white px-3 py-1 fw-bold fs-5">मुख्य</div>
            </div>
          <div className="row g-2 align-items-stretch">
           <div className="col-lg-4 flex-column">
            <div className='h-100 border p-2'>
              {data.slice(0, 1).map((a) => (
                <div key={a.id}>
                  
                  <img className='w-100' src={a.featured_image_src} alt="" />
                  <Link to={`/details/${a.id}`} className="text-decoration-none text-dark">
                  <h4>{a.title.rendered}</h4>
                  </Link>
                  <p className="small text-muted">{a.excerpt.rendered.replace(/<[^>]+>/g, '').slice(1,)}...</p>
                </div>
              ))}
              </div>
            </div>
            
            {/* Column 2: Sano News List (Text Left, Image Right) */}
            <div className="col-lg-4 d-flex flex-column">
              <div className='h-100 border p-2'>
              {data.slice(1, 7).map((a) => (
                <div key={a.id} className="d-flex align-items-center mb-3 pb-2 border-bottom">

                  {/* 1. Text Section (Flex grow le garda yesle thulo space lincha) */}
                  <div className='flex-grow-1 pe-2'>
                    <h6 className="fw-bold mb-0">
                      {a.title.rendered}
                    </h6>
                  </div>

                  {/* 2. Image Section (Flex shrink 0 le garda image thichidaina) */}
                  <div style={{ width: '100px', height: '70px' }} className="flex-shrink-0">
                    <img
                      src={a.featured_image_src}
                      className="w-100 h-100 object-fit-cover rounded"
                      alt=""
                    />
                  </div>

                </div>
              ))}
              </div>
            </div>
            <div className="col-lg-4 d-flex flex-column">
              <div className="h-100 border p-2 d-flex flex-column justify-content-between">
              <img className='w-80' src="https://bankingkhabar.com/wp-content/uploads/2025/09/sub.gif" alt="" />
              <img className='w-80' src="https://bankingkhabar.com/wp-content/uploads/2025/10/kamana.gif" alt="" />
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='mt-5'>
        <div className="conatainer">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <img className='w-100' src="https://bankingkhabar.com/wp-content/uploads/2025/08/Digital-Fraud-800X200-px-2.gif" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='tt'>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-4">
              {data.slice(2, 3).map((a) => (
                <div key={a.id}>
                  <img className='w-100 thumb' src={a.featured_image_src} alt="" />
                  <h5 className='mt-2'>{a.title.rendered}</h5>
                </div>
              ))}
            </div>
            <div className="col-lg-4"> {data.slice(0, 1).map((a) => (
              <div key={a.id}>
                <img className='w-100 thumb' src={a.featured_image_src} alt="" />
                <h5 className='mt-2'>{a.title.rendered}</h5>
              </div>
            ))}</div>
            <div className="col-lg-4"> {data.slice(3, 4).map((a) => (
              <div key={a.id}>
                <img className='w-100 thumb' src={a.featured_image_src} alt="" />
                <h5 className='mt-2'>{a.title.rendered}</h5>
              </div>
            ))}</div>
          </div>
        </div>
      </section>
      <section className='mt-5'>
        <div className="conatainer">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <img className='w-100' src="https://bankingkhabar.com/wp-content/uploads/2025/10/global.gif" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
