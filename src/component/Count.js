import React, {useState} from 'react';

function Count(){
    const[count,setCount] = useState(0)
    const handlingCount = () =>{
        setCount(count + 1)
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={handlingCount}>+</button>
        </div>
    )
}

export default Count;