//props là 1 object
// {
//     name: "Đat"
//     age: 25
//     data: ...
// }

const TodoData = (props) => {
    console.log(">>> check props: ",props )
    const {name}= props;
    return (
        <div className='todo-data'>
            <div>My name is {name}</div>
        <div >Learning React</div>
        <div> Wacth YouToBe</div>
      </div>
    )
}
export default TodoData