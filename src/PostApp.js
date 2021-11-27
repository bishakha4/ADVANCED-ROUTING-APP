import axios from "axios";
import { Table} from "react-bootstrap";
import {Component} from "react";
import Button from "@restart/ui/esm/Button";
// import styles from './App.css';

const API_URL = "https://jsonplaceholder.typicode.com/posts";


class PostApp extends Component {
    constructor (props) {
        super(props);
        this.state = {
            posts: [],
            userId: "",
            title: "",
            body: ""
        };
    }

// CREATE
createPosts = async () => {
    try{
        const {userId, title, body} = this.state
        const {data} = await axios.post(API_URL, {
            userId,
             title,
              body
        });
       const posts = [...this.state.posts];
       posts.push(data);
       this.setState({posts: posts, userId: "", title: "", body: ""});
    }
    catch(err) {
        console.log(err);
    }
};


//READ
getPosts = async () => {
    try{
        const {data} = await axios.get(API_URL);
       this.setState({posts:data});
    }
    catch(err) {
        console.log(err);
    }
};



//UPDATE
updatePosts = async () => {
    try{
        const {id, userId, title, body} = this.state;
        const {data} = await axios.put(`${API_URL}/${id}`, {
            userId,
             title,
              body
        });
        const posts = [...this.state.posts];
        const index = this.state.posts.findIndex(post=> post.id === id);
        posts[index] = data;
        this.setState({posts, id:"", userId: "", title: "", body: ""});
    }
    catch(err) {
        console.log(err);
    }
};


//DELETE
deletePosts = async(id) => {
    try{
       await axios.delete(`${API_URL}/${id}`);
       const posts = this.state.posts.filter((post) => post.id !== id);
       this.setState({posts});
       //removing id:5 from UI 
    }
    catch(err) {
        console.log(err);
    }
};


handleChange = ({target: {name, value}}) => {
    this.setState({[name] :value})
}

handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.id) {
        this.updatePosts();
    }
    else {
        this.createPosts();
    }   
}

editPosts = (post) => {
    this.setState({...post});
}


componentDidMount() {
    this.getPosts();
}


    render () {
        return(
            <>
                <button onClick={() => this.props.history.goBack()}>Go Back</button>
                <button onClick={() => this.props.history.goForward()}>Go Forward</button>
                <h3>Posts App</h3>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label>UserId :</label>
                        <input type = "number" name = "userId" value = {this.state.userId} onChange = {this.handleChange}/>
                    </div>
                    <br />
                    <div>
                        <label>Title :</label>
                        <input type = "text" name = "title" value = {this.state.title} onChange = {this.handleChange}/>
                    </div>
                    <br />
                    <div>
                        <label>Body :</label>
                        <input  type = "text" name = "body" value = {this.state.body} onChange = {this.handleChange}/>
                    </div>
                    <br />
                    <div>
                       <button className = "button" type = "submit">Submit</button>
                    </div>
                    <br />
                </form>

                <Table striped bordered hover size = "sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>User Id</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map(post => {
                            return (
                                <tr key = {post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.userId}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                    <td>
                                        <Button
                                            size="sm"
                                            variant = "contained"
                                            onClick={() => this.props.history.push(`/posts/${post.id}`)}
                                
                                        >
                                            View
                                        </Button>
                                        <button className = "button" onClick={() => this.editPosts(post)}>
                                            EDIT
                                        </button>
                                        <button className = "button"onClick={() => this.deletePosts(post.id)}>
                                            DELETE
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}

                    </tbody>
                </Table>
            </>
        );
        
    }
}

export default PostApp;