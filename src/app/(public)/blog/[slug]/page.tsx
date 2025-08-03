import { blogPosts } from "@/data/blogPost";

const BlogContentPage = ({ params }: { params: { slug: string } }) => {
  const blog = blogPosts.find(({ id }) => id === params.slug);

  return (
    <article className='prose prose-pink dark:prose-invert max-w-none mx-auto px-4 py-8'>
      <div
        // className={styles.productDescription}
        dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
      />
      <div className='mt-8 pt-4 border-t border-gray-200'>
        <div className='flex items-center gap-3 text-sm text-gray-600'>
          <div className='flex items-center gap-2'>
            <span className='font-medium'>Category:</span>
            <span className='bg-pink-100 text-pink-600 px-3 py-1 rounded-full'>
              {blog?.category}
            </span>
          </div>
          <span className='text-gray-300'>•</span>
          <time className='text-gray-600'>
            {new Date(blog?.createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </time>
        </div>
      </div>
    </article>
  );
};

export default BlogContentPage;
