import React,{useState} from 'react'
import axios from 'axios';
const useStyles={
  wrapper:{
    padding: "20px",
    cursor: "pointer",
  },
}
const SearchBar = () => {
const [searchInput, setSearchInput] = useState("");
const [matchingads,setmatchingads]=useState()
const [ads,setads]=useState(false)
const handleChange = (e) => {
    setSearchInput(e.target.value);
    if(e.target.value==="")
    {
      setmatchingads([])
    }
  };
  const handleclick=(Link)=>{
    window.open(Link, '_blank', 'noopener,noreferrer');
  }
  const handlesearch=() =>{
    if(searchInput!==""){
    axios
      .post(`http://localhost:8080/${searchInput}`).then(res =>{
        console.log(res.data)
        if(res.data[0])
        {
        setmatchingads(res.data)
        setads(true)
        }
        else{
          setmatchingads([])
        }
      })}
   }
  return(<div>
<input
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput}
   />
   <button onClick={handlesearch}>Search</button> 
   <br></br>
   { (ads) &&(
     matchingads.map(x=>
   <img src={x.imageurl} style={useStyles.wrapper} height="40%" width="40%" onClick={()=>handleclick(x.Link)}/>)
   )}
</div>
  )}
export default SearchBar;