import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import PageTitle from "./components/PageTitle/PageTitle";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {ControlledOnOff} from './components/ControlledOnOff/ControlledOnOff';


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [switchState, setSwitchState] = useState<boolean>(false)


  return (
    <div className={"App"}>
      {/*<PageTitle title={"This is APP component"} />*/}
      {/*<PageTitle title={"My friends"} />*/}
      {/*Article 1*/}

      {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
      {/*<Accordion titleValue={"Users"}*/}
      {/*           collapsed={accordionCollapsed}*/}
      {/*           onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}*/}
      {/*/>*/}

        {/*<UnControlledAccordion titleValue={"Menu"} />*/}
        {/*<UnControlledAccordion titleValue={"Users"} />*/}
      Article 22

        {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
        {/*<UnControlledRating />*/}

      <OnOff onChange={setSwitchState} /> {switchState.toString()}
      {/*<ControlledOnOff value={switchState} onClick={setSwitchState} />*/}
    </div>
  );
}

export default App;




