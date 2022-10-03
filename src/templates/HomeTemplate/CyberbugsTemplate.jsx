import React from "react";
import { Route } from "react-router-dom";
import ContentMain from "../../component/Main/ContentMain";
import HeaderMain from "../../component/Main/HeaderMain";
import InfoMain from "../../component/Main/InfoMain";
import Menu from "../../component/Menu";
import InfoModal from "../../component/Modal/InfoModal";
import Sidebar from "../../component/Sidebar";
import '../../index.css';

export const CyberbugsTemplate = (props) => {
    const { Component, ...restParam } = props;
    return <Route {...restParam} render={(propsRoute) => {
        return <>
            <div className="jira">
                <Sidebar />
                <Menu />
                <Component {...propsRoute} />
                <InfoModal />
            </div>
        </>
    }}
    />
}