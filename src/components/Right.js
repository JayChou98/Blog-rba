import React,{Component} from "react";
//引入less样式
import '../assets/css/right.less'
//引入图标组件
import {ContainerOutlined,GithubOutlined,WechatOutlined} from '@ant-design/icons';
//引入布局组件
import {Card,Row, Col,Tag} from "antd";
import {Link} from "react-router-dom";
class Right extends Component{
    render() {
        let {blogList} = this.props;
        let labels = [];
        let nameArr = [];
        blogList.map((item)=>{
            if(item.labels!==''){
                item.labels.map((item)=>{
                    if(nameArr.indexOf(item.name)===-1){
                        nameArr.push(item.name)
                        labels.push(item)
                    }
                    return true
                })
            }
            return true;
        });
        return (
            <div className='right'>
                <Card cover={<img src={require('./../assets/img/timg.jpg')} alt=''/>}>
                <Row span={1} justify='center'>
                    <div className='right_box'>
                    <img src={require('../assets/img/tx.jpg')} alt=""/>
                    </div>
                </Row>
                    <Card.Meta description={<h2>Arnold</h2>}></Card.Meta>
                    <Card.Meta description={<p>文章-{blogList.length}</p>}></Card.Meta>
                    <Card.Meta description={<p>博客已上线:{blogList.length}</p>}></Card.Meta>


                </Card>
                <Card className='right_follow' title={<h2>FOLLOW ME</h2>}>
                <Card.Meta description={
                    <Row>
                        <Col span={8}><ContainerOutlined /></Col>
                        <Col span={8}>
                            <a href='https://github.com/ChangAnMou-rba' target='_blank'>
                            <GithubOutlined />
                            </a>
                        </Col>
                        <Col span={8}><WechatOutlined /></Col>
                    </Row>
                }></Card.Meta>
                </Card>
                <Card className='right_follow' title={<h2>标签</h2>}>
                    <Card.Meta className='right_icon' description={
                        labels.map((item,index)=>{
                            return (
                                <Link key={index} to={'/cate/'+item.name}>
                                <Tag style={{borderRadius:'5px'}} color={'#'+item.color}>{item.name}</Tag>
                                </Link>
                            )
                        })
                    }></Card.Meta>

                </Card>
                <Card className='right_follow' title={<h2>最新文章</h2>}>
                    <Card.Meta description={<ul>{
                        blogList.slice(0,7).map((item,index)=>{
                            return (
                                <Link key={index} to={'/detail/'+item.number}>
                                <li>{item.title}</li>
                                </Link>
                            )
                        })
                    }
                    </ul>}></Card.Meta>

                </Card>

            </div>
        );
    }
}

export default Right