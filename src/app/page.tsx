"use client"
import { useEffect, useState } from "react"
import "./globals.css"

export default function Home() {
  const [alat, setAlat] = useState({
    lampu: false,
    kulkas: false
  })

  const [wattTotal, setWattTotal] = useState(0)

  useEffect(() => {
    const wattLampu = alat.lampu ? 100 : 0
    const wattKulkas = alat.kulkas ? 350 : 0
    setWattTotal(wattLampu + wattKulkas)

  }, [alat])

  function onChangeAlat(alat: "lampu" | "kulkas") {
    switch (alat) {
      case "lampu":
        setAlat((prev) => ({ ...prev, lampu: !prev.lampu }))
        break;
      case "kulkas":
        setAlat((prev) => ({ ...prev, kulkas: !prev.kulkas }))
        break;
    }
  }

  return (
    <div>
      <h1>Total Watt = {wattTotal}</h1>
      <button
        onClick={() => onChangeAlat("lampu")}
        className="bg-black text-white p-2">
        {!alat.lampu ? "Lampu: Off" : "Lampu: On"}
      </button>
      <button onClick={() => onChangeAlat("kulkas")} className="bg-black text-white p-2 ml-4">
        {!alat.kulkas ? "Kulkas: Off" : "Kulkas: On"}
      </button>
    </div>
  )
}
