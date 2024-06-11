"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button, Divider, Pagination } from "@nextui-org/react";
import Error from "../../public/Homeasset/Error.gif";
import NoData from "../../public/Homeasset/NoData.gif"; // Assuming you have a no data image
import Navlogo from "../../public/Solutionasset/Navlogo.png";
import { useRouter } from "next/navigation";

const Ourblogs = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4; // Number of posts per page
  const postsSectionRef = useRef(null); // Ref for the blog posts section

  useEffect(() => {
    const fetchBlogs = async () => {
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

    fetchBlogs();
  }, []);

  useEffect(() => {
    // Scroll to the top of the posts section when the page changes
    if (postsSectionRef.current) {
      postsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  if (loading) {
    return (
      <div className="w-11/12 mx-auto flex flex-col justify-start items-start gap-8">
        <h6 className="md:text-3xl lg:text-3xl text-lg tracking-wider font-bold">
          Our Blogs.
        </h6>
        <div className="w-full flex justify-center items-center flex-col">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-11/12 mx-auto flex flex-col justify-start items-start gap-8">
        <h6 className="md:text-3xl lg:text-3xl text-lg tracking-wider font-bold">
          Our Blogs.
        </h6>
        <div className="w-full flex justify-center items-center flex-col">
          <Image src={Error} alt="error" />
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-11/12 mx-auto flex flex-col justify-start items-start gap-8">
        <h6 className="md:text-3xl lg:text-3xl text-lg tracking-wider font-bold">
          Our Blogs.
        </h6>
        <div className="w-full flex justify-center items-center flex-col">
          <Image className="h-80 object-contain" src={NoData} alt="No data" />
          No blogs available
        </div>
      </div>
    );
  }

  return (
    <section className="w-full flex flex-col justify-center items-center md:py-12 lg:py-12 mx-auto ">
      <div className="w-11/12 mx-auto py-12" ref={postsSectionRef}>
        <h6 className="md:text-3xl lg:text-3xl text-2xl font-bold tracking-wider capitalize">
          our Blogs.
        </h6>
      </div>
      <div className="w-11/12 mx-auto flex justify-between gap-8 items-start ">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-8 justify-items-center md:w-2/3 lg:w-2/3 ">
          {currentPosts.map((post) => (
            <div
              key={post._id}
              onClick={() => router.push(`Blogdetails/${post._id}`)}
              className="flex flex-col justify-start items-start gap-4 cursor-pointer"
            >
              <Image
                className="object-fill rounded-lg h-60"
                src={post.imageUrl}
                alt="blog image"
                width={500}
                height={300}
              />
              <h6 className="text-xl font-semibold ">{post.title}</h6>
              <p className="text-sm font-medium text-justify text-gray-700">
                {post.description}{" "}
                <span
                  onClick={() => router.push(`Blogdetails/${post._id}`)}
                  className="text-sm font-bold cursor-pointer"
                >
                  Read More
                </span>
              </p>
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
        <div className="md:flex lg:flex flex-col justify-start items-start mx-auto px-4 gap-8 hidden ">
          <h6 className="text-xl font-bold ">Popular this week!</h6>
          <div>
            {posts.slice(0, 7).map((post, index) => (
              <div
                onClick={() => router.push(`Blogdetails/${post._id}`)}
                key={index}
                className="flex justify-start items-start gap-4 cursor-pointer "
              >
                <div className="text-gray-500 text-3xl font-extrabold">
                  {index + 1}
                </div>
                <div className="flex flex-col justify-start items-start gap-4">
                  <h6 className="text-lg font-bold">{post.title}</h6>
                  <span className="text-sm font-medium uppercase">
                    Team Angadi
                    <span className="text-gray-400">
                      - {new Date(post.publicationDate).toLocaleDateString()}
                    </span>
                  </span>
                  <Divider orientation="horizontal" className="w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Pagination
          total={Math.ceil(posts.length / postsPerPage)}
          color=""
          page={currentPage}
          onChange={setCurrentPage}
          classNames={{
        wrapper: "gap-0 overflow-visible h-10 p-1 rounded border border-divider",
        item: "w-8 h-8 text-small rounded-none bg-transparent",
        cursor:
          " bg-gradient-to-b shadow-lg from-[#FF7143] to-[#FF7143]",
      }}
        />
      </div>
    </section>
  );
};

export default Ourblogs;
