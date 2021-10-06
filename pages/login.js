import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Login () {
  const [user, setUser] = useState(0)
  const router = useRouter()

  useEffect(() => {
    user && router.replace('/server-side-rendering')
  }, [user])

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  })
  const formOptions = { resolver: yupResolver(validationSchema) }

  // get functions to build form with useForm() hook
  const { register, handleSubmit, setError, formState } = useForm(formOptions)
  const { errors } = formState

  function onSubmit ({ username, password }) {
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then((user) => {
      setUser(1)

      // get return url from query parameters or default to '/'
      // const returnUrl = router.query.returnUrl || '/';
      // router.push(returnUrl);
      // router.replace("/home")
    }).catch(error => {
      setError('apiError', { message: error })
    })
  }

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Login</title>
          <meta name="description" content="Login" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <>
            <h2 className={styles.title}>
                LOGIN
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input name="username" type="text" placeholder="username" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.username?.message}</div>
                </div>
                <div className="form-group">
                    <input name="password" type="password" placeholder="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
                <button disabled={formState.isSubmitting}>
                  Login
                </button>
            </form>
            {errors.apiError &&
                <div className="alert alert-danger mt-3 mb-0">{errors.apiError?.message}</div>
            }
          </>
        </main>
      </div>
      <style jsx>
          {`
              input {
                  outline: 0;
                  background: #f2f2f2;
                  width: 100%;
                  border: 0;
                  margin: 0 0 15px;
                  padding: 15px;
                  box-sizing: border-box;
                  font-size: 14px;
              }
              button {
                color: white;
                font-weight: bold;
                outline: 0;
                background: #0d6efd;
                width: 100%;
                border: 0;
                margin: 0 0 15px;
                padding: 15px;
                box-sizing: border-box;
                font-size: 14px;
                cursor: pointer;
              }
              button:hover {
                background: #1050ad;
              }
          `}
      </style>
    </>
  )
}
