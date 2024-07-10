"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from "@/components/ui/select"
import { servicesTitle } from "@/model/services"

const formSchema = z.object({
  firstname: z.string().min(3).max(25),
  lastname: z.string().min(3).max(25),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string({ required_error: "Service type is required to proceed" }),
  message: z.string({ required_error: "Message is required" }),
})

function FormContact() {
  // FORM DEFINE
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    }
  })

  // SUBMIT HANDLER
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
      // className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* firstname */}
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Firstname"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* lastname */}
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Lastname"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Phone number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col mt-6 gap-6">
          {/* services select */}
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange} defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className="w-full"
                    >
                      <SelectValue placeholder="What type of service can i help with" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      {
                        servicesTitle.map((item, index) => {
                          return (
                            <SelectItem key={index} value={item}>{item}</SelectItem>
                          )
                        })
                      }
                    </SelectGroup>

                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          >

          </FormField>

          {/* description */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Describe how can i help you"
                    className="resize-none h-[20vh]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>



        <Button type="submit" className="mt-4">Send Message</Button>
      </form>
    </Form>
  )
}

export default FormContact