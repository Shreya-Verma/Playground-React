import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends React.Component {


  render() {

    return (<button className="ui button primary">
      <LanguageContext.Consumer>
        {(value) => value==='english' ? 'Submit': 'Vorleggen'}
      </LanguageContext.Consumer>
    </button>);
  }
}

export default Button;
