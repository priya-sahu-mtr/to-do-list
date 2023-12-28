import React from 'react'

const output = ({a, handleStrikethrough, handleDelete, getDueStatus}) => {
    return (
        <>
            <tr key={a.id}>
                <td className={a.completed ? "strike" : ""}> {a.title} </td>
                <td>{a.text}</td>
                <td>{a.date}</td>
                <td>{getDueStatus(a.date)}</td>
                <td><input type="checkbox" name="item" className="check-box" checked={a.completed} onChange={() => handleStrikethrough(a.id)} /></td>
                <td><button onClick={() => handleDelete(a.id)}>Delete</button></td>
            </tr>
        </>
    )
}

export default output

