import React from 'react';
import HeaderStyling from './HeaderStylign';
import Img from './RandomTacos.jpg';



class Header extends React.Component {
    render (){
        return (
            <HeaderStyling>
                <img src={Img}></img>
            </HeaderStyling>
        )
    }
}
export default Header