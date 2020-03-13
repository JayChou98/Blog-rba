import React,{Component} from 'react';
import './assets/css/app.less';

import {BrowserRouter as Router} from 'react-router-dom'

import { Row, Col} from "antd";

// import axios from "axios";
//引入组件
import Head from "./components/Head";
import Content from './router/Content'
import Right from "./components/Right";
import Helmet from './components/helmet'
//引入内部数据
import list from './data'

const listData = list;
class App extends Component{
    constructor() {
        super();
            this.state = {
                blogList:[]
            }


    }
    componentDidMount() {
        // axios.get('https://api.github.com/repos/Will0319/blog/issues').then(res => {
        //     this.setState({
        //         blogList: res.data
        //     })
        // })
        setTimeout(()=>{
            this.setState({
                blogList:listData
            })
        },1000)

    }
    render() {
        let {blogList} = this.state;
        blogList = blogList.filter((item)=>{
            return item.user.login==='Will0319';
        });
        return (
            <div className="App">
                <Helmet></Helmet>
                <div className='bg'></div>
                <Router>
                    <Head></Head>
                    <div className='container'>
                        <Row justify='center' gutter={40}>
                            <Col sm={{span:16}}  md={{span:16}} lg={{span:13}} xl={{span:12}}>
                                <Content blogList={blogList} />
                            </Col>
                            <Col sm={{span:8}} md={{span:6}} lg={{span:5}} xl={{span:4}}>
                                <Right blogList={blogList}></Right>
                            </Col>
                        </Row>
                    </div>
                    <div className='Footer'>
                        <Row justify='center'>
                            <Col sm={{span:24}}>Created@ChangAnMou-rba</Col>
                        </Row>
                    </div>
                </Router>
            </div>

        );
    }
}

export default App;
