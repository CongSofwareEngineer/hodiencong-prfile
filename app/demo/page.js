import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
const Demo = () => {
  const refContainer3D = useRef(null)
  useEffect(() => {
    (() => {
      const container = document.getElementById('container-3d')
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      container.appendChild(renderer.domElement)
    })()
  }, [])

  return (
    <div ref={refContainer3D} id='container-3d' className='relative' >
        demo
    </div>
  )
}

export default Demo
