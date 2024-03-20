function Employees(props){

    const listIterator = () =>{
        var listItems = props.emps.map((emp)=>{
             return <li key={emp.name}>{emp.name} {emp.address}</li>
         })
         return listItems;
    }

    return(
        <div>
             <h1>Employees Component!</h1>

             <ul>
                    {listIterator()}
             </ul>
        </div>
    )
}

export default Employees;