import { Trash } from 'lucide-react'
import { useNoteStore } from '../store'

interface NoteProps {
  id: string
  content: string
}

export function Note({ id, content }: NoteProps) {
  const deleteNote = useNoteStore((store) => store.deleteNote)

  function handleDeleteNote() {
    deleteNote(id)
  }

  return (
    <article className="flex justify-between items-center w-full p-6 rounded-md bg-slate-900 text-slate-400">
      <p>{content}</p>
      <button
        type="button"
        className="p-2 rounded-full hover:bg-slate-800 hover:text-rose-600 transition-colors "
        onClick={handleDeleteNote}
      >
        <Trash size={18} />
      </button>
    </article>
  )
}
