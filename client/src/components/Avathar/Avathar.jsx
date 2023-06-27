import React from 'react'
const Avathar = ({children,backgroundColor,color,px,py,curser,borderRadius,fontSize,marginLeft}) => {
  const style={
    backgroundColor,
    color: color || null,
    padding: `${py} ${px}`,
    curser: curser||null,
    borderRadius,
    textDecoration:"none",
    fontSize,
    marginLeft
     
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}
export default Avathar
