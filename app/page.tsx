"use client";
import styles from "./page.module.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from "next/link";
import React, {useState, useEffect} from "react"


export default function Home() {
  const [storedInput, setStoredInput] = useState("");
   const getInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
     setStoredInput(e.target.value)
      console.log(e.target.value)
    }
  useEffect(()=>{
   localStorage.setItem("username", storedInput)
  }, [storedInput])


  return (
  <div>
    <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src="komma2.png" alt=" Komma logo"/>
        <h1 className={`display-5 fw-bold text-body-emphasis ${styles.kommaName}`}>KOMMA NOTES</h1> 
        <div className="col-lg-6 mx-auto"> 
          <p className="lead mb-4"><strong>Remeber everything</strong> and tackle any project
          with Komma note all in one place</p> 
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"> 
                <i> input a username</i>
                <div className={styles.inputBox}>
                 <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                  >
                  <TextField  onChange={getInput} id="outlined-basic" label="username" variant="outlined"  required/>
                  </Box>
                </div>
                  <Link href="/home" className={styles.getStarted}> get STarted </Link>
                </div> 
                </div>
                 </div>
    </div> 
  );
}





