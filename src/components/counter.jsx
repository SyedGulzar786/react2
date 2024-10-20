import { useEffect } from "react"

export default function Counter({count}){
    useEffect(() => {
        console.log("counter test")
return () => {
    console.log("clean up, counter unmount  hogya")
}
    },[])
    return(

        <div><h1>{count}</h1></div>
    )
}