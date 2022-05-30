import React,{useState} from 'react'

const STATUS = {
    HOVERED : 'hovered',
    NORMAL : 'normal'
}

function SnapshotTesting({page,children}) {
const [status,setStatus] = useState(STATUS.NORMAL);

const onMouseOver =()=>{
    setStatus(STATUS.HOVERED)
}
const onMouseLeave =()=>{
    setStatus(STATUS.NORMAL)
}
  return (
    <div>
        <h1>
        SnapshotTesting
        </h1>
        <a 
        className={status}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        href={page || ''}
        >
            {children === undefined || children === null || children !== '' ? 'No Data' : children}
        </a>
        </div>
  )
}

export default SnapshotTesting