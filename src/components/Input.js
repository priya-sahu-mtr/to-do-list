import React, { useState } from "react";
import gif from "./notebook.gif";
import Output from "./OutputTodo";
const Input = () => {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const [list, setList] = useState([]);
    const [selectedYear, setSelectedYear] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(title, text, date);
        const query = { title, text, date, id: Math.random() };
        if (title && text && date) {
            setList((data) => [...data, query])
        }
    }

    const handleStrikethrough = (id) => {
        const updatedList = list.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task);
        setList(updatedList);
 
    };

    function handleDelete(id) {
        let total = [...list]
        let res= list.filter( (item) =>{
        return id!= item.id;
        })
        // total.splice(id, 1)
        setList(res)

    }
     const getDueStatus = (taskDate) => {
        const currentDate = new Date();
        const dueDate = new Date(taskDate);
        if (currentDate > dueDate) {
            return <p style={{ color: "yellow" }}>Due Date Passed</p>;
        } else {
            return <p style={{ color: "white" }}>Upcoming Task</p>;
        }
    };

    return (
        <>
            <div className="maindiv">
                <div className="header">
                    <h1 className="heading">MY TO-DO   <img src={gif} className="giflogo" /></h1>

                </div>

                <form className="form-inline" >

                    <div className="form-group">
                        <label htmlFor="title">TASK</label>
                        <input type="text" className="form-control" name="title" onChange={(e) => setTitle(e.target.value)} />
                        <label htmlFor="title">TEXT DESCRIPTION</label>
                        <input type="text" className="form-control" name="text" onChange={(e) => setText(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">DATE</label>
                        <input type="date" className="form-control" name="date" onChange={(e) => setDate(e.target.value)} />
                        <button type="submit" value="additem" className="btn btn-primary" onClick={handleSubmit} >Add Item</button>

                    </div>
                </form>
                <table className="outputtable">
                    <tbody>
                        <tr>
                            <th>TASK</th>
                            <th>TEXT DESCRIPTION</th>
                            <th>DATE</th>
                        </tr>
                        {
                            list.map((a, i) => {
                                return(
                                <Output a={a} handleStrikethrough={handleStrikethrough} handleDelete={handleDelete} getDueStatus={getDueStatus} />
                                )
                            })
                        }

                    </tbody>
                </table>
           </div>

        </>

    )

}
export default Input;
