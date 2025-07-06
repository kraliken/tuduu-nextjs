"use client"

import { useActionState, useEffect } from "react";
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { uploadInvoice } from "@/lib/actions/todo.actions";
import { Button } from "./ui/button";
import { toast } from 'sonner';
import { useRouter } from 'next/navigation'


const FileUploadForm = () => {

    const router = useRouter()

    const [data, action, isPending] = useActionState(uploadInvoice, {
        success: false,
        message: '',
        errors: {},
        data: {}
    });

    useEffect(() => {
        // console.log(data);
        if (data.success) {
            toast.success(data.message);

            router.refresh()
        }
    }, [data.success]);

    const SubmitButton = () => {
        return (
            <div className='mt-auto w-full flex gap-4'>
                <Button disabled={true} className='flex-1' variant='default' type="submit">
                    {isPending ? 'Sending...' : 'Send'}
                </Button>
            </div>
        );
    };

    return (
        <form
            action={action}
            className="flex flex-col h-full gap-4 p-4"
        >
            <div className='space-y-4'>
                <Label htmlFor="email">E-mail</Label>
                <Input
                    id="email"
                    name="email"
                    type="text"
                    required
                    defaultValue={data?.data?.email || ''}
                    className={data?.errors?.email ? 'border-red-400' : ''}

                />
            </div>
            {data && !data.success && data.errors?.email && (
                <div className='text-center text-destructive'>{data.errors.email}</div>
            )}
            <div className='space-y-4'>
                <Label htmlFor="invoice">Invoice (pdf)</Label>
                <Input
                    id="invoice"
                    name="file"
                    type="file"
                    accept=".pdf"
                    required
                />
            </div>
            {data && !data.success && data.errors?.file && (
                <div className='text-center text-destructive'>{data.errors.file}</div>
            )}
            <SubmitButton />
        </form>
    )
}

export default FileUploadForm