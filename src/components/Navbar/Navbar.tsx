import React from "react";
import { useHistory} from 'react-router-dom'

export const Navbar = () => {

  let history = useHistory()

  const addNewBlog = ()=>{
    history.push('/add-new-blog')
  }

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Blog Application
        </a>
        <button className="btn btn-outline-success" onClick={addNewBlog}>
          Add a New Blog!
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
