import React from 'react';

const ToDoItem = props => {
    return(
             <div className="todo-item">

             {props.currentText ? 
             <>
             {/* <input type="text" value={props.currentText} onChange={}/>   */}
             <img src="https://image.flaticon.com/icons/png/512/753/753318.png" className="btn-delete" onClick={props.confirmEdit}/> 
             </>
             : <> <input onChange={props.handleChange} id={props.description}  className="custom-checkbox" type="checkbox" defaultChecked={props.completed}/>
                <label htmlFor={props.description}  className={props.completed === true ? 'label-delete label' : 'label'}>
                {props.description}
            </label>
            <img src="https://image.flaticon.com/icons/svg/3094/3094179.svg" className="btn-delete" onClick={props.handleEdit}/>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/trash-1596208-1355107.png" className="btn-delete" onClick={props.handleDelete}/> 
            </>
            }  
            
            
        </div>
    )
}

export default ToDoItem;