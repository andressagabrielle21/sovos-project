import React from 'react'
import { Container, FormContent} from "./FormStyles";

export default function FormResult({data, showResult, setShowResult}) {

  return (
    <div>
      {showResult ? 
          <Container>
          <FormContent>
              <h1>Form submitted!</h1>

              <h2>Three Questios: </h2>
              <p>Name: {data.name}</p>
              <p>Quest: {data.quest}</p>
              <p>Airspeed: {data.airspeed}</p>

              <h2>My favourite things:</h2>
              {data.kittens === true ? <p>Kittens</p> : null}
              {data.mittens === true ? <p>Mittens</p> : null}
              {data.strudels === true ? <p>Strudels</p> : null}

              <h2>Turing test: </h2>
              <p>{data.robot}</p>
              
          </FormContent>
        </Container>
      : null}
        
    </div>
  )
}
