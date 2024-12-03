
function handlesubmitform(event){
    event.preventDefault();
    console.log("form is submitted");
}


export default function Form(){
    return( <>
        <form>
            <input  placeholder="write some thing "/>
            <button onClick={handlesubmitform}>submit</button>
        </form>
        </>);
}