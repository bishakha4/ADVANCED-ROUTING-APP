import { useState, useEffect } from "react";




 function Counter () {
        const [count, setCount] = useState(0); ///initial value we are giving is 0
        const [name, setName] = useState("Guvi");
        
       // componentDidMount
        useEffect (() => {
            console.log("useEffect 1");
            return () => {
                //componentWillUnmount
                console.log("useEffect 4");
            };
        }, []);

        
        //componentDidUpdate
        useEffect (() => {
            console.log("useEffect 2");
        });

        
        //componentDidUpdate - name
       useEffect (() => {
            console.log("useEffect 3");
        }, [name])

        
        const changeName = () => setName("Tamil");
        const increment = () => setCount(count+1);
         const decrement = () => {
            if(count>0){
                setCount(count-1)
            }     
            else{
                setCount(count);
            }
        };
         const reset = () => setCount(0);
        return (
            <>
                <p>Count - {count}</p>
                <button onClick = {increment}>Increment</button>
                <button onClick = {decrement}>Decrement</button>
                <button onClick = {reset}>Reset</button>
                <p>Name - {name}</p>
                <button onClick = {changeName}>Change Name</button>
            </>
        );
    }
    







//Actions - INCREMENT, DECREMENT, RESET, CHANGE



//Reducer Function
// const countReducer = (count, action) => {
//     switch(action) {
//         case "INCREMENT" : {
//             return count + 1;
//         }
//         case "DECREMENT" : {
//             return count - 1;
//         }
//         case "RESET" : {
//             return 0;
//         }
//         default : {
//             return count;
//         }
//     }
// };


// function Counter () {
//     const [count, dispatch] = useReducer(countReducer, 0); 
//     return (
//         <>
//             <p>Count - {count}</p>
//             <button onClick = {() => dispatch("INCREMENT")}>Increment</button>
//             <button onClick = {() => dispatch("DECREMENT")}>Decrement</button>
//             <button onClick = {() => dispatch("RESET")}>Reset</button>
           
//         </>
//     );
// }

// function Counter () {
//     const [count, setCount] = useState(0); ///initial value we are giving is 0
//     const [name, setName] = useState("Guvi"); 
//     const changeName = () => setName("Tamil");
//     const increment = () => setCount(count+1);
//      const decrement = () => {
//         if(count>0){
//             setCount(count-1)
//         }     
//         else{
//             setCount(count);
//         }
//     };
//      const reset = () => setCount(0);
//     return (
//         <>
//             <p>Count - {count}</p>
//             <button onClick = {increment}>Increment</button>
//             <button onClick = {decrement}>Decrement</button>
//             <button onClick = {reset}>Reset</button>
//             <p>Name - {name}</p>
//             <button onClick = {changeName}>Change Name</button>
//         </>
//     );
// }


export default Counter;