import React,{Component} from 'react';
import styled from 'styled-components';

const hide = 'hide';
const show = 'show';

const AutoTypeText = styled.div`
    & .${hide}{
        color:#757575;
        }
    & .${show}{
        color:whitesmoke;
        height:1em;
    }
`;

AutoTypeText.hide = hide;
AutoTypeText.show = show;

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
            <h2 className={AutoTypeText.show}>{this.state.textCharacters}
            <span className={this.state.isEditing?AutoTypeText.show:AutoTypeText.hide}>|</span></h2>
        );
    }
}

export default AutoType;