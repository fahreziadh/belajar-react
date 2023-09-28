"use client"
import Article from "@/components/Article"
import { useEffect, useState } from "react"
import { defaultArticles } from "./defaultArticles"

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
