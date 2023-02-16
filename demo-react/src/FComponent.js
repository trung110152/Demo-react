import {useState} from "react";

export default function FComponent() {
    let [list, setList] = useState([
        {
            name:'Trung',
            age:30
        }
    ]);
    let [name, setName] = useState('');
    let [age, setAge] = useState('');
    let [id, setId] = useState('');
    return(
        <>

            {list.map((item,ind)=>(
                <>
                    <h2 key={ind}>{item.name}, {item.age}</h2>
                    <button value={ind}  onClick={showFormEdit}>Edit</button>
                    <button value={ind} onClick={Remove}>Delete</button>
                </>
            ))}
            <hr/>
            <br/>
            <input type="text" value={name} onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <br/>
            <br/>
            <input type="text"value={age} onChange={(e)=>{
                setAge(e.target.value)
            }}/>
            <br/>
            <br/>
            <button onClick={()=>{
                setList([...list,{
                    name:name,
                    age: age
                }]);
                setName('');
                setAge('');

            }}>Add</button>
            <button onClick={edit}>Save</button>

        </>
    )

    function Remove(e) {
        list.splice(e.target.value,1);
        return setList([...list])
    }

    function showFormEdit(e) {
        list.map((item, ind)=>{
            if(ind == e.target.value){
                setAge(item.age);
                setName(item.name);
                id= ind;
            }
        })

    }

    function edit() {
        list.map((item, ind)=>{
            if(ind == id){
               item.name = name;
               item.age = age;
               setName('');
               setAge('');
               return setList([...list])
            }
        })
    }

}