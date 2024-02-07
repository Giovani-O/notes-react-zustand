import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'

type Note = {
  id: string
  content: string
}

type Notes = {
  notes: Note[]
  addNote: (content: string) => void
  deleteNote: (id: string) => void
}

export const useNoteStore = create(
  persist<Notes>(
    (set) => ({
      notes: [] as Note[],

      addNote: (contentText) => {
        const newNote: Note = { id: uuidv4(), content: contentText }
        set((state) => ({ notes: [...state.notes, newNote] as Note[] }))
      },

      deleteNote: (id) => {
        set((state) => ({
          notes: [...state.notes.filter((note) => note.id != id)] as Note[],
        }))
      },
    }),
    {
      name: '@zustand-notes:store-state-1.0.0',
    },
  ),
)
