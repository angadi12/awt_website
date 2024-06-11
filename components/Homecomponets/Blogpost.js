'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Customanimationslide from './Customanimationslide';
import { Pagination } from "@nextui-org/react";
import Cardskeleton from '../Blogcomponents/Cardskeleton';
import Navlogo from "../../public/Solutionasset/Navlogo.png";
import Error from "../../public/Homeasset/Error.gif";
import NoData from "../../public/Homeasset/Nodata.gif"; 
import { useRouter } from 'next/navigation';

const Blogpost = () => {
  const router=useRouter()
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://awt-backend.onrender.com/api/awt/blogs/Get");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIdx = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIdx, startIdx + postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return  <div className='flex justify-start flex-col items-start gap-4 w-full py-12 mx-auto'>
    <div>
      <h6 className='text-3xl font-semibold capitalize text-black px-12'>recent <Customanimationslide text={<span>blog&nbsp;posts.</span>} width={180} style={'inline-block ml-2'} /></h6>
    </div>
       <div className='w-full mt-4'>
        <Cardskeleton  numOfSkeletons={3}/>
       </div>
    </div>
  }

  if (error) {
    return  <div className='flex justify-start flex-col items-start gap-4 w-full py-12 mx-auto'>
    <div>
      <h6 className='text-3xl font-semibold capitalize text-black px-12'>recent <Customanimationslide text={<span>blog&nbsp;posts.</span>} width={180} style={'inline-block ml-2'} /></h6>
    </div>
    <div className="w-full flex justify-center items-center flex-col mt-4">
          <Image src={Error} alt="error" />
        </div>
    </div>
  }

  if (posts.length === 0) {
    return  <div className='flex justify-start flex-col items-start gap-4 w-full py-12 mx-auto'>
    <div>
      <h6 className='text-3xl font-semibold capitalize text-black px-12'>recent <Customanimationslide text={<span>blog&nbsp;posts.</span>} width={180} style={'inline-block ml-2'} /></h6>
    </div>
    <div className="w-full flex justify-center items-center flex-col mt-4">
    <Image className="h-80 object-contain" src={NoData} alt="No data" />
    </div>
    </div>
  }




  return (
    <div className='flex justify-start flex-col items-start gap-4 w-11/12 py-12 mx-auto'>
      <div>
        <h6 className='text-3xl font-semibold capitalize text-black'>recent <Customanimationslide text={<span>blog&nbsp;posts.</span>} width={180} style={'inline-block ml-2'} /></h6>
      </div>
      <div className='grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-8 place-content-center justify-items-center w-full md:py-12 '>
        {currentPosts.map((post) => (
          <div onClick={()=>router.push(`Blogdetails/${post._id}`)} key={post._id} className='flex flex-col justify-start items-start gap-4'>
            <Image className='h-60 w-96' src={post.imageUrl} alt='blogimage' width={384} height={240} />
            <h6 className='text-xl font-semibold '>{post.title}</h6>
            <p className='text-sm font-medium text-justify text-gray-700'>{post.description} <span className='text-sm font-bold'>Read More</span></p>
            <div className="flex justify-start items-center gap-4 py-4">
                <Image
                  className="w-14 h-14 rounded-full object-contain "
                  src={Navlogo}
                  alt="user image"
                  width={56}
                  height={56}
                />
                <span className="text-sm font-bold">
                  Team Angadi -
                  <span className="text-sm font-medium ml-2 text-gray-700">
                    {new Date(post.publicationDate).toLocaleDateString()}
                  </span>
                </span>
              </div>
          </div>
        ))}
      </div>
      <div className='w-full flex justify-center items-center py-4'>
        <Pagination total={totalPages} initialPage={currentPage} onChange={handlePageChange}  classNames={{
        wrapper: "gap-0 overflow-visible h-10 p-1 rounded border border-divider",
        item: "w-8 h-8 text-small rounded-none bg-transparent",
        cursor:
          " bg-gradient-to-b shadow-lg from-[#FF7143] to-[#FF7143]",
      }}/>
      </div>
    </div>
  );
};

export default Blogpost;
