import React,{Component} from "react";

//widthRouter 解决获取不到params的问题
import {Link, withRouter} from 'react-router-dom'
//引入用到的antd组件
import {Alert, Spin,Tag} from "antd";


//引入less样式
import '../assets/css/detail.less';

//引入marked 把markdown文件转义
import marked from 'marked';
//引入marked高亮样式改变code背景
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'
hljs.initHighlightingOnLoad()

marked.setOptions({ // marked 设置
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
});
marked.setOptions({
    highlight: function (code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(lang, code, true).value;
        } else {
            return hljs.highlightAuto(code).value;
        }
    }
})

class Detail extends Component{
    constructor(props) {
        super(props);
        let detail = null;
        let number =Number(this.props.match.params.number)
        this.props.blogList.map((item)=>{
            if(item.number === number){
                detail = item
            }
            return true;
        });

        this.state={
            detail
        }
    }

    // static getDerivedStateFromProps(){
    //     window.scrollTo(0,0);
    //     return true;
    // }

    //模板将要接受props数据时，将detail重新赋值
    componentWillReceiveProps(nextProps, nextContext) {
        let detail = null;
        let number =Number(nextProps.match.params.number)
        nextProps.blogList.map((item)=>{
            if(item.number ===number){
                detail = item;
            }
            return true;
        });
        console.log(typeof detail)
        this.setState({
            detail
        })
    }

    //截取时间
    changeTime(time){
        return time.slice(0,10)
    }

    render() {
        let {detail} = this.state;
        if(detail){
            let markedHtml = marked(detail.body);
            return (
                <div className='detail'>
                    <h1>{detail.title}</h1>
                    <pre>发表于:{this.changeTime(detail.created_at)}  标签:{
                        detail.labels.map((tag,index)=>{
                            return (
                                <Link key={index} to={'/cate/'+tag.name}>
                                    <Tag style={{borderRadius:'5px'}} color={'#' + tag.color} key={index}>{tag.name}</Tag>
                                </Link>
                            )
                        })
                    }</pre>
                    <div className='detail_marked' dangerouslySetInnerHTML={{__html:markedHtml}}/>

                </div>
            )
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

export default withRouter(Detail)