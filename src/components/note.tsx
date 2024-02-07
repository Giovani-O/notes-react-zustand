import { Trash } from 'lucide-react'

interface NoteProps {
  content: string
}

export function Note({ content }: NoteProps) {
  return (
    <article className="flex justify-between w-full p-6 rounded-md bg-slate-900 text-slate-400">
      <p>{content}</p>
      <button
        type="button"
        className="p-2 hover:text-rose-600 transition-colors"
      >
        <Trash size={18} />
      </button>
    </article>
  )
}
