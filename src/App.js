import React , { Suspense } from 'react';
import './App.css';
import {About} from './components/About/About';
import Particles from 'react-particles-js';
import { Switch, Route } from 'react-router-dom';
const Skills = React.lazy(() => import('./components/Skills/Skills'));
const Work = React.lazy(() => import('./components/Work/Work'));
const Project = React.lazy(() => import('./components/Projects/Projects'));

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
	   		<Route render={({location}) => {
				return (
				<Suspense fallback={<div style={{color:"white"}}>Loading...</div>}>
					<Switch location={location}>
						<Route path='/' exact component={About}/>
						<Route path='/opensource' component={Project}/>
						<Route path='/experiences' component={Work}/>
						<Route path='/skills' component={Skills}/>
					</Switch>
				</Suspense>
				)
		}}/>
      <Particles params={options}/>
    </div>
  );
}

export default App;
