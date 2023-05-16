import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import navLogo from "../../assets/navLogo.png"
import { BiSearchAlt } from 'react-icons/bi';
import { fetchPosts, filterBySearchValue } from '../../redux/Post/PostAction';
import { useDispatch, useSelector } from 'react-redux';
const Navbar = () => {
  // const [searchValue, setSearchValue] = useState("")
  const dispatch = useDispatch();
  const { posts,img } = useSelector((state) => state.post);

useEffect(() => {
    dispatch(fetchPosts());
}, [dispatch]);  
return (
    <div className='nav_Container flexrowSB'>
      <div className='nav_Logo'>
        <img src={navLogo} />
      </div>
      <div className='nav_Search flexrowCenter'>
      <BiSearchAlt/>
        <input  placeholder='Search' onChange={(e)=>{
          console.log(e.target.value);
          filterBySearchValue(e?.target?.value,posts,dispatch);
          }}/>
      </div>
    </div>
  )
}

export default Navbar