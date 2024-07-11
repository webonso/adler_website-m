import Image from 'next/image';
import Logo from '@/components/Logo';
import Footer from '@/components/Footer';
import BlogComp from '@/app/blog/BlogComp';
import HeaderBlog from '@/app/blog/HeaderBlog';
import { Suspense } from 'react';


 

const PostPage = () => {


  return (
    <main>
      <div className="absolute z-[300] w-full bg-white overflow-hidden flex flex-col items-start justify-start gap-[25px] leading-[normal] tracking-[normal]">
        <HeaderBlog />
        <Suspense fallback="Loading...">
          <BlogComp  />
        </Suspense>

        <Footer />
      </div>
    </main>
  );
};

export default PostPage;
