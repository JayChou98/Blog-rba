import React,{Component} from "react";

import {Route,Switch,Redirect} from 'react-router-dom'

import Host from "../pages/Host";
import Detail from '../pages/Detail'
import Back from "../pages/Back";
import Cate from '../pages/Cate'

export default class Content extends Component{
    render() {
        let {blogList} = this.props
        return (
                <Switch>
                    <Route path='/Blog-rba' exact>
                        <Redirect to='/host'></Redirect>
                    </Route>
                    <Route path='/host' render={()=>{return<Host blogList={blogList} />}}></Route>
                    {/*用render方式能够传递数据，但是number的值在params会获取不到*/}
                    <Route path='/detail/:number' render={()=>{return<Detail blogList={blogList} />}}></Route>
                    <Route path='/back' render={()=>{return <Back blogList={blogList}></Back>}}></Route>
                    <Route path='/cate/:name' render={()=>{return <Cate blogList={blogList}></Cate>}}></Route>
                </Switch>
        )
    }
}