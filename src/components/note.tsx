import { Trash } from 'lucide-react'

interface NoteProps {
  id: string
  content: string
}

export function Note({ id, content }: NoteProps) {
  function handleDeleteNote() {
    console.log(id)
  }

  return (
    <article className="flex justify-between items-center w-full p-6 rounded-md bg-slate-900 text-slate-400">
      <p>{content}</p>
      <button
        type="button"
        className="p-2 hover:text-rose-600 transition-colors"
        onClick={handleDeleteNote}
      >
        <Trash size={18} />
      </button>
    </article>
  )
}
