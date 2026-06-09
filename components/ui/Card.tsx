import { useEffect, useState } from 'react'
import { motion, stagger } from 'motion/react'

interface CardProps {
  bg: string
  index: number
  total: number
  extraStyle: { y: number; scale: number; zIndex: number }
  stackMaxY: number
}

const EDGE = 16


const Card = ({ bg, index, total, extraStyle, stackMaxY }: CardProps) => {
  const [toCorner, setToCorner] = useState(false)
  const [noDelay, setNoDelay] = useState(false);
  const { y, scale, zIndex } = extraStyle

  useEffect(() => {
    setToCorner(true)
  }, [])


  return (
    <motion.div
      className="absolute w-56 h-32 origin-center rounded-md"
      onClick={() => { 
        setToCorner(!toCorner)
        setNoDelay(true)
        }}
      layout
      style={{
        background: bg,
        ...(toCorner
          ? {
              bottom: `${EDGE}px`,
              right: `${EDGE}px`,
              width: '100px',
              height: '100px',
              top: 'auto',
              left: 'auto',
            }
          : {
              top: `calc(${EDGE}px + ${stackMaxY}px)`,
              left: `${EDGE}px`,
              bottom: 'auto',
              right: 'auto',
            }),
        y,
        scale,
        zIndex,
      }}
 >
    </motion.div>
  )
}

export default Card