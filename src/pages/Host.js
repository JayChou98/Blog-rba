import React, {Component} from "react";

import {Card,Tag,Pagination,Spin,Alert} from "antd";

import {CalendarOutlined,TagsOutlined} from '@ant-design/icons';

import {Link} from 'react-router-dom'


import '../assets/css/host.less'

export default class Host extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            currentIndex:1,
            pageSize: 8
        }
        this.onChange=this.onChange.bind(this)
    }
    onChange(page){
        this.setState({
            currentIndex: page
        })
    }
    changeTime(time){
        return time.slice(0,10)
    }
    render() {
        let {blogList} = this.props;
        let {currentIndex,pageSize} = this.state
        if(blogList.length>0){
        return (
            <div className='host'>
                {
                    blogList.slice(pageSize*(currentIndex-1),pageSize*currentIndex).map((blog, index) => {
                        return (
                            <Card key={index} hoverable={true} title={<div><Link to={'/detail/'+blog.number}>{blog.title}</Link></div>}>
                                <Card.Meta description={<div>
                                    <span><CalendarOutlined /> {this.changeTime(blog.created_at)}</span> <TagsOutlined />
                                    {
                                        blog.labels.map((tag, index) => {
                                            return (
                                                <Link key={index} to={'/cate/'+tag.name}>
                                                <Tag style={{borderRadius:'5px'}} color={'#' + tag.color} key={index}>{tag.name}</Tag>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                                }>
                                </Card.Meta>
                                <Card.Meta className='host_content' description={blog.body}></Card.Meta>
                            </Card>
                        )
                    })
                }
                <div>{
                    blogList.length>pageSize?<Pagination defaultCurrent={currentIndex} defaultPageSize={pageSize} total={blogList.length} onChange={this.onChange} />:''
                }
                </div>
            </div>
        );
        }else{
            return (
                <div style={{textAlign:'center'}}><Spin tip="Loading..." size="large"/>
                    <Alert
                        message="页面加载中"
                        description="Please wait a moment"
                        type="info"
                    /></div>
            )
        }
    }
}