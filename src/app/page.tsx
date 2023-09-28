"use client"
import Article from "@/components/Article"
import { useEffect, useState } from "react"

export const defaultArticles: TArticle[] = [
  {
    id: 1,
    title: "Judul Berita 1",
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas tempora saepe unde aperiam assumenda ratione, debitis repellendus amet. Minima itaque totam officiis iure, nobis deleniti omnis voluptas nihil blanditiis.',
    createdAt: '16 Mei, 2023',
    category: "Daerah"
  },
  {
    id: 2,
    title: "Judul Berita 2",
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas tempora saepe unde aperiam assumenda ratione, debitis repellendus amet. Minima itaque totam officiis iure, nobis deleniti omnis voluptas nihil blanditiis.',
    createdAt: '16 Mei, 2023',
    category: "Daerah"
  },
  {
    id: 3,
    title: "Judul Berita 3",
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas tempora saepe unde aperiam assumenda ratione, debitis repellendus amet. Minima itaque totam officiis iure, nobis deleniti omnis voluptas nihil blanditiis.',
    createdAt: '16 Mei, 2023',
    category: "Daerah"
  },
  {
    id: 4,
    title: "Judul Berita 4",
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas tempora saepe unde aperiam assumenda ratione, debitis repellendus amet. Minima itaque totam officiis iure, nobis deleniti omnis voluptas nihil blanditiis.',
    createdAt: '16 Mei, 2023',
    category: "Daerah"
  }
]

export default function Home() {
  const [articles, setArticles] = useState(defaultArticles)

  useEffect(() => {
    // mengambil data dari local storage
    // jika data tidak ada maka set data localstorage tsb menjadi default articles

    const dataLocalStorage = localStorage.getItem("articles")
    if (!dataLocalStorage) {
      localStorage.setItem("articles", JSON.stringify(defaultArticles))
      return; 
    }

    setArticles(JSON.parse(dataLocalStorage || "[]"))

  }, [])

  return (
    <div className="p-4 flex flex-col gap-4">
      {articles.map((article) => (
        <Article article={article} key={article.id} />
      ))}
    </div>
  )
}
