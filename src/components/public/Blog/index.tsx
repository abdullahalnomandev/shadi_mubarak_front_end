"use client";

import { blogPosts } from "@/data/blogPost";
// import image1 from "@/assets/boy-create-1.jpg"; // Local image
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <section className='bg-white py-20 px-4 sm:px-8 lg:px-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>
            Biyer Thikana Blog
          </h1>
          <p className='text-gray-600 max-w-2xl mx-auto text-lg'>
            Read insightful articles on Islamic marriage, biodata tips, and more
            — built for the values of our community.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className='group'>
              <div className='bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300'>
                <div className='w-full h-52 relative'>
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
                <div className='p-5'>
                  <span className='text-sm text-pink-600 font-medium uppercase'>
                    {post.category}
                  </span>
                  <h3 className='text-xl font-semibold text-gray-800 my-2 group-hover:text-pink-600 transition-colors'>
                    {post.title}
                  </h3>
                  <p className='text-gray-600 text-sm mb-4'>{post.excerpt}</p>
                  <div className='flex items-center justify-between text-sm text-gray-500'>
                    <div className='flex items-center gap-2'>
                      {post.author.avatarUrl && (
                        <Image
                          src={post.author.avatarUrl}
                          alt={post.author.name}
                          width={28}
                          height={28}
                          className='rounded-full object-cover'
                        />
                      )}
                      <span>{post.author.name}</span>
                    </div>
                    <span>
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
