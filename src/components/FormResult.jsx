import React from 'react'
import { Container, FormContent, Result} from "./FormStyles";

export default function FormResult({data, showResult, setShowResult}) {

  return (
    <div>
      {showResult && 
          <Container>
            <FormContent>
              <Result>

                <h2 className='mainTitle'>Your awnswers: </h2>

                <div className="sections">
                  <h3>Three Questions: </h3>
                  <p>Name: {data.name}</p>
                  <p>Quest: {data.quest}</p>
                  <p>Airspeed: {data.airspeed}</p>
                </div>
                
                <div className="sections">
                  <h3>My favourite things:</h3>
                  {/* The ternary function is only necessary when there's an if/else statement to be made. If the condition is between 
                  a condition to appear or null, it should only have '&&' and the 'true statement'  */}
                  {data.kittens === true && <p>Whiskers on kittens</p>}
                  {data.mittens === true && <p>Warm woolen mittens</p>}
                  {data.strudels === true && <p>Crisp apple strudels</p>}
                </div>
                

                <div className="sections">
                  <h3 >Turing test: </h3>
                  <p>{data.robot}</p>
                </div>
                

              </Result>
            </FormContent>
        </Container>
      }
        
    </div>
  )
}
