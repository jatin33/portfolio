import React,{Component} from 'react';
import './AnimatedBackground.css';

class AnimatedBackground extends Component {
    constructor(props){
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount(){

    }

    Circle = (x,y,dx,dy,color)=>{
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }

    init = ()=>{

    }

    render() {
        return (
            <div>
                hello
                <canvas ref={this.canvasRef}></canvas>
            </div>
        );
    }
}

export default AnimatedBackground;