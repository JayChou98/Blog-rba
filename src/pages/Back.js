import React,{Component} from "react";

import {Alert, Spin, Timeline} from 'antd';


class Back extends Component{
    changeTime(time){
        return time.slice(0,10)
    }
   render() {
       let {blogList} = this.props
       if(blogList.length>0){
       return (<div style={{backgroundColor:'white',fontSize:'18px',borderRadius:'4px',padding:'20px'}} className='back'>
           <h2>归档</h2>
           <Timeline>
               {
                   blogList.map((item)=>{
                       return (<Timeline.Item>
                           {item.title} {this.changeTime(item.created_at)}
                       </Timeline.Item>)
                   })
               }
           </Timeline>
       </div>)
        }else{
           return (<div style={{textAlign:'center'}}><Spin tip="Loading..." size="large"/>
               <Alert
                   message="页面加载中"
                   description="Please wait a moment"
                   type="info"
               /></div>)
       }
    }
}
export default Back;