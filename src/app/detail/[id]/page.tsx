"use client"
import { defaultArticles } from '@/app/defaultArticles'
import Article from '@/components/Article'
import React from 'react'

const Page = ({ params }: any) => {
    const { id } = params
    const detailArticle = defaultArticles.find((article) => article.id === Number(id))
    
    if (!detailArticle) {
        return <div>Tidak menemukan artikel dengan id {id}</div>
    }

    return (
        <div className='p-4'>
            <Article article={detailArticle} />
        </div>
    )
}

export default Page