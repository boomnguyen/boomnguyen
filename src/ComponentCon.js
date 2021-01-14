import logo from './logo.svg';
import './App.css';

const ComponentCon = (props) => {
  const{name, age, number} = props;
  return(
    <div>
      Hello,
      I'm {name},
      I'm {age},
      I'm from FE {number},
    </div>
  )
}

export default ComponentCon;
