"use client"

import { Button } from './ui/button'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from './ui/alert-dialog'
import { useState, useTransition } from 'react'
import { deleteTodo } from '@/lib/actions/todo.actions'
import { toast } from "sonner"

const TodoCardAlertDialog = ({ todo, editIsPending }) => {

  const { id, title, description } = todo;

  const [isOpen, setIsOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleDeleteTodo = async () => {
    startTransition(async () => {
      try {
        const result = await deleteTodo(id)

        if (result.success) {
          toast?.success?.(result.message || 'Todo deleted successfully!')
          setIsOpen(false)
        } else {
          toast?.error?.(result.message || 'Failed to delete todo')
        }
      } catch (error) {
        console.error('Delete error:', error)
        toast?.error?.('An unexpected error occurred')
      }
    })
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          disabled={isPending || editIsPending}
          variant='destructive'
          className='flex-1'
        >
          {isPending ? 'Deleting...' : 'Delete Task'}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the todo
            <span className="font-semibold"> "{title}"</span>.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDeleteTodo}
            disabled={isPending}
            className="bg-red-400 text-white hover:bg-red-500"
          >
            {isPending ? 'Deleting...' : 'Delete'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default TodoCardAlertDialog