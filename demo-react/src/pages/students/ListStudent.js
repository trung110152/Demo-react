import {Link, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import swal from 'sweetalert';


export default function ListStudent() {
    const {state} = useLocation();
    const [list, setList] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3000/students').then(res => {

            setList(res.data)
        })
    }, []);
    return (
        <>
            <h1>List Student</h1>
            {list.map((item, key) => {
                return (
                    <>
                        <h3 key={key}>{item.name}:{item.description}</h3>
                        <Link to={`/edit-student/${item.id} `}>
                            <button>Edit</button>
                        </Link>
                        <button onClick={() => {
                            swal({
                                title: "Are you sure?",
                                text: "Once deleted, you will not be able to recover this imaginary file!",
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                            })
                                .then((willDelete) => {
                                    if (willDelete) {
                                        axios.delete(`http://localhost:3000/students/${item.id}`).then(() => {
                                            axios.get('http://localhost:3000/students').then(res => {

                                                setList(res.data)
                                            })
                                        })
                                        swal("Poof! Your imaginary file has been deleted!", {
                                            icon: "success",
                                        });
                                    } else {
                                        swal("Your imaginary file is safe!");
                                    }
                                });
                        }}>Delete
                        </button>
                    </>

                )

            })}
        </>
    )
}