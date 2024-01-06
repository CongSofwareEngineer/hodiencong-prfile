'use client'
import React from 'react'
import Header from '../Header'
import styles from './styles.module.scss'
import Footer from '../Footer'
const Container = ({ children }) => {
  return (
    <main className={`${styles.container} bg-slate-400`}>
      {/* <Header /> */}
      <section className='m-auto w-full max-w-[1350px] p-5 md:p-12'>
        {children}
      </section>
      <Footer />
    </main>
  )
}

export default Container
