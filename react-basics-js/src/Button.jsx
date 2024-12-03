
function handleclick(){
    console.log("hello!");
}

function handlemouseover(){
    console.log("Bye!");
}

function handleDbClick(){
    console.log("on double click");
}
export default function Button(){
 return(
    <>
    <button onClick={handleclick}> Click me !</button>
    <p onMouseOver={handlemouseover}>
        ghsfghl;lhgfdsdfghjklkkjhgfsban
    </p>
    <button onDoubleClick={handleDbClick}> Double click!</button>
    </>
 );
}