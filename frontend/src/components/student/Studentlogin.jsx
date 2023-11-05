import * as z from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"

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
import { AxiosClient } from "../../api/axios"

 
const formSchema = z.object({
  email: z.string().email().min(5),
  password: z.string().min(8)
})



export default function Studentlogin(){

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "simo@gmail.com",
      password: "12345678",
    },
  })
 
  // 2. Define a submit handler.
  const  onSubmit= async values=>{
    const data = await AxiosClient.post('/login' , values)
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input  type={'email'} placeholder="E-mail"{...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Passwod</FormLabel>
              <FormControl>
                <Input type={'password'} placeholder="password"{...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
