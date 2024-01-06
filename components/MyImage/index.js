import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'
import styles from './myImage.module.scss'

const ImgCustom = styled(Image)`
  position: relative !important;
  ${(props) =>
    props.heightImage &&
    css`
      height: ${(props) => props.heightImage} !important;
    `}
  ${(props) =>
    props.widthImage &&
    css`
      width: ${(props) => props.widthImage} !important;
    `}
`
const MyImage = ({
  alt,
  src,
  width = 'auto',
  height = '100%',
  className = '',
  onClick = () => {}
}) => {
  return (
    <ImgCustom
      alt={alt || src}
      style={{
        objectFit: 'cover' // cover, contain, none,
      }}
      fill
      src={src}
      objectFit='contain'
      objectPosition={'center'}
      className={`${styles['my-image-base']} ${className}`}
      widthImage={width}

      heightImage={height}
      onClick={onClick}
    />
  )
}

export default MyImage
