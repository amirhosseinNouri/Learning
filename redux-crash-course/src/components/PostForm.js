import React from 'react'

export default function PostForm() {
    const [title, setTitle] = React.useState()
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
