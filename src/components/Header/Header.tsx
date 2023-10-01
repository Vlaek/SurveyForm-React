import { FC } from 'react'
import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>Survey Form</h1>
			<h2 className={styles.subtitle}>
				Thank you for taking the time to help us improve the platform
			</h2>
		</header>
	)
}

export default Header
