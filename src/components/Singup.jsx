import React, { useReducer, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { initialState, SingnupReducer } from '../reducer'
import './Singup.css'

const Signup = () => {
	const navigate = useNavigate()
	const [login, dispacthLogin] = useReducer(SingnupReducer, initialState)

	const [disabled, setDisabled] = useState(false)

	const nameChangeHandler = (event) => {
		dispacthLogin({ type: 'NAMEVALUE', value: event.target.value })
	}
	const emailChangeHandler = (event) => {
		dispacthLogin({ type: 'EMAILVALUE', value: event.target.value })
	}
	const passwordChangeHandler = (event) => {
		dispacthLogin({ type: 'PASSWORDVALUE', value: event.target.value })
	}
	const nameBlureHandler = () => {
		dispacthLogin({ type: 'NAMEBLUR' })
	}
	const emailBlureHandler = () => {
		dispacthLogin({ type: 'EMAILBLUR' })
	}
	const passwordBlurHandler = () => {
		dispacthLogin({ type: 'PASSWORDBLUR' })
	}
	const Posts = async () => {
		const response = await fetch('https://react-http-login-12058-default-rtdb.firebaseio.com/Logines.json', {
			method: 'POST',
			body: JSON.stringify(login),
			headers: {
				'Content-type' : 'application/json',
			}
		})
	}
	const submitHandler = (event) => {
		event.preventDefault()
		console.log(login)
		Posts()
		return navigate('/Login')
	}

	useEffect(() => {
		const identifer = setTimeout(() => {
			setDisabled(
				login.nameValue.isValid &&
					login.emailValue.isValid &&
					login.passwordValue.isValid,
			)
		}, 500)
		return () => {
			clearTimeout(identifer)
		}
	}, [
		login.nameValue.isValid,
		login.emailValue.isValid,
		login.passwordValue.isValid,
	])

	return (
		<div className='wrapper'>
			<div className='title'>Login Form</div>
			<form action='#' onSubmit={submitHandler}>
				<div className='field'>
					<input
						type='text'
						onChange={nameChangeHandler}
						onBlur={nameBlureHandler}
						placeholder='User Name'
					/>
					<p className='blur'>{login.nameValue.error}</p>
				</div>
				<div className='field'>
					<input
						type='text'
						onChange={emailChangeHandler}
						onBlur={emailBlureHandler}
						placeholder='Email Adress'
					/>
					<p className='blur'>{login.emailValue.error}</p>
				</div>
				<div className='field'>
					<input
						type='password'
						onChange={passwordChangeHandler}
						onBlur={passwordBlurHandler}
						placeholder='Password'
					/>
					<p className='blur'>{login.passwordValue.error}</p>
				</div>
				<div className='content'>
					<div className='pass-link'>
						<a href='#'>Forgot password?</a>
					</div>
				</div>
				<div className='field'>
					<input type='submit' value='Login' disabled={!disabled} />
				</div>
				<div className='signup-link'>
					Not a member? <a href='#'>Signup now</a>
				</div>
			</form>
		</div>
	)
}

export default Signup