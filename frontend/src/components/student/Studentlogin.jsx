import * as z from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {useNavigate} from "react-router-dom"
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
  const navigate = useNavigate()
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "simoboolz@gmail.com",
      password: "password",
    },
  })
 
  // 2. Define a submit handler.
  const  onSubmit = async (values)=>{
    
    await AxiosClient.get('/sanctum/csrf-cookie');
    const data = await AxiosClient.post('/login',values)
    if(data.status === 204){
      navigate('/student/dashboard')
    }
    else{
      form.setError("")
    }

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
