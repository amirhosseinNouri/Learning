import React, { Component } from 'react'

export default class PostForm extends Component {
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form>
                    <div>
                        <label htmlFor="title">Title</label> <br/>
                        <input type="text"/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="body">Body</label> <br/>
                        <textarea name="body" id="body" cols="30" rows="10"></textarea>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
