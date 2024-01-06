import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import TitleComponent from '@/components/TitleComponent4'
const Resume = () => {
  return (
    <div className="w-full">
      <TitleComponent icon={<AccountBalanceWalletIcon />} />
      <h2 className='flex gap-2 text-tile my-3'>
        <span>
            Education &
        </span>
        <span className='text-blue-600'>
            Experience
        </span>
      </h2>
    </div>
  )
}

export default Resume
