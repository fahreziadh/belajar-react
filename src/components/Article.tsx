import Link from 'next/link'
import React from 'react'

interface Props {
    article: TArticle
}

const Article = ({ article }: Props) => {
    return (
        <div>
            <span className='text-xs p-2 bg-zinc-100 '>{article.category}</span>
            <Link href={`/detail/${article.id}`}><h1 className='text-lg font-semibold mt-2'>{article.title}</h1></Link>
            <p className='text-sm text-zinc-500'>{article.content}</p>
            <p className='text-sm mt-2'>{article.createdAt}</p>
        </div>
    )
}

export default Article