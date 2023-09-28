"use client"
import Button from '@/components/Button'
import Input from '@/components/Input'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Post = () => {
  const router = useRouter()

  const [articleInput, setArticleInput] = useState<TArticle>({
    category: '',
    content: '',
    createdAt: '',
    id: 0,
    title: ''
  })

  function onSubmit(e: any) {
    e.preventDefault()
    const dataLocalStorage = localStorage.getItem("articles")
    const localArticles: TArticle[] = JSON.parse(dataLocalStorage || "[]")
    
    const article = articleInput
    article.id = localArticles.length + 1

    if (localArticles) {
      localStorage.setItem(
        "articles",
        JSON.stringify([...localArticles, article])
      )
      alert("Berhasil Memasukkan Data Baru")
      router.push("/")
    }


  }
  return (
    <form onSubmit={onSubmit} className='p-4 flex flex-col gap-2'>
      <Input
        placeHolder='Judul'
        onChange={(value) => {
          setArticleInput({ ...articleInput, title: value })
        }}
        value={articleInput.title}
      />
      <Input
        placeHolder='Kategori'
        onChange={(value) => {
          setArticleInput({ ...articleInput, category: value })
        }}
        value={articleInput.category}
      />

      <Input
        placeHolder='Konten'
        onChange={(value) => {
          setArticleInput({ ...articleInput, content: value })
        }}
        value={articleInput.content}
      />
      <Input
        placeHolder='Dibuat pada tanggal'
        onChange={(value) => {
          setArticleInput({ ...articleInput, createdAt: value })
        }}
        value={articleInput.createdAt}
      />
      <Button name='Simpan' />
    </form>
  )
}

export default Post