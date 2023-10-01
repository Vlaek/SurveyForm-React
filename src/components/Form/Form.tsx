import { FC } from 'react'
import {
	SubmitErrorHandler,
	SubmitHandler,
	useForm,
	Controller,
} from 'react-hook-form'
import Select, { GroupBase, StylesConfig } from 'react-select'
import styles from './Form.module.scss'

interface MyForm {
	name: string
	email: string
	age: number
	position: IOption
	radio: string
	checkbox: string[]
	comment: string
}

interface IOption {
	value: string
	label: string
}

const options: IOption[] = [
	{ value: 'student', label: 'Student' },
	{ value: 'full-time job', label: 'Full-time job' },
	{ value: 'full-time learner', label: 'Full-time learner' },
	{ value: 'prefer not to say', label: 'Prefer not to say' },
	{ value: 'other', label: 'Other' },
]

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm<MyForm>({
		defaultValues: { radio: 'definitely' },
	})

	const onSubmit: SubmitHandler<MyForm> = data => {
		console.log(data)
	}

	const onError: SubmitErrorHandler<MyForm> = data => {
		console.error(data)
	}

	const colorStyles: StylesConfig<IOption, false, GroupBase<IOption>> = {
		control: (base, { isFocused }) => ({
			...base,
			backgroundColor: 'white',
			height: '100%',
			border: isFocused ? '0' : '0',
			boxShadow: isFocused ? '0' : '0',
			borderRadius: '0',
			fontSize: '18px',
			color: '#000',
			fontFamily: 'Montserrat',
		}),
		option: (base, { isFocused, isSelected }) => ({
			...base,
			backgroundColor: isFocused ? '#e0e0e0' : '#fff',
			color: 'black',
			display: isSelected ? 'none' : 'block',
			fontSize: '18px',
		}),
		menu: base => ({
			...base,
			margin: 0,
			borderRadius: 0,
		}),
		menuList: base => ({
			...base,
			padding: 0,
		}),
		placeholder: base => ({
			...base,
			color: 'rgba(0, 0, 0, 0.6)',
			fontFamily: 'Montserrat',
			padding: '5px',
		}),
	}

	return (
		<form onSubmit={handleSubmit(onSubmit, onError)} className={styles.form}>
			<label className={styles.label}>
				<span>Name</span>
				{errors.name && (
					<span style={{ color: 'red' }}>{errors.name.message}</span>
				)}
			</label>
			<input
				className={styles.field}
				placeholder='Enter your name...'
				type='text'
				{...register('name', {
					required: 'Name is require field!',
					pattern: {
						value: /^[a-zA-Z]{4,}(?:\s[a-zA-Z]+)*$/,
						message: 'Please enter valid name!',
					},
				})}
			/>

			<label className={styles.label}>
				<span>Email</span>
				{errors.email && (
					<span style={{ color: 'red' }}>{errors.email.message}</span>
				)}
			</label>
			<input
				className={styles.field}
				placeholder='Enter your email...'
				type='text'
				{...register('email', {
					required: 'Email is require field!',
					pattern: {
						value:
							/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
						message: 'Please enter valid email!',
					},
				})}
			/>

			<label className={styles.label}>Age</label>
			<input
				className={styles.field}
				placeholder='Enter your age...'
				type='number'
				{...register('age')}
			/>

			<Controller
				name='position'
				control={control}
				rules={{ required: 'Select is require field!' }}
				render={({ field, formState: { errors } }) => (
					<>
						<label className={styles.label}>
							{errors.position ? (
								<span style={{ color: 'red' }}>{errors.position.message}</span>
							) : (
								<span>Which option best describes your current role?</span>
							)}
						</label>
						<Select
							{...field}
							options={options}
							placeholder='Select current role...'
							className={styles.select}
							styles={colorStyles}
						/>
					</>
				)}
			/>

			<div className={styles.radio_list}>
				<p className={styles.label}>Would you recommend to a friend?</p>
				<div className={styles.radio_item}>
					<input
						className={styles.radio}
						type='radio'
						value='definitely'
						{...register('radio')}
					/>
					<label>Definitely</label>
				</div>
				<div className={styles.radio_item}>
					<input
						className={styles.radio}
						type='radio'
						value='maybe'
						{...register('radio')}
					/>
					<label>Maybe</label>
				</div>
				<div className={styles.radio_item}>
					<input
						className={styles.radio}
						type='radio'
						value='not sure'
						{...register('radio')}
					/>
					<label>Not sure</label>
				</div>
			</div>

			<div className={styles.checkbox_list}>
				<p className={styles.label}>What would you like to see improved?</p>
				<div className={styles.checkbox_item}>
					<input
						className={styles.checkbox}
						type='checkbox'
						value='Frontend Projects'
						{...register('checkbox')}
					/>
					<label>Frontend Projects</label>
				</div>
				<div className={styles.checkbox_item}>
					<input
						className={styles.checkbox}
						type='checkbox'
						value='Backend Projects'
						{...register('checkbox')}
					/>
					<label>Backend Projects</label>
				</div>
				<div className={styles.checkbox_item}>
					<input
						className={styles.checkbox}
						type='checkbox'
						value='Data Visualisation'
						{...register('checkbox')}
					/>
					<label>Data Visualisation</label>
				</div>
				<div className={styles.checkbox_item}>
					<input
						className={styles.checkbox}
						type='checkbox'
						value='Challenges'
						{...register('checkbox')}
					/>
					<label>Challenges</label>
				</div>
				<div className={styles.checkbox_item}>
					<input
						className={styles.checkbox}
						type='checkbox'
						value='Open Source Community'
						{...register('checkbox')}
					/>
					<label>Open Source Community</label>
				</div>
				<div className={styles.checkbox_item}>
					<input
						className={styles.checkbox}
						type='checkbox'
						value='Gitter help rooms'
						{...register('checkbox')}
					/>
					<label>Gitter help rooms</label>
				</div>
				<div className={styles.checkbox_item}>
					<input
						className={styles.checkbox}
						type='checkbox'
						value='Videos'
						{...register('checkbox')}
					/>
					<label>Videos</label>
				</div>
				<div className={styles.checkbox_item}>
					<input
						className={styles.checkbox}
						type='checkbox'
						value='City Meetups'
						{...register('checkbox')}
					/>
					<label>City Meetups</label>
				</div>
				<div className={styles.checkbox_item}>
					<input
						className={styles.checkbox}
						type='checkbox'
						value='Wiki'
						{...register('checkbox')}
					/>
					<label>Wiki</label>
				</div>
				<div className={styles.checkbox_item}>
					<input
						className={styles.checkbox}
						type='checkbox'
						value='Forum'
						{...register('checkbox')}
					/>
					<label>Forum</label>
				</div>
				<div className={styles.checkbox_item}>
					<input
						className={styles.checkbox}
						type='checkbox'
						value='Additional Courses'
						{...register('checkbox')}
					/>
					<label>Additional Courses</label>
				</div>
			</div>

			<p className={styles.label}>Any comments or suggestions?</p>
			<textarea
				className={styles.textarea}
				placeholder='Enter your comment here...'
				{...register('comment')}
			/>

			<div className={styles.button_list}>
				<button
					className={styles.button}
					type='button'
					onClick={() => {
						reset()
					}}
				>
					Reset Form
				</button>
				<button
					className={styles.button}
					type='submit'
					onClick={handleSubmit(onSubmit)}
				>
					Submit
				</button>
			</div>
		</form>
	)
}

export default Form
