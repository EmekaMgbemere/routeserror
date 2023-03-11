import React, { useState, useEffect } from "react";
import Nav from './Nav';
import Footer from './Footer';
import aquaman from '../images/aquaman.png';
import emmoviechair from '../images/emmoviechair.png';
import justiceleague from '../images/justiceleague.png';
import justiceleague1 from '../images/justiceleague1.png';
import { Link } from "react-router-dom";
// import { Movies } from './Movies';



function Userhomepage() {

      const [ posts , setPosts ] = useState([]);

    const [name, setName] = useState("");

  const states = [
    {id:"1",name:"ABUJA"},
    {id:"2",name:"ABIA"},
    {id:"3",name:"AKWAIBOM"},
    {id:"4",name:"LAGOS"},
  ];
  
  const statecinemalocation = [
    {id:"1",countryId:"1",name:"Kwali"},
    {id:"2",countryId:"1",name:"Kuje"},
    {id:"3",countryId:"1",name:"Gwagwalada"},
    {id:"4",countryId:"2",name:"Isiala-Ngwa North"},
    {id:"5",countryId:"2",name:"Ohafia"},
    {id:"6",countryId:"2",name:"Osisioma"},
    {id:"7",countryId:"3",name:"Eket"},
    {id:"8",countryId:"3",name:"Oron"},
    {id:"9",countryId:"3",name:"Uyo"},
    {id:"10",countryId:"4",name:"Amuwo-Odofin"},
    {id:"11",countryId:"4",name:"Surulere"},
    {id:"12",countryId:"4",name:"Lagos-Island"},
  ]
  
  const cities = [];
  const [ state, setState] = useState([]);
  const [ venue, setVenue] = useState([]);
  const [ city, setCity] = useState([]);

 
  
  const handleState = (id) => {
    const dt = statecinemalocation.filter(x => x.countryId === id);
    setVenue(dt);
  }
  
  const handleVenue = (id) => {
    const dt = cities.filter(x => x.stateId === id);
    setCity(dt);
  }


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .then((data) => {setPosts(data)});
    },[posts])


  return (
    <div>
        <Nav />
        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
            <div className="container-fluid">
                <div className="emuserhomepageimgdiv carousel-inner ">
                    <div className="carousel-item active">
                    <img src={justiceleague} className="d-block w-100" alt="justiceleague" />
                    </div>
                    <div className="carousel-item">
                    <img src={justiceleague1} className="d-block w-100" alt="justiceleague1" />
                    </div>
                    <div className="carousel-item ">
                    <img src={aquaman} className="d-block w-100" alt="aquaman" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div className="row mx-3 mb-3 emcoundashsear">

        <div className="col-lg-2 my-3 ">
            <input className="form-control border border-dark" placeholder="Enter Movie Name ..." onChange={event => setName(event.target.value)}  />
        </div>
                      <div className="col-lg-2">
                        <select id="ddlCountry" className='form-control select-className border border-dark emselect' onChange={(e) => handleState(e.target.value)}>
                                            <option defaultValue="0">Select State</option>
                                          {
                                            state && 
                                            state !== undefined ?
                                            state.map((ctr,index) => {
                                                return(
                                                    <option key={index} value={ctr.id}>{ctr.name}</option>
                                                )
                                            })
                                            :"No State"
                                          }
                        </select>
                      </div>
                        <div className="col-lg-2">
                          <select id="ddlStates" className='form-control select-className border border-dark emselect' onChange={(e) => handleVenue(e.target.value)}>
                            <option defaultValue="0">Select Cinema </option>
                          {
                            venue && 
                            venue !== undefined ?
                            venue.map((ctr,index) => {
                                return(
                                    <option key={index} defaultValue={ctr.id}>{ctr.name}</option>
                                )
                            })
                            :"No Venue"
                          }
                          </select>
                      </div>
                        <div className="btn-group col-lg-2">
                            <button type="button" className="btn btn-outline-dark dropdown-toggle emselect" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                All Movies
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                <li><button className="dropdown-item" type="button"> New</button></li>
                                <li><button className="dropdown-item" type="button">Most Popular</button></li>
                                <li><button className="dropdown-item" type="button">Most Requested</button></li>
                                <li><button className="dropdown-item" type="button">5 Star</button></li>
                            </ul>
                        </div>
                        <div className="btn-group col-lg-2 ">
                            <input type="date" className=" rounded border border-dark emselect px-2 py-1 " id="start" name="trip-start" defaultValue="2018-07-22" min="2018-01-01" max="2023-12-31"></input>
                        </div>
                        
        </div>
        <div className="emcounterdashboardcard justify-content-center align-items-center mx-3">
        {
            posts.filter((val) =>{
                if(name === ""){
                    return val
                }
                else if(val.name.toLowerCase().includes(name.toLowerCase())){
                    return val
                }
            })
            .map((val , id)=> (
                <div className="" key={id}>
                    <Link to={`/moviedetails/${val.id}`}>
                        <div className="card emcounterdashboardcardimg"> 
                                <img src={val.img} className="card-img-top emcounterdashboardcardimage"alt="emcounterdashboardcardimage" />
                            <div className="card-body">
                                <h5 className="card-title">{val.title}</h5>
                                <h5 className="card-title">{val.price}</h5>
                                <p className="">{val.name}</p>
                                <p className="card-text">{val.pg}{" "}{val.genre}</p>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><b>Now Showing: {val.duration}</b></li>
                                </ul>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content ">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">{val.name}</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body emhomepagemodalbody">
                                                <div className="emuserhomepageimg0 ">
                                                    <img src={emmoviechair} id='110' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='111' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='112' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='113' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='114' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='115' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='116' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='117' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='118' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='119' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='120' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='121' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='122' alt='emmoviechair'  />
                                                </div>
                                                <div className="emuserhomepageimg0">
                                                    <img src={emmoviechair} id='210' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='211' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='212' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='213' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='214' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='215' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='216' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='217' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='218' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='219' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='220' alt='emmoviechair'  />
                                                </div>
                                                <div className="emuserhomepageimg0">
                                                    <img src={emmoviechair} id='310' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='311' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='312' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='313' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='314' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='315' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='316' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='317' alt='emmoviechair'  />
                                                </div>
                                                <div className="emuserhomepageimg0">
                                                    <img src={emmoviechair} id='410' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='411' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='412' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='413' alt='emmoviechair'  />
                                                    <img src={emmoviechair} id='414' alt='emmoviechair'  />
                                                </div>
                                                <div className="emticketinputdiv ">
                                                    <div className="emticketinputdiv1">
                                                        <span className="mx-2">No of tickets:</span>
                                                        <input type="number" className="emticketinput rounded border border-1 p-0.5" placeholder="0" aria-label="Username" aria-describedby="basic-addon1" />
                                                    </div>
                                                    <div className="d-flex px-3 emticketinputdiv2">
                                                        <label className="mx-2">duration:</label>
                                                        <select className="form-select" style={{height:'30px'}} id="inputGroupSelect01">
                                                            <option defaultValue>Select duration:</option>
                                                            <option defaultValue="1" className='px-1'>14:00 - 15:50</option>
                                                            <option defaultValue="2" className='px-1'>16:00 - 18:30</option>
                                                            <option defaultValue="3" className='px-1'>20:00 - 22:00</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <div className="">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-primary m-2">Proceed to Payment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
        ))
        }
        </div>
        <Footer />
        
    </div>
  );
}

export default Userhomepage;





// import React, { useState, useEffect, createContext } from "react";
// import Nav from './Nav';
// import Footer from './Footer';
// import aquaman from '../images/aquaman.png';
// import emmoviechair from '../images/emmoviechair.png';
// import justiceleague from '../images/justiceleague.png';
// import justiceleague1 from '../images/justiceleague1.png';
// import { Link, useParams } from "react-router-dom";
// // import movies from '../../movies.json';


// function Userhomepage() {

//   const states = [
//     {id:"1",name:"ABUJA"},
//     {id:"2",name:"ABIA"},
//     {id:"3",name:"AKWAIBOM"},
//     {id:"4",name:"LAGOS"},
//   ];
  
//   const statecinemalocation = [
//     {id:"1",countryId:"1",name:"Kwali"},
//     {id:"2",countryId:"1",name:"Kuje"},
//     {id:"3",countryId:"1",name:"Gwagwalada"},
//     {id:"4",countryId:"2",name:"Isiala-Ngwa North"},
//     {id:"5",countryId:"2",name:"Ohafia"},
//     {id:"6",countryId:"2",name:"Osisioma"},
//     {id:"7",countryId:"3",name:"Eket"},
//     {id:"8",countryId:"3",name:"Oron"},
//     {id:"9",countryId:"3",name:"Uyo"},
//     {id:"10",countryId:"4",name:"Amuwo-Odofin"},
//     {id:"11",countryId:"4",name:"Surulere"},
//     {id:"12",countryId:"4",name:"Lagos-Island"},
//   ];
  
//   const cities = [];
//   const [ state, setState] = useState([]);
//   const [ venue, setVenue] = useState([]);  
//   const [ posts , setPosts ] = useState([]);

//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/photos')
//         .then(res => res.json())
//         .then(data => setPosts(data));
//         setState(states)
//   },[posts])
// //   },[movies])
  
//   const handleState = (id) => {
//     const dt = statecinemalocation.filter(x => x.countryId === id);
//     setVenue(dt);
//   }
  
//   const handleVenue = (id) => {
//     const dt = cities.filter(x => x.stateId === id);
//   }

  
//   return (
//     <div>
//         <Nav />
//         <div id="carouselExampleControlsNoTouching emuserhomepageimgdiv" className="carousel slide " data-bs-touch="false">
//             <div className="">
//                 <div className=" carousel-inner">
//                     <div className="carousel-item active emuserhomepageimgdivcarousel">
//                         <img src={justiceleague} className="d-block w-100" alt="justiceleague" style={{width: '100%', height: 'auto'}}/>
//                     </div>
//                     <div className="carousel-item">
//                         <img src={justiceleague1} className="d-block w-100" alt="justiceleague1" />
//                     </div>
//                     <div className="carousel-item ">
//                     <img src={aquaman} className="d-block w-100" alt="aquaman" />
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="visually-hidden">Next</span>
//                 </button>
//             </div>
//         </div>
        
//         <div className="row mx-3 mb-3 emcoundashsear">
//                       <div className="col-lg-2">
//                         <select id="ddlCountry" className='form-control select-className border border-dark emselect' onChange={(e) => handleState(e.target.value)}>
//                                             <option defaultValue="0">Select State</option>
//                                           {
//                                             state && 
//                                             state !== undefined ?
//                                             state.map((ctr,index) => {
//                                                 return(
//                                                     <option key={index} value={ctr.id}>{ctr.name}</option>
//                                                 )
//                                             })
//                                             :"No State available"
//                                           }
//                         </select>
//                       </div>
//                         <div className="col-lg-2">
//                           <select id="ddlStates" className='form-control select-className border border-dark emselect' onChange={(e) => handleVenue(e.target.value)}>
//                             <option defaultValue="0">Select Cinema </option>
//                           {
//                             venue && 
//                             venue !== undefined ?
//                             venue.map((ctr,index) => {
//                                 return(
//                                     <option key={index} value={ctr.id}>{ctr.name}</option>
//                                 )
//                             })
//                             :"No Venue"
//                           }
//                           </select>
//                       </div>
//                         <div className="btn-group col-lg-2">
//                             <button type="button" className="btn btn-outline-dark dropdown-toggle emselect" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
//                                 All Movies
//                             </button>
//                             <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
//                                 <li><button className="dropdown-item" type="button"> New</button></li>
//                                 <li><button className="dropdown-item" type="button">Most Popular</button></li>
//                                 <li><button className="dropdown-item" type="button">Most Requested</button></li>
//                                 <li><button className="dropdown-item" type="button">5 Star</button></li>
//                             </ul>
//                         </div>
//                         <div className="btn-group col-lg-2 ">
//                             <input type="date" className=" rounded border border-dark emselect px-2 py-1 " id="start" name="trip-start" defaultValue="2018-07-22" min="2018-01-01" max="2023-12-31"></input>
//                         </div>
                        
//         </div>
//         <div className="emcounterdashboardcard justify-content-center align-items-center mx-3">
//         {/* {
//                 Movies.map((movies, id) => (
//                 <div className="" key={id}>
//                     <Link to={`/moviesdetails/${movies.id}`}>
//                         <div className="card emcounterdashboardcardimg">
//                                 <img src={movies.img} className="card-img-top emcounterdashboardcardimage" alt="emcounterdashboardcardimage" />
//                             <div className="card-body">
//                                 <h5 className="card-title">{movies.name}</h5>
//                                 <p className="">{movies.name}</p>
//                                 <p className="card-text">{movies.pg}{" "}{movies.genre}</p>
//                                 <ul className="list-group list-group-flush">
//                                     <li className="list-group-item"><b>Now Showing: {movies.duration}</b></li>
//                                 </ul>
//                                 <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
//                                 <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                                     <div className="modal-dialog modal-dialog-centered">
//                                         <div className="modal-content ">
//                                             <div className="modal-header">
//                                                 <h1 className="modal-title fs-5" id="exampleModalLabel">{movies.name}</h1>
//                                                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                                             </div>
//                                             <div className="modal-body emhomepagemodalbody">
//                                                 <div className="emuserhomepageimg0 ">
//                                                     <img src={emmoviechair} id='110' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='111' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='112' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='113' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='114' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='115' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='116' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='117' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='118' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='119' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='120' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='121' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='122' alt='emmoviechair'  />
//                                                 </div>
//                                                 <div className="emuserhomepageimg0">
//                                                     <img src={emmoviechair} id='210' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='211' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='212' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='213' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='214' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='215' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='216' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='217' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='218' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='219' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='220' alt='emmoviechair'  />
//                                                 </div>
//                                                 <div className="emuserhomepageimg0">
//                                                     <img src={emmoviechair} id='310' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='311' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='312' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='313' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='314' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='315' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='316' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='317' alt='emmoviechair'  />
//                                                 </div>
//                                                 <div className="emuserhomepageimg0">
//                                                     <img src={emmoviechair} id='410' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='411' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='412' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='413' alt='emmoviechair'  />
//                                                     <img src={emmoviechair} id='414' alt='emmoviechair'  />
//                                                 </div>
//                                                 <div className="emticketinputdiv ">
//                                                     <div className="emticketinputdiv1">
//                                                         <span className="mx-2">No of tickets:</span>
//                                                         <input type="number" className="emticketinput rounded border border-1 p-0.5" placeholder="0" aria-label="Username" aria-describedby="basic-addon1" />
//                                                     </div>
//                                                     <div className="d-flex px-3 emticketinputdiv2">
//                                                         <label className="mx-2">duration:</label>
//                                                         <select className="form-select" style={{height:'30px'}} id="inputGroupSelect01">
//                                                             <option >Select duration:</option>
//                                                             <option defaultValue="1" className='px-1'>14:00 - 15:50</option>
//                                                             <option defaultValue="2" className='px-1'>16:00 - 18:30</option>
//                                                             <option defaultValue="3" className='px-1'>20:00 - 22:00</option>
//                                                         </select>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="modal-footer">
//                                                 <div className="">
//                                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                                                     <button type="button" className="btn btn-primary m-2">Proceed to Payment</button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </Link>
//                 </div>
//             ))
//         } */}
//                 {
//                 posts.map(post => (
//                 <div className="" key={post.id}>
//                     <Link to={`/moviesdetails/${post.id}`}>
//                         <div className="card emcounterdashboardcardimg">
//                         <img src={post.thumbnailUrl} className="card-img-top emcounterdashboardcardimage" alt="emcounterdashboardcardimage" />
//                             <div className="">
//                                 <h1 className="">{post.id}</h1>
//                                 <h5 className="">{post.title}</h5>
//                                 <p className="">{post.url}</p>
//                             </div>
//                         </div>
//                     </Link>
//                 </div>
//             ))
//         }
//         </div>
//         <Footer />
           
//     </div>
//   );
// }

// export default Userhomepage;
