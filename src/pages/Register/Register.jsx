import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, checkIsAuth } from '../../redux/features/auth/authSlice'
import { toast } from 'react-toastify'
import styles from './Register.module.scss'

export const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { status } = useSelector((state) => state.auth)
  const isAuth = useSelector(checkIsAuth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (status) {
      toast(status)
    }
    if (isAuth) navigate('/')
  }, [status, isAuth, navigate])

  const handleSubmit = () => {
    try {
      if (username && password) {
        dispatch(registerUser({ username, password }))
        setPassword('')
        setUsername('')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
    >
      <h1>Регистрация</h1>
      <label>
        Username:
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
        />
      </label>

      <label>
        Password:
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
      </label>

      <div className={styles.divBtns}>

        <button
          type='submit'
          onClick={handleSubmit}
          className={styles.login}
        >
          Подтвердить
        </button>
        <Link
          to='/login'
          className={styles.link}
        >
          Уже зарегистрированы ?
        </Link>
      </div>
    </form>
  )
}