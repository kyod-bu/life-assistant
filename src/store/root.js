import { observable, action, makeObservable } from 'mobx';
import { createContext } from 'react';

export class AppRootStore {
    header = {
        theme: 'dark',
        logo: '',
        isShowMenu: true,
        menuProps: {},
        dropdownProps: {},
        rightLinks: [],
        userMenu: [],
    };
    leftSider = { theme: 'dark' };
    footer = { text: '@2021 kyod' };
    pageTitle = '';
    site = {
        title: '管理后台',
        keywords: '管理后台',
        description: '管理后台'
    };
    menu = [];
    initLoading = false;
    user = {};
    referrer = '';
    loginModalVisible = false;

    constructor() {
        makeObservable(this, {
            header: observable,
            leftSider: observable,
            footer: observable,
            pageTitle: observable,
            site: observable,
            menu: observable,
            initLoading: observable,
            user: observable,
            referrer: observable,
            loginModalVisible: observable,

            setHeader: action,
            setLeftSider: action,
            setFooter: action,
            setUser: action,
            setSite: action,
            setMenu: action,
            setPageTitle: action,
            setReferrer: action,
            clearMenu: action,
            setLoading: action,
            setLoginModalVisible: action,
        });
    }

    setHeader = header => this.header = { ...this.header, ...header };
    setLeftSider = leftSider => this.leftSider = { ...this.leftSider, ...leftSider };
    setFooter = footer => this.footer = { ...this.footer, ...footer };
    setUser = user => this.user = user;
    setSite = site => this.site = { ...this.site, ...site };
    setMenu = menu => this.menu = menu;
    setPageTitle = title => this.pageTitle = title;
    setReferrer = url => this.referrer = url;
    clearMenu = () => this.menu =[];
    setLoading = bool => this.initLoading = bool;
    setLoginModalVisible = bool => this.loginModalVisible = bool;
}

const AppRootContext = createContext(new AppRootStore());

export const AppRootProvider = AppRootContext.Provider;

export const AppRootConsumer = AppRootContext.Consumer;

export default AppRootContext;
