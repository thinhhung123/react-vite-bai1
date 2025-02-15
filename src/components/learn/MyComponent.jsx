//component =html + css + js
//fragment <> </>
//JSON.stringify(ten): hiên chuỗi
//{}; 1 hoặc tượng trương cho javascript
//{{}}; 2 hoặc tượng trương cho option
import './style.css';
const MyComponent = () => {
 //const dat = "Nguyễn"; //string in ra chữ nguyễn
 //const dat = "04"; //số  in ra số
 //const dat = true; // boolean ko in ra
 //const dat = undefined; ko in ra 
  //const dat = null; ko in ra
  //const dat = [1 ,2 ,3] in ra 123
  const dat ={
    name : 'Nguyễn',
    age: 22
  }
    return (
     <>
      <div> {JSON.stringify (dat)} Thành Đạt</div>
      <div>{console.log("Dat")}</div>
      <div className='child'
      style={{borderRadius:"10px"}}>Dat</div>

      </>
   
    );
  }
  //1 biến
  export default MyComponent;
  
