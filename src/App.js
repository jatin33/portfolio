import React from 'react';
import './App.css';
import {About} from './components/About/About';
import Particles from 'react-particles-js';
import { Switch, Route } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Project from './components/Projects/Projects';

const options = {
	    "particles": {
	        "number": {
	            "value": 260,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	};

function App() {
  return (
    <div className="App">
	   <Switch>
		   <Route path='/' exact component={About}/>
		   <Route path='/projects' component={Project}/>
		   <Route path='/work' component={Work}/>
           <Route path='/skills' component={Skills}/>
	    </Switch>
	{/* <Route render={({ location }) => {
      const { key } = location;
      return (
        <SwitchTransition>
          <CSSTransition
            key={key}
            timeout={{ enter: 300, exit: 300 }}
            classNames="page"
          >
            <Switch location={location}>
              <Route exact path="/" component={About} />
              <Route path="/work" component={Work} />
              <Route path="/projects" component={Project} />
			  <Route path="/skills" component={Skills}/>
            </Switch>
          </CSSTransition>
        </SwitchTransition>
      )
    }} /> */}
      <Particles params={options}/>
    </div>
  );
}

export default App;
