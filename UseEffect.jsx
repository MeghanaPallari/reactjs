//NO DEPENDENCY
// // import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     let [state , setState] = useState(0)
//     useEffect(() => {
//         setTimeout(() => {
//             setState(state+1)
            
//         } , 2000)
    
//     })
//   return (
//     <div>
//       <h1>{state}</h1>
//     </div>
//   )
// }

// export default UseEffect

//Component wil render when state updates


// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     let [state , setState] = useState(0)
//     let [incr , setIncr] = useState(0)

//     useEffect( () => {
//         setIncr(state * 2)
//     } , [state] )
//       return (
//     <div>
//         <h1>state : {state}</h1>
//         <h1>incr : {incr}</h1>
//         <button onClick={() => setState((c) => c + 1)} >click</button>
//     </div>
//   )
// }

// export default UseEffect


//fetch api using useEffect hook
import React, { useEffect, useState } from 'react'
import "./useeffect.css"
const UseEffect = () => {
    let [state, setState] = useState([])

    useEffect(() => {
        window.fetch("https://fakestoreapi.com/products")
        .then((X) => X.json())
        .then((res) => setState(res))
    } , [])

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>price</th>
                    <th>image</th>
                </tr>
            </thead>
        </table>
        {
            state.map((data) => {
                console.log(data);
                return (
                    <>
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.price}</td>
                        <td><img src={data.image} alt=""/></td>
                    </tr>
                    </>
                )
            })
        }
      
    </div>
  )
}

export default UseEffect












