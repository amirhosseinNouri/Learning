import React, { Component } from 'react'
import {RoomContext} from '../Context'
import Loading from './Loading'
import Room from '../components/Room'

export default class FeaturedRoom extends Component {
    
    static contextType = RoomContext;

    render() {
        return (
            <div>
                featured rooms
                <Room></Room>
                <Loading></Loading>
            </div>
        )
    }
}
