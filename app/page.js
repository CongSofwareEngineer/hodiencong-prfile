'use client'
import MyButton from '@/components/MyButton'
import React, { useState } from 'react'
import HomeScreen from './home/page'

const Homelayout = () => {
  const [loading, setLoading] = useState(false)
  return <HomeScreen />
  // return (
  //   <div>
  //     HomeScreen
  //     <MyButton
  //       variant='contained'
  //       loading={loading}
  //       onClick={() => setLoading(true)}
  //     >
  //       HomeScreen
  //     </MyButton>
  //   </div>
  // )
}

export default Homelayout
