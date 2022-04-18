import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import FormResult from './FormResult';
import { Container, FormContent, Button } from "./FormStyles";


export default function Form() {

    // UseForm doesn't let the page reloads unnecessarily
    const {register, handleSubmit, formState: { errors }} = useForm();

    //Every React hook should NEVER be called inside a function, loops or conditions.
    const [name, setName] = useState('');
    const [quest, setQuest] = useState('');
    const [airspeed, setAirspeed] = useState('');    
    // Checkbox form 
    const [kittens, setKittens] = useState(false);
    const [mittens, setMittens] = useState(false);
    const [strudels, setStrudels] = useState(false);
    // Turing test:
    const [robot, setRobot] = useState('NOPE');

    

    const [showResult, setShowResult] = useState(false);

    const data = {
        name: name,
        quest: quest, 
        airspeed: airspeed,
        kittens: kittens,
        mittens: mittens,
        strudels: strudels,
        robot: robot
    }

    const openResult = () => {
        setShowResult(prev => !prev);
    }

    const onSubmit = (data) => {
        // In React Hook Form, the "e" isn't the event anymore, it is the JSON 
        // alert(JSON.stringify(data));
        openResult();
        console.log(data);
    }



  return (
    <div>
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>

                <FormContent>
                    <p className='firstTitle'>Answer me these three question</p>
                    
                    <div className="formInput questions">
                        <p>What is your name?</p>
                        <input type="text" value={name} {...register("name",  {required: true})} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="formInput questions">
                        <p>What is your quest?</p>
                        <input type="text" value={quest} {...register("quest",  {required: true})} onChange={(e) => setQuest(e.target.value)} />
                    </div>
                    <div className="formInput questions">
                        <p>What is the airspeed velocity of an unladen swallow?</p>
                        <input type="text" value={airspeed} {...register("airspeed", {required: true})} onChange={(e) => setAirspeed(e.target.value)}  />
                    </div>
                </FormContent>
                

                <FormContent>
                    <p className='secondTitle'>A few of my favourite things</p>

                    <div className="formInput">
                        <p>Whiskers on kittens</p>
                        <input type="checkbox" {...register("kittens")} checked={kittens} onChange={(e) => setKittens(e.target.checked)}/>

                    </div>
                    <div className="formInput">
                        <p>Warm woolen mittens</p>
                        <input type="checkbox" {...register("mittens")} checked={mittens} onChange={(e) => setMittens(e.target.checked)}/>
                    </div>
                    <div className="formInput">
                        <p>Crisp apple strudels</p>
                        <input type="checkbox" {...register("strudels")} checked={strudels} onChange={(e) => setStrudels(e.target.checked)}/>
                    </div>
                    
                </FormContent>
                <FormContent>
                    <p className='thirdTitle'>Turing Test</p>    

                    {/* If you write the statement '...(e) => setRobot(e.target.value) === "Hello"}', this statement turns into a condition. It compares if the state */}

                    <div className="formInput">
                        <p>I am a robot</p>
                        <input type="radio" {...register("robot", {required: true})} onChange={(e) => setRobot(e.target.value)} value="I am a robot." />
                    </div>
                    <div className="formInput">
                        <p>I am not a robot</p>
                        <input type="radio" {...register("robot", {required: true})} value="I'm not a robot." onChange={(e) => setRobot(e.target.value)}/>
                    </div>
                    
                </FormContent>
                
                {/* Error messages */}
                {(errors.robot, errors.name, errors.quest, errors.airspeed) && (
                    <div className="form_error">All form values are required to submit.</div>
                    )}
                
                <Button>Submit</Button>

                <FormResult data={data} showResult={showResult} setShowResult={setShowResult}/>
            </form>        
            
        </Container> 
    </div>
  )
}
