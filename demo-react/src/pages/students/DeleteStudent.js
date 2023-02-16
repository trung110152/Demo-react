
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";


export default function DeleteStudent() {
    const {id} = useParams();
    const navigate = useNavigate()
    return(
        <>
        <button onClick={()=>{
            axios.delete(`http://localhost:3000/students/${id}`).then(res=>{

                navigate('/')
            })
        }}>Yes</button>
            <button onClick={()=>{
                navigate('/')
            }}>No</button>
</>

    )


}