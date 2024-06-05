import React , { useState , useRef} from "react";


import Card from './Card';





function Foreground() {

const ref = useRef(null);

  const data = [

  {
    desc: "Docs Overview and Extensions",
    filesize: ".4mb",
    close: false, 
    tag:{ isopen: true, tagTitle: "Download Now", tagColor: "bg-green-600"},
  },

  {
    desc: "Get Data With Cloud Database and Notes ",
    filesize: ".9mb",
    close: true, 
    tag:{ isopen: true, tagTitle: "Upload", tagColor: ""},
  },

  {
    desc: "Cloud Translation Documentation ",
    filesize: "1.1mb",
    close: false, 
    tag:{ isopen: true, tagTitle: "Download Now", tagColor: "bg-blue-600"},
  },
]; 

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
      {data.map((e)=>(
        <Card data={e}  
        reference={ref}/>
      ))}
    </div>
  )
}

export default Foreground
