import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import { useFormState } from "react-dom";
import { addBlog } from '@/libs/actions';
import ImageUpload from './upload';

function BlogModal({userId}) {

  const [state, formAction] = useFormState(addBlog, undefined);
  const router = useRouter();
  return (
    <>
      <div className="fixed inset-0 bg-black text-black bg-opacity-50 backdrop-blur-sm overflow-y-auto h-full z-[9999999999] w-full flex items-center justify-center">
        <div className="p-8 border max-w-[600px] w-[40rem] h-[45rem] shadow-lg rounded-md bg-white">
          <div className="text-center relative gap-10 space-y-6">
            <Link
              className="py-6 text-[30px] space-y-6 underline"
              href={'/blog'}
            >
              Go to BlogPage
            </Link>
            <div className="absolute top-6 right-6 flex justify-center mt-4 ring-black">
              {/* Using useRouter to dismiss modal*/}
              <button
                onClick={router.back}
                className="px-4 py-2 text-red-500 text-base font-medium rounded-full bg-slate-100 shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Close
              </button>
            </div>{' '}
            <div className="mt-2 px-7 py-3">
              <p className="text-lg text-gray-500">Create Blog</p>
            </div>
            <input type="hidden" name="userId" value={userId} />
            <div className="relative flex flex-col items-center justify-center border-gray gap-5 m-auto">
           <ImageUpload name={"file"}/>
            </div>
            <form className="gap-8 space-y-8 mx-auto">
              <div className="self-stretch flex-1 rounded-3xs bg-white box-border flex flex-row items-center justify-center pt-0 px-[48.5px] gap-[16.5px] max-w-full z-[2] border-[2px] border-solid border-gainsboro-100">
                <input
                  className="border-none outline-none bg-[transparent] h-11 flex flex-col items-center justify-center w-full px-0 pb-0 box-border font-average text-5xl text-gray-100"
                  placeholder="Content Title"
                  type="text"
                  name='title'
                />
              </div>

              <div className="flex flex-col items-center justify-center">
                <textarea
                  className="bg-white h-[265px] w-auto outline-none self-stretch rounded-3xs box-border flex flex-row items-start justify-start py-[15px] px-[35px] font-average text-5xl text-gray-100 z-[2] border-[2px] border-solid border-gainsboro-100"
                  placeholder="Write your stuff" name="description"
                  rows={13}
                  cols={29}
                  id="content"
                  required
                />
              </div>
              <button type="submit">Submit</button>
              {state?.error}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogModal;








//  <div className="blog m-0 py-0 px-[20%]">
//       <form onSubmit={handleSubmit}>
//          <h3>Create Blog Post</h3>
//          <div className="form-group flex flex-col">
//           <label>Title</label>
//           <input type="text" name="title" value={postTitle} onChange={event => setPostTitle(event.target.value)}/>
//          </div>
//          <div className="form-group flex flex-col">
//           <label>Content</label>
//           <textarea className='py-[10px] px-1 mt-2 mb-4' value={postContent} onChange={event => setPostContent(event.target.value)} rows="10"></textarea>
//          </div>
//          <div className="form-group flex flex-col">
//           <label>Author</label>
//           <input className='py-3 px-[4px] mt-2 mb-4' type="text" name="title" value={postAuthor} onChange={event => setPostAuthor(event.target.value)} />
//          </div>
//          <div className="form-group flex flex-col">
//           <label>Date Posted</label>
//           <ReactDatePicker
//               selected={postDate}
//               onChange={date => setPostDate(date)} minDate={new Date()}/>
//          </div>
//          <button type="submit" className=" py-3 px-5  bg-[#345feb]  border-none text-white text-lg w-full cursor-pointer">Post </button>
//       </form>
//      </div>
