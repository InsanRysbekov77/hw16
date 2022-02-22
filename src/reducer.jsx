import { nameValidRexExp, validEmailRexEpx } from './helpers/regaxp'

export const initialState = {
	nameValue: {
		value: '',
		isValid: null,
		error: '',
	},
	emailValue: {
		value: '',
		isValid: null,
		error: '',
	},
	passwordValue: {
		password: '',
		isValid: null,
		error: '',
	},
}

export const SingnupReducer = (state, action) => {
	switch (action.type) {
		case 'NAMEVALUE':
			return {
				...state,
				nameValue: {
					value: action.value,
					isValid: nameValidRexExp.test(action.value),
				},
			}
		case 'EMAILVALUE':
			return {
				...state,
				emailValue: {
					value: action.value,
					isValid: validEmailRexEpx.test(action.value),
				},
			}
		case 'PASSWORDVALUE':
			let a = action.value.split('', 2).join('')
			let b = action.value.split('').reverse().join('')
			return {
				...state,
				passwordValue: {
					value: b + a,
					isValid: action.value.length > 5,
				},
			}
		case 'NAMEBLUR':
			return {
				...state,
				nameValue: {
					value: state.nameValue.value,
					isValid: nameValidRexExp.test(state.nameValue.value),
					error: nameValidRexExp.test(state.nameValue.value)
						? ''
						: state.nameValue.value === ''
						? 'Ведите имя'
						: 'должен быть цифра',
				},
			}
		case 'EMAILBLUR':
			return {
				...state,
				emailValue: {
					value: state.emailValue.value,
					isValid: validEmailRexEpx.test(state.emailValue.value),
					error: validEmailRexEpx.test(state.emailValue.value)
						? ''
						: state.emailValue.value === ''
						? 'Bедите email'
						: 'gmail is not valid',
				},
			}
		case 'PASSWORDBLUR':
			return {
				...state,
				passwordValue: {
					value: state.passwordValue.value,
					isValid: state.passwordValue.value.trim().length > 5,
					error:
						state.passwordValue.value.trim().length > 5
							? ''
							: state.passwordValue.value === ''
							? 'Ведите password'
							: 'password дольжна быть вышше 5 цифра',
				},
			}
		default:
			return state
	}
}