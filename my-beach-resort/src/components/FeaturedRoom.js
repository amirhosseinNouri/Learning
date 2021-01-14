import React, { Component } from 'react'
import {RoomContext} from '../Context'

export default class FeaturedRoom extends Component {
    
    static contextType = RoomContext;

    render() {
        return (
            <div>
                featured rooms
            </div>
        )
    }
}
