import React from 'react'

class Popular extends React.Component {
        
    constructor(props) {
        super(props)
        this.state = {
            selectedLanguage: 'All'
        }

    this.updateLanguage = this.updateLanguage.bind(this) // for correct this binding in func invocation
    }
    // create new method to update state of languages
    updateLanguage(lang) {
        this.setState(() =>
            ({selectedLanguage: lang})
        )
    }
    render() {
        const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']
        // console.log('before func invoke', this)
        return(
            <ul className="languages">
                {languages.map(lang => 
                    <li
                        style={lang === this.state.selectedLanguage ? {color: '#d0021b'} : null }
                        onClick={this.updateLanguage.bind(null, lang)}
                        key={lang}
                    >
                        {lang} 
                    </li>
                , this)}
            </ul>
        )
    }
}
export default Popular