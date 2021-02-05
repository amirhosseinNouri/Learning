import React , {useState} from 'react'
import DropDown from './Dropdown'

const options = [
    {label : 'Afrikaans' ,value : 'af'},
    {label : 'Arabic' ,value : 'ar'},
    {label : 'Hindi' ,value : 'hi'}
]

export default function Translate() {
    const [language , setLanguage ] = useState(options[0])
    return (
        <div className="translate">
            <DropDown options={options} open={language} setOpen={setLanguage}></DropDown>
            
        </div>
    )
}
