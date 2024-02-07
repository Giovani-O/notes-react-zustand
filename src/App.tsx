import { ChangeEvent, FormEvent, useState } from 'react'

export function App() {
  const [content, setContent] = useState('')

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value)
  }

  function handleSaveNote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(content)
    setContent('')
  }

  return (
    <main className="absolute w-full h-full flex justify-center py-8 bg-slate-950">
      <section className="max-w-6xl flex-1 flex flex-col gap-4">
        <h1 className="font-sans font-normal text-2xl text-slate-400">
          Saving notes with Zustand
        </h1>
        <form onSubmit={handleSaveNote} className="flex gap-4">
          <input
            value={content}
            onChange={handleInputChange}
            type="text"
            placeholder="Type something..."
            className="w-full py-2 px-4 rounded-md outline-none ring-1 ring-slate-800 focus:ring-indigo-600 text-lg bg-slate-900 text-slate-300"
          />
          <button
            type="submit"
            className="w-[200px] p-2 rounded-md text-lg ring-1 ring-slate-800 active:ring-indigo-600 focus:ring-indigo-600 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-indigo-400 transition-colors"
          >
            Save note
          </button>
        </form>
        <div className="text-slate-300">{/* Exibir notas aqui */}</div>
      </section>
    </main>
  )
}
