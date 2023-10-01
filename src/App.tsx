import { FC } from 'react'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

const App: FC = () => {
	return (
		<div className='container'>
			<Header />
			<Form />
		</div>
	)
}

export default App
