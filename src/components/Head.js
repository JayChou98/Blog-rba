import React,{Component} from "react";

import {NavLink} from "react-router-dom";

import {Affix,Row,Col} from 'antd'
import {HomeOutlined,SnippetsOutlined} from '@ant-design/icons';
class Head extends Component{
    render() {
        return(
                <Affix className='head' offsetTop={0}>
                    <Row justify='end'>
                        <Col lg={{span:2}} sm={{span:12}} xs={{span:12}} >
                            <NavLink to='/host'>
                                    <HomeOutlined />
                              首页</NavLink>
                        </Col>
                        <Col lg={{span:2}} sm={{span:12}} xs={{span:12}} >
                            <NavLink to='/back'>
                                <SnippetsOutlined />归档</NavLink>
                        </Col>
                    </Row>
                </Affix>
        )
    }
}
export default Head