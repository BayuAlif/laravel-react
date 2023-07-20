const isiNews = (news) => {
    return news.map((data, i) => {
        // maksud dari lg sama w-full itu kalau misalnya ukurannya bukan ukuran dekstop maka dia akan menyesuaikan lebarnya jadi gak ada kosong kanan kirinya
        return <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
            <figure>
                <img src="./img/gambar.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {data.title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{data.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-inline bg-black text-white">{data.category}</div>
                    <div className="badge badge-outline">{data.author}</div>
                </div>
            </div>
        </div>

        // (
        //     <>
        //     <div>{data.title}</div>
        //     <div>{data.description}</div>
        //     <div>{data.category}</div>
        //     <div>{data.author}</div>
        //     </>
        // )
    })
}

const noNews = () => {
    return (
        <div>saat ini belum ada berita yang tersedia</div>
    )
}

//! itu tidak bila tidak ada news

const CardNews = ({ news }) => {
   return !news ? noNews() : isiNews(news)
}

export default CardNews