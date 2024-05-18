"use client"
import React, { useState } from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


function BlogEditor({ blogBody, setBlogBody }) {

  const [blogContent, setBlogContent] = useState<string>(blogBody)

  const handleChange = (content: string): any => {
    setBlogBody(content)
  }

  return (
     <div className='w-full'>
      <ReactQuill
        value={blogBody}
        onChange={handleChange}
        placeholder="Write your blog content here..."
        modules={{
          toolbar: [
            [{ header: [1,2,3,4,5, false] }],
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ 'color': [] }, { 'background': [] }], 
            [{ direction: "rtl" }],
            [{ align: [] }],
            ["link", "image"],
            // ["clean"],
          ],
        }}
        className='h-[500px] pb-8'
      />
    </div>
  )
}

export default BlogEditor
