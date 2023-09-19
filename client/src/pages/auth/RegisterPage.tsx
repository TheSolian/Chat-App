import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useAppDispatch } from '@/redux/hooks'
import { setUser } from '@/redux/slices/authSlice'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email adress' }),
  username: z.string().min(3).max(32),
  password: z.string().min(8).max(32),
})

const baseUrl = 'http://localhost:3000'

type UserResponse = {
  error: boolean
  user: User
}

export default function RegisterPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      username: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values)
    const res = await axios.post(`${baseUrl}/auth/register`, values)
    const data: UserResponse = res.data

    if (!data.error) {
      dispatch(setUser(data.user))
      navigate('/')
    }
  }

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Card className='w-1/3'>
        <CardHeader>
          <CardTitle className='text-3xl'>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='flex flex-col gap-4'
            >
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className='self-end'>Register</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <div>
            Already have an account?{' '}
            <Link
              to='/login'
              className='text-primary hover:border-b-2 border-primary'
            >
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
