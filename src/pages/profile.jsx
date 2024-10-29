import { useLocation, useParams, useSearchParams } from "react-router-dom"

export default function Profile(){
    const params = useParams();
    const {username} = useParams();
    const location = useLocation();
    const searchParams = useSearchParams();
    let [searchingParams,setSearchingParams] = useSearchParams();

    console.log("params",params)
    console.log("location",location)
    console.log("searchParams",searchParams)
    console.log("searchingParams",searchingParams.get("abcd"))
    return(
        <div>
            <h1>Profile Page ({username})</h1>
            <button onClick={() => setSearchingParams({abcd:"abcd"})}>updating ABCD</button>
            <button onClick={() => setSearchingParams({name:"shoukat"})}>updating SHOUKAT</button>
            <button onClick={() => {searchingParams.set("name","gulzar"); setSearchingParams(searchingParams)}}>updating GULZAR</button>
        </div>
    )
    }