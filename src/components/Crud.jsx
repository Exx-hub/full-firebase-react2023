import { useCallback, useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase-config";

function Crud() {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState("");

  const addTodo = async () => {
    await addDoc(collection(db, "todos"), { title: todo });
  };

  const getTodos = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, "todos"));

    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    //   console.log(doc.data());
    // });

    const mappedTodos = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    setTodos(mappedTodos);
  }, []);

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
    console.log("item deleted");
  };

  useEffect(() => {
    console.log("useEffect");
    getTodos();
  }, [getTodos]);

  return (
    <>
      <div>Crud Todo</div>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>

      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="flex space-x-3">
            <h3>{todo.title}</h3>
            <button onClick={() => deleteTodo(todo.id)} className="border-2 border-red-500">
              trash
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Crud;
