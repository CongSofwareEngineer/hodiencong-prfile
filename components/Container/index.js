'use client'
import React from 'react'
import styles from './styles.module.scss'
import Footer from '../Footer'
const Container = ({ children }) => {
  return (
    <main className={styles.container}>
      <section className={styles['container-content']}>
        {children}
      </section>
      <Footer />
    </main>
  )
}

export default Container
