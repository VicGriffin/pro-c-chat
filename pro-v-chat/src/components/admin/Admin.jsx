import React from 'react'
import './admin.css'
import { Link } from 'react-router-dom'

function Admin() {
  return (
   <>
   <section className='admin'>
        
   <Link to={"/login"}><button>admin</button></Link>
   <Link to="/login"><button>user</button></Link>
   
   </section>
   </>
  )
}

export default Admin