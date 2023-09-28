"use client"
import { useEffect, useState } from "react"
import "./globals.css"

export default function Home() {
  const [listName, setListName] = useState(['Anton'])
  const [inputName, setInputName] = useState('')

  function addName() {
    setListName((prev) => ([...prev, inputName]))
    setInputName("")
  }

  function deleteName(name: string) {
    setListName((prev) => prev.filter((value) => value !== name))
  }

  return (
    <div className="p-4">
      <input
        type="text"
        name="name"
        onChange={(e) => setInputName(e.target.value)}
        value={inputName}
        className="border"
        placeholder="Tambahkan Nama" />
      <button onClick={addName} className="bg-black text-white px-2 ml-2">+</button>
      <div className="mt-4">
        <p className="text-xs">List Nama : {listName.length}</p>
        {listName.map((name) => <div>
          - {name} <button onClick={() => deleteName(name)} className="bg-red-500 text-white text-xs px-1">x</button>
        </div>)}
      </div>
    </div>
  )
}
