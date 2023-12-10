//HEY TODAY WE ARE LOOKING ON HTTP REQUEST USING AXIOS LIBRARY
//STEP 1 : ADD THE AXIOS LIBRARY FROM NPM
//STEP 2 : IMPORT THE AXIOS LIBRARY TO THE APP.TSX
//STEP 3 : USE THE END POINT URL, HERE I AM USING A FAKE URL FROM JSONPLACEHOLDER

import axios from "axios";
import { useState } from "react";


const App = () => {
  const [getData, setGetData] = useState([])

  //GET METHOD
  const getMethod = async () => {
    await axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data, response.status);
      setGetData(response.data);
    }).catch((err) => {
      alert(err);
    })
  }

  //POST METHOD
  const postMethod = async () => {
    await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'CODE',
      body: 'THIS IS THE HTTP REQUEST USING AXIOS VIDEO',
      userId: 8,
    }).then((response) => {
      console.log(response.data, response.status);
    }).catch((err) => {
      alert(err);
    })
  }
  //THE DATA IS ADDED SUCCESSFULLY TO POSTS END POINT

  //PUT METHOD ( UPDATING THE FIRST DATA OF POST END POINT )
  const putMethod = async () => {
    await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
      id: 1,
      title: 'code',
      body: 'code',
      userId: 1,
    }).then((response) => {
      console.log(response.data, response.status);
    }).catch((e) => {
      alert(e);
    })
  }
  //THE FIRST DATA OF POST END POINT IS UPDATED SUCCESSFULLY

  //DELETE METHOD ( DELETING THE FIRST DATA OF POST END POINT )
  const deleteMethod = async () => {
    await axios.delete("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
      console.log(response.data, response.status);
    }).catch((err) => {
      alert(err);
    })
  }
  //THE FIRST DATA OF POST END POINT IS DELETED SUCCESSFULLY
  // HOORRAAAY , YOU HAVE LEARNED THE CRUD OPERATION USING AXIOS
  //THANKS FOR WATCHING THE VIDEO.


  return (
    <div>
      <button onClick={getMethod}>GET</button>
      <button onClick={postMethod}>POST</button>
      <button onClick={putMethod}>PUT</button>
      <button onClick={deleteMethod}>DELETE</button>
    </div>
  )
}

export default App
