import React, { Component } from 'react'
import {RoomContext} from '../Context'

export default class FeaturedRoom extends Component {
    
    static contextType = RoomContext;

    render() {
        const value = this.context
        console.log(value);
        return (
            <div>
                featured rooms
            </div>
        )
    }
}
