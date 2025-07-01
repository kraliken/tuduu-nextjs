'use client';

import { useFormStatus } from 'react-dom';
import { useActionState, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { createTodo, deleteTodo, updateTodo } from '@/lib/actions/todo.actions';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar } from './ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'
import { Textarea } from './ui/textarea';
import TodoCardAlertDialog from './TodoCardAlertDialog';

const TodoForm = ({ todo, onSuccess }) => {

  const isEdit = Boolean(todo)

  const router = useRouter()

  const [selectedDate, setSelectedDate] = useState(
    todo?.deadline ? new Date(todo.deadline) : new Date()
  );


  const updateAction = async (prevState, formData) => {
    return updateTodo(prevState, todo.id, formData)
  }

  const [data, action, isPending] = useActionState(isEdit ? updateAction : createTodo, {
    success: false,
    message: '',
    errors: {},
    data: todo || {}
  });

  useEffect(() => {
    if (data.success) {
      toast.success(data.message || (isEdit ? 'Todo updated successfully!' : 'Todo created successfully!'));

      router.refresh()
      onSuccess();
    }
  }, [data.success]);


  const SubmitButton = () => {

    return (
      <div className='mt-auto w-full flex gap-4'>
        <Button disabled={isPending} className='flex-1' variant='default' type="submit">
          {isPending ? (isEdit ? 'Updating...' : 'Adding...') : (isEdit ? 'Update Task' : 'Add Task')}
        </Button>

        {isEdit && (
          <TodoCardAlertDialog todo={todo} editIsPending={isPending} />
        )}

      </div>
    );
  };

  return (
    <form action={action} className="flex flex-col h-full gap-4 p-4">
      <div className='space-y-4'>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          type="text"
          required
          defaultValue={data?.data?.title || todo?.title || ''}
          className={data?.errors?.title ? 'border-red-400' : ''}
        />
      </div>
      {data && !data.success && data.errors?.title && (
        <div className='text-center text-destructive'>{data.errors.title}</div>
      )}
      <div className='space-y-4'>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          type="text"
          defaultValue={data?.data?.description || todo?.description || ''}
          className={data?.errors?.description ? 'border-red-400' : ''}
        />
      </div>
      {data && !data.success && data.errors?.description && (
        <div className='text-center text-destructive'>{data.errors.description}</div>
      )}
      <div className="space-y-4">
        <Label htmlFor="category">List</Label>
        <Select
          name="category"
          defaultValue={data?.data?.category || todo?.category || 'personal'}
        >
          <SelectTrigger className={data?.errors?.category ? 'border-red-400' : ''}>
            <SelectValue placeholder="Select a list" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="personal">Personal</SelectItem>
            <SelectItem value="work">Work</SelectItem>
            <SelectItem value="development">Development</SelectItem>
          </SelectContent>
        </Select>
        {data?.errors?.category && (
          <p className="text-sm text-destructive">{data.errors.category}</p>
        )}
      </div>
      <div className="space-y-4">
        <Label htmlFor="status">Status</Label>
        <Select
          name="status"
          defaultValue={data?.data?.status || todo?.status || 'backlog'}
        >
          <SelectTrigger className={data?.errors?.status ? 'border-red-400' : ''}>
            <SelectValue placeholder="Select a status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="backlog">Backlog</SelectItem>
            <SelectItem value="progress">In Progress</SelectItem>
            <SelectItem value="done">Done</SelectItem>
          </SelectContent>
        </Select>
        {data?.errors?.status && (
          <p className="text-sm text-destructive">{data.errors.status}</p>
        )}
      </div>

      <div className="space-y-4">
        <Label htmlFor="deadline">Due date</Label>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !selectedDate && "text-muted-foreground"
              )}
            >
              {selectedDate ? format(selectedDate, "yyyy.MM.dd") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        {/* hidden input a beküldéshez */}
        <input
          type="hidden"
          name="deadline"
          value={selectedDate ? format(selectedDate, 'yyyy-MM-dd') : ""}
        />
      </div>

      {data && !data.success && data?.message && (
        <p className="text-sm text-destructive">{data.message}</p>
      )}
      <SubmitButton />
    </form>
  )
}

export default TodoForm