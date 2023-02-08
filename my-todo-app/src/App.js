import React,{useState} from 'react';
import './App.css';

function App() {
  const deleteToDo = (key)=>{
    setToDos(toDos.filter((e)=>{
      return e.id !== key
    }))
  }
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  
  
  



  //

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" placeholder="🖊️ Add item..." value={toDo} onChange={(e)=>setToDo(e.target.value)} />
        <i className="fas fa-plus" onClick={()=>setToDos([...toDos,{text:toDo,id:Date.now(),status:false}])}></i>
      </div>
      <div className="todos">
        {toDos.map((todo)=>{
          return(
            <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.value);
              console.log(todo)
              setToDos(toDos.filter(obj=>{
                if(obj.id===todo.id){
                  obj.status=e.target.checked
                }
                return obj
              }))
    
            }} type="checkbox" name="" value={todo.status} id="" 
            
            />
            <p>{todo.text}</p>
          </div>
          <div className="right" >
            <i  className="fas fa-times" onClick={()=>deleteToDo(todo.id)}></i>
          </div>
        </div>
          )
          
        })}
        {
          toDos.map(todo=>{
            if(todo.status){
              return(
                <div>
                  <h2>{todo.text}</h2>
                </div>
              )
              
            }
            return null;
          })
        }
        
      </div>
    </div>
  );
}

export default App;