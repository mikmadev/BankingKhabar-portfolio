import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Details() {
    let { id } = useParams()

    let [data, setData] = useState([])
    let [related, setRelated] = useState([]);

    useEffect(() => {

        fetch(`https://bankingkhabar.com/wp-json/wp/v2/posts/${id}`).then(a => a.json()).then(b => setData(b))
        fetch(`https://bankingkhabar.com/wp-json/wp/v2/posts?per_page=5`).then(a => a.json()).then(b => setRelated(b))
    }, [id])
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 py-3">
                            <img className='w-100' src="https://bankingkhabar.com/wp-content/uploads/2025/12/GIF_FINAL.gif" alt="" />
                            <h1 className='fw-bold mt-4'>{data?.title?.rendered}</h1>
                            <img className='w-100' src={data?.featured_image_src} alt="" />
                            <div className='news-body-content mt-2' dangerouslySetInnerHTML={{ __html: data?.content?.rendered }} />
                            <div className=" border p-2 mt-5">
                                {related.slice(1, 2).map((a) => (
                                    <div className='container'>
                                        <div className='d-flex flex-column flex-md-row gap-3'>
                                            <Link to={`/details/${a.id}`} className="text-decoration-none text-dark">
                                                <h4>{a.title.rendered}</h4>
                                                <img className='w-50 ' src={a.featured_image_src} alt="" />
                                                <p>{a.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0,)}...</p>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3  py-3">
                            <div className="d-flex mb-3">
                                <div className="bg-danger text-white px-3 py-1 fw-bold fs-5">Related News</div>
                            </div>
                            <div className="row">
                                {related.slice(0, 4).map((a) => (
                                    <div key={a.id}>

                                        <Link to={`/details/${a.id}`} className="text-decoration-none text-dark">
                                            <img className='w-100' src={a.featured_image_src} alt="" />
                                            <p className='fw-bold py-2'>{a.title.rendered}..</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <iframe
                                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbankingkhabar.news&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                                    width="100%"
                                    height="500"
                                    style={{ border: 'none', overflow: 'hidden' }}
                                    scrolling="no"
                                    frameBorder="0" // 
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Details


