import { ChangeEvent, FormEvent, useState } from 'react'
import { Note } from './components/note'
import { Save } from 'lucide-react'
import { useNoteStore } from './store'

interface Note {
  id: string
  content: string
}

export function App() {
  const notes = useNoteStore((store) => store.notes)
  const addNote = useNoteStore((store) => store.addNote)

  const [content, setContent] = useState('')

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value)
  }

  function handleSaveNote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (content) {
      addNote(content)
      setContent('')
    }
  }

  return (
    <main className="w-full min-h-screen flex justify-center py-8 px-4 bg-slate-950">
      <section className="max-w-6xl flex-1 flex flex-col gap-4">
        <h1 className="font-sans font-normal text-2xl text-slate-400">
          Saving notes with Zustand 🐻
        </h1>
        <form onSubmit={handleSaveNote} className="flex gap-4 ">
          <input
            value={content}
            onChange={handleInputChange}
            type="text"
            placeholder="Type something..."
            className="w-full py-2 px-4 rounded-md outline-none ring-1 ring-slate-800 focus:ring-indigo-600 text-lg bg-slate-900 text-slate-300"
          />
          <button
            type="submit"
            className="sm:w-auto md:w-[220px] flex gap-2 items-center justify-center py-2 px-4 rounded-md text-lg ring-1 ring-slate-800 active:ring-indigo-600 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-indigo-400 transition-colors"
          >
            <Save size={18} />
            <span className="hidden md:block">Save note</span>
          </button>
        </form>

        <div className="h-px bg-slate-800" />

        <div className="w-full flex flex-col gap-4 text-slate-300">
          {notes.map((note) => (
            <Note key={note.id} id={note.id} content={note.content} />
          ))}
        </div>
      </section>
    </main>
  )
}
