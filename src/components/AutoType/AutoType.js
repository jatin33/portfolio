import React,{Component} from 'react';

const hide = {
    color:'#000906'
};

const show = {
    color:'whitesmoke'
}

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
        this.intervalId = setInterval(this.handleTyping,100);
    }

    handleTyping = () => {
        let {textCharacters, currentCharacterIndex, isEditing} = this.state;
        const { text } = this.props;
        textCharacters = text.substring(0,currentCharacterIndex+1);
        currentCharacterIndex += 1;
        isEditing = !isEditing;
        if(currentCharacterIndex === text.length){
            isEditing = false;
            clearInterval(this.intervalId);
        }
        this.setState({textCharacters,currentCharacterIndex,isEditing});
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render(){
        return(
            <h2 style = {show}>{this.state.textCharacters}
            <span style = {this.state.isEditing ? show : hide}>|</span></h2>
        );
    }
}

export default AutoType;