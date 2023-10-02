import { FC, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { BsEmojiSmileFill } from 'react-icons/bs'
import styles from './Modal.module.scss'

interface ModalProps {
	showModal: boolean
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: FC<ModalProps> = ({ showModal, setShowModal }) => {
	const modalRef = useRef(null)

	useEffect(() => {
		if (!showModal) document.body.style.overflow = 'visible'
		else document.body.style.overflow = 'hidden'
	}, [showModal])

	return (
		<CSSTransition
			timeout={500}
			in={showModal}
			nodeRef={modalRef}
			unmountOnExit
			classNames={{
				enter: styles.wrapper_enter,
				enterActive: styles.wrapper_enter_active,
				exit: styles.wrapper_exit,
				exitActive: styles.wrapper_exit_active,
			}}
		>
			<div
				className={styles.wrapper}
				ref={modalRef}
				onClick={() => setShowModal(false)}
			>
				<div className={styles.modal} onClick={e => e.stopPropagation()}>
					<h1 className={styles.title}>Thank you for your attention!</h1>
					<div className={styles.body}>
						<BsEmojiSmileFill className={styles.smile} />
					</div>
				</div>
			</div>
		</CSSTransition>
	)
}

export default Modal
