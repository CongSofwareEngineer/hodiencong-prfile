import React, { useMemo } from 'react'
import styled from 'styled-components'
import { LoadingButton } from '@mui/lab'

const ButtonCustom = styled(LoadingButton)`
    width: fit-content;
`
const MyButton = ({
  children,
  onClick,
  className,
  loading = false,
  title = 'center',
  startIcon = null,
  disabled = false,
  type = 0
}) => {
  const variant = useMemo(() => {
    switch (type) {
    case 1:

      return 'text'
    case 2:

      return 'contained'
    default:
      return 'outlined'
    }
  }, [type])
  return (
    <ButtonCustom
      className={className}
      onClick={onClick}
      loading={loading}
      loadingPosition={title}
      variant={variant}
      disabled={disabled}
      // startIcon={startIcon}
    >
      {children}
    </ButtonCustom>
  )
}

export default MyButton
