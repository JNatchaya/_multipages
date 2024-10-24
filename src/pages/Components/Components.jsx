import './Components.css';

import Counter from '../../components/Counter/Counter';
import Timer from '../../components/Timer/Timer';
import Add from '../../components/Add/Add';
import Temperatures from '../../components/Temperatures/Temperatures';
// style
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
function Components() {
  return <div className='components-container'>
    
  <h1><span class="badge rounded-pill text-bg-dark">REACT COMPONENTS</span></h1>
  <div className='components-counter'>
    <div className='counter-timer'>
    <Counter />
    <Timer />
    </div>
    <div className='add'>
    <Add />
    </div>
    <div className='temperatures'>
    <Temperatures />
    </div>
    </div>  
    <h2><span class="badge rounded-pill text-bg-light">นางสาว ณัฐชยา ตั้งมั่น 66023796</span></h2>
</div>;
}

export default Components;