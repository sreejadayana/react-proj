import Component2 from "./Component2";

function Component1(){
     return(
        <div>
             <h1>Component 1</h1>
             {/* <h2>{props.user.username}</h2>  */}
             <Component2></Component2>

        </div>
     )

}

export default Component1;
