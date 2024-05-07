"use client"

import React, { useState } from 'react'
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { TbArrowUpRight } from 'react-icons/tb'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  firstName: z.string().min(1,{message: 'This field is required.'}).max(20),
  lastName: z.string().min(1,{message: 'This field is required.'}).max(20),
  company: z.string().min(2,{message: 'This field is required.'}).max(30),
  email: z.string().email(),
  message: z.string().min(2,{message: 'This field is required.'}),
})

export default function Contact() {
  const [enabled, setEnabled] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      message: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="container py-24 sm:py-28 xl:px-28">
      <div className="text-center">
        <h1 className="font-bold text-3xl tracking-tighter">Contact Sales</h1>
        <p className="text-muted-foreground text-lg font-semibold mt-2">Please feel free to ask anything</p>
      </div>
      <div className="mx-auto max-w-xl mt-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6'>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>   
            <div className='mt-4 flex flex-col gap-4'>
              <FormField 
              control={form.control}
              name="company"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Company" {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
              <FormField 
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email address" {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
              <FormField 
              control={form.control}
              name="message"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Type your message here..." {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              />
            </div>
            <Button className='inline-flex justify-center rounded-full px-20 gap-2 shadow-lg text-white
            hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 mt-10'>
              Book now <TbArrowUpRight/>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
