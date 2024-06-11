'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Trending5 from '../../public/Solutionasset/Trending5.png';
import { useRouter } from 'next/navigation';
import Cardskeleton from './Cardskeleton';
import Error from "../../public/Homeasset/Error.gif";
import NoData from "../../public/Homeasset/Nodata.gif"; 

const Trendingcomponets = () => {
    const router=useRouter()
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://awt-backend.onrender.com/api/awt/blogs/Get");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        const posts = data.data;
        // Select 4 random posts
        const shuffledPosts = posts.sort(() => 0.5 - Math.random());
        const selectedPosts = shuffledPosts.slice(0, 4);
        setTrendingPosts(selectedPosts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return  <div className="w-full mx-auto flex flex-col justify-start items-start gap-8">
    <h6 className="md:text-3xl lg:text-3xl text-lg tracking-wider font-bold px-12">
    Trending Now.
    </h6>
    <div className="w-full">
      <Cardskeleton/>
    </div>
  </div>
    
  }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

if (trendingPosts.length === 0) {
    return (
      <div className="w-11/12 mx-auto flex flex-col justify-start items-start gap-8">
        <h6 className="md:text-3xl lg:text-3xl text-lg tracking-wider font-bold">
        Trending Now.
        </h6>
        <div className="w-full flex justify-center items-center flex-col">
          <Image className="h-80 object-contain" src={NoData} alt="No data" />
        </div>
      </div>
    );
  }

if (error) {
    return (
      <div className="w-11/12 mx-auto flex flex-col justify-start items-start gap-8">
        <h6 className="md:text-3xl lg:text-3xl text-lg tracking-wider font-bold">
        Trending Now.
        </h6>
        <div className="w-full flex justify-center items-center flex-col">
          <Image src={Error} alt="error" />
        </div>
      </div>
    );
  }

  return (
    <div className='w-full flex flex-col justify-center items-start gap-8 mx-auto'>
      <div className='w-11/12 mx-auto'>
        <h6 className='md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider'>Trending Now.</h6>
      </div>
      <div className='grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-4 justify-items-center items-center w-11/12 mx-auto'>
        {trendingPosts.map((post, index) => (
          <div onClick={()=>router.push(`Blogdetails/${post._id}`)} key={post._id} className='overflow-hidden h-80 cursor-pointer'>
            <div className='flex justify-center items-center overflow-hidden relative'>
              <Image className='brightness-[0.3] object-fill h-80' src={post.imageUrl} alt="imagepost" width={300} height={200} />
              <Image className='absolute w-24 h-24' src={Trending5} alt="imagepost" />
              <h6 className='absolute bottom-2 text-lg text-white text-start px-2 font-semibold'>{post.title}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trendingcomponets;
