import React,{Component} from 'react';
import '../AutoType/AutoType.css';

class AutoType extends Component{
    constructor(props){
        super(props);
        this.state = {
            textCharacters : '',
            currentCharacterIndex:0,
            isEditing:false
        };
        this.intervalId = 0;
    }

    componentDidMount(){
        this.intervalId = setInterval(this.handleTyping,200);
    }

    handleTyping = () => {
        let {textCharacters,currentCharacterIndex,isEditing} = this.state;
        const {text} = this.props;
        textCharacters = text.substring(0,currentCharacterIndex+1);
        currentCharacterIndex+=1;
        isEditing = !isEditing;
        if(currentCharacterIndex > text.length){
            textCharacters = '';
            currentCharacterIndex = 0;
        }
        this.setState({textCharacters,currentCharacterIndex,isEditing});
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render(){
        return(
            <h2 className='text'>{this.state.textCharacters}
            <span className={this.state.isEditing?'hide':'show'}>|</span></h2>
        );
    }
}

export default AutoType;