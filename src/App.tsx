import { FC, useState } from 'react'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'

const App: FC = () => {
	const [showModal, setShowModal] = useState<boolean>(false)

	return (
		<div className='container'>
			<Header />
			<Form {...{ setShowModal }} />
			<Modal {...{ showModal, setShowModal }} />
		</div>
	)
}

export default App
