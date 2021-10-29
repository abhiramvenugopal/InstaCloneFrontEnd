import React from "react";
import './profile.css'
import { getToken } from "../../utils/authOperations";
import axios from "axios";
class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            posts:[],
            value:"hello"
        }
        
    }
    componentDidMount(){
        this.getPostValues()
        this.getPostValues=this.getPostValues.bind(this)
    }
    self=this;
    
    getPostValues=()=>{
        let token=getToken()
        let header={Authorization:"bearer "+token}
        axios.get('http://localhost:3000/api/v1/posts/myposts',{headers:header})
        .then(function (response) {
            console.log(response)
            this.setState({posts:response.data.posts})
        }.bind(this))
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }
    
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-pic">
                            <img src="/logo192.png" alt="error" />
                            <div>
                                <span>Abhiram Venugopal</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 row">
                        <div className="col-md-4 profile-details">
                            <span>
                                2
                            </span>
                            <span>
                                Posts
                            </span>

                        </div>
                        <div className="col-md-4 profile-details">
                            <span>
                                5
                            </span>
                            <span>
                                Followers
                            </span>

                        </div>
                        <div className="col-md-4 profile-details">
                            <span>
                                23
                            </span>
                            <span>
                                Following
                            </span>

                        </div>

                    </div>

                </div>
                <hr />
                <hr />
                <div className="posts">
                    
                    {this.state.posts.map((post)=>{
                        return(
                            <div className="col-md-4 post">
                                <img src={post.PostImage} className="post-img" alt="image_not_found" />
                            </div>
                        )

                    })}
                    

                </div>
            </div>
        );
    }
}
export default Profile