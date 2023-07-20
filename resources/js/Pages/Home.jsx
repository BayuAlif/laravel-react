import React from 'react';
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/home/navbar';
import CardNews from '@/Components/home/cardNews';
import Paginator from '@/Components/home/paginator';

export default function Home(props) {
    return (
        <div className='min-h-screen bg-slate-50'>
            {/* cara merubah title web */}
            {/* <Head title='Homepage' /> */}

            {/* cara memanggil title web dan desc dari console log sebelumnya */}
            <Head title={props.title} />
            <Navbar />
            {/* <h1>{props.description}</h1> */}
            <div>
                {/* {props.news ? props.news.map((data, i)=> {
                return(
                    <div key={i} className='p-4 m-2 bg-slate-200 text-black shadow-md rounded-md'>
                        <p className='text-2xl'>{data.title}</p>
                        <p>{data.description}</p>
                        <p className='text-small'>{data.category}</p>
                        <p className='text-small'>{data.author}</p>
                    </div>
                )
            }) : <p>Saat ini belum ada berita terbaru</p> } */}

                {/* membuat bagian cardnya dengan tailwind daisy */}
                {/* maksud dari lg:flex dll itu kalau ukurannya diatas lg maka ukurannya akan flex dll, ini untuk dekstop */}
                <div className="flex justify-center flex-col lg:flex-wrap lg:flex-row lg:items-stretch items-center gap-4 p-4">
                <CardNews news={props.news.data} />
                </div>

                <div className='flex justify-center items-center'>
                    <Paginator meta={props.news.meta}/>
                </div>

            </div>
        </div>
    )
}