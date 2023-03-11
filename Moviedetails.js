import React, { useEffect, useState } from 'react';
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import Footer from './Footer';
// import {Movies}  from './Movies.js';



function Moviedetails(){

  const { id } = useParams();

  const [ posts , setPosts ] = useState([]);


  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPosts(data)})
  });
  
  // const movie = Movies.filter((movie) => movie.id === id);

  // console.log(movie);

  // const { name, pg, duration, genre, img } = movie;

  // console.log(movie);  

  return(
    <div>
      <Nav />
          <div className=''>
            <div className="card emcounterdashboardcardimg">
              {/* <img src={post.img} className="card-img-top emcounterdashboardcardimage" alt="emcounterdashboardcardimage" /> */}
                  <div className="">
                      <h1 className="">{posts.userId}</h1>
                      <h5 className="">{posts.title}</h5>
                  </div>
            </div>
          </div>
      <Footer />
    </div>
  );
}

export default Moviedetails;







// import React, { useContext, useEffect, useState } from 'react';
// import Nav from "./Nav";
// import { useParams } from "react-router-dom";
// import Footer from './Footer';
// import { Movies } from './Movies';


// function Moviedetails(){

//   const { id } = useParams();

//   const [ post , setPost ] = useState({});

//   useEffect(()=>{
//     fetch('./Movies.js')
//         .then(res => res.json())
//         .then(data => setPost(data));
//   },[]);
  
//   // const movie = Movies.filter((movie) => movie.id === id);

//   // const { name, pg, duration, genre, img } = movie;

//   // console.log(movie);  

//   return(
//     <div>
//       <Nav />
//           <div className=''>
//             <div className=''>
//             <div className="card emcounterdashboardcardimg">
//               <img src={post.thumbnailUrl} className="card-img-top emcounterdashboardcardimage" alt="emcounterdashboardcardimage" />
//                   <div className="">
//                       <h1 className="">{post.id}</h1>
//                       <h5 className="">{post.title}</h5>
//                       <p className="">{post.url}</p>
//                   </div>
//             </div>
//             </div>
//           </div>
//       <Footer />
//     </div>
//   );
// }

// export default Moviedetails;



















