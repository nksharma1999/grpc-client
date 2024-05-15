import React, { useEffect, useState } from 'react';
import { RandomClient } from './proto/RandomServiceClientPb';
import { PingRequest, NumberRequest } from './proto/random_pb';
// export const client = new RandomClient("http://localhost:8082");
const App = () => {
  const [pingResponse, setPingResponse] = useState('');
  const [numberResponses, setNumberResponses] = useState([]);

  useEffect(() => {
    // PingPong example
    const client = new RandomClient("http://localhost:8082");
    const pingRequest = new PingRequest();
    pingRequest.setMessage('Ping from React');
    client.pingPong(pingRequest,{},(err,result)=>{
      if(err){
        console.log("ERROR",err);
      }else{
        console.log(result.getMessage());
      }
    })
  }, []);

  return (
    <div>
      <h1>Ping Response: {pingResponse}</h1>
      <h1>Random Numbers:</h1>
      <ul>
        {numberResponses.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;


