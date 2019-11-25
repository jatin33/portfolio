import React,{Component} from 'react';
import '../AutoType/AutoType.css';

class AutoType extends Component{
    constructor(props){
        super(props);
        this.state = {
            textCharacters : '',
            currentCharacterIndex:0
        };
        this.intervalId = 0;
    }

    componentDidMount(){
        this.intervalId = setInterval(this.handleTyping,400);
    }

    handleTyping = () => {
        let {textCharacters,currentCharacterIndex} = this.state;
        const {text} = this.props;
        textCharacters = text.substring(0,currentCharacterIndex+1);
        currentCharacterIndex+=1;
        if(currentCharacterIndex > text.length){
            textCharacters = '';
            currentCharacterIndex = 0;
        }
        this.setState({textCharacters,currentCharacterIndex});
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render(){
        return(
            <h2 className='text'>{this.state.textCharacters}</h2>
        );
    }
}

export default AutoType;