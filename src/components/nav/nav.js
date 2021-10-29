import React from "react";
import './nav.css'
import icon  from "../../img/icon.png";
import cameraicon from "../../img/cameraicon.png";
import { BrowserRouter as Router ,Switch, Route, Link } from "react-router-dom";
import PostView from "../post-view/post-view";
import Profile from "../profile/profile";
import CreatePost from "../create-post/create-post";
class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            profilePage:false,
            postPage:true,
            createPost:false
        }
    }
    changeComponent=function(componentName) {
        if(componentName==="Profile"){
            this.setState({
                profilePage:true,
                postPage:false,
                createPost:false
            })
        }
        else if(componentName==="Home"){
            this.setState({
                profilePage:false,
                postPage:true,
                createPost:false
            })
        }
        else if(componentName==="CreatePost"){
            this.setState({
                profilePage:false,
                postPage:false,
                createPost:true
            })
        }
    }
    
    render(){
        return(
            <div className="container">
                <div className="nav">
                
                <div>
                    <span><img src={icon} alt="error" height="50px" width="50px" /></span>
                </div>
                <div className="nav-text">
                    <span className="insta-clone">InstaClone</span>
                </div>
                <div className="push">
                    {(this.state.postPage || this.state.createPost) && <button className="btn btn-light" onClick={()=>{this.changeComponent("Profile")}}>Profile</button>}
                    {(this.state.profilePage || this.state.createPost) && <button className="btn btn-light" onClick={()=>{this.changeComponent("Home")}} >Home</button>}
                    <span><img src={cameraicon} alt="error" height="50px" width="50px" onClick={()=>{this.changeComponent("CreatePost")}}  /></span>
                </div>

                </div>
                { this.state.postPage && <PostView/>}
                { this.state.profilePage && <Profile/>}
                { this.state.createPost && <CreatePost/>}
                


            </div>
            
        );
    }
}
export default Nav