import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div className='m-2 p-4 bg-zinc-100 container inline-flex gap-2 items-center'>
        <Link href={"/"}>Home</Link>
        <Link href={"/post"}>Create</Link>
    </div>
  )
}

export default Navigation