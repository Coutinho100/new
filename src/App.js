import React,{useState} from 'react';
import Search from "./Search";
import Results from './Results';
import Popup from './Popup';
import axios from "axios"
import './App.css';

function App() {

  const [state,setState]=useState({
    movie:"",
    result:[],
    selected:{}
  })
  const api="http://www.omdbapi.com/?apikey=d8ed8447";
  function search(e){
    if(e.key==="Enter"){
      axios(api +"&s=" + state.movie).then(({data})=>{
        let movies=data.Search;
        console.log(movies)
        console.log(data)
        setState(pre=>{
          return {
            ...pre,result:movies
          }
        })
      })
      


    }
  }
  console.log(state)

  function closePopup(){
    setState(pre=>{
      return{
        ...pre,selected:{}
      }
    })
  }
  function openPopup(id){
    console.log("IDD",id)
    axios(api +"&i=" + id).then(({data})=>{
      console.log("datas",data)
      setState(pre=>{
        return{...pre,selected:data}
      })

    })
  }

  function handleInput(e){
  const { value}=e.target;
  setState(pre=>{
return {...pre,movie:value}
  })
  }
  return (



    <>
    <div className="header">
      <h1>
      MOVIEDB
      </h1>
      </div>
      <Search search={search}  handleInput={handleInput}/>
      <Results result={state.result} openPopup={openPopup}/>
    
      {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
    </>
    
  );
  }


export default App;
