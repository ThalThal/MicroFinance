"use strict";
var router_1 = require('@angular/router');
var frmuser_component_1 = require('./frmuser.component');
var frmuserlist_component_1 = require('./frmuserlist.component');
var frmrole_component_1 = require('./frmrole.component');
var frmrolelist_component_1 = require('./frmrolelist.component');
var frmmenu_component_1 = require('./frmmenu.component');
var frmmenulist_component_1 = require('./frmmenulist.component');
var frmchangePassword_component_1 = require('./frmchangePassword.component');
var frmpager_component_1 = require('./frmpager.component');
var frmauthorization_component_1 = require('./frmauthorization.component');
var frmauthorization_list_component_1 = require('./frmauthorization-list.component');
var systemRoutes = [
    {
        path: 'user',
        component: frmuser_component_1.FrmUserComponent
    }, {
        path: 'user/:cmd',
        component: frmuser_component_1.FrmUserComponent
    }, {
        path: 'user/:cmd/:id',
        component: frmuser_component_1.FrmUserComponent
    }, {
        path: 'userList',
        component: frmuserlist_component_1.FrmUserList
    }, {
        path: 'role',
        component: frmrole_component_1.FrmRoleComponent
    }, {
        path: 'role/:cmd',
        component: frmrole_component_1.FrmRoleComponent
    }, {
        path: 'role/:cmd/:id',
        component: frmrole_component_1.FrmRoleComponent
    }, {
        path: 'roleList',
        component: frmrolelist_component_1.FrmRoleList
    }, {
        path: 'menu',
        component: frmmenu_component_1.FrmMenuComponent
    }, {
        path: 'menu/:cmd',
        component: frmmenu_component_1.FrmMenuComponent
    }, {
        path: 'menu/:cmd/:id',
        component: frmmenu_component_1.FrmMenuComponent
    }, {
        path: 'menuList',
        component: frmmenulist_component_1.FrmMenuList
    }, {
        path: 'changepassword',
        component: frmchangePassword_component_1.FrmChangePasswordComponent
    }, {
        path: 'setpager',
        component: frmpager_component_1.FrmPaginatorComponent
    }, {
        path: 'authorization',
        component: frmauthorization_component_1.FrmAuthorizationComponent
    }, {
        path: 'authorization/:cmd',
        component: frmauthorization_component_1.FrmAuthorizationComponent
    }, {
        path: 'authorization/:cmd/:id',
        component: frmauthorization_component_1.FrmAuthorizationComponent
    }, {
        path: 'authorization-list',
        component: frmauthorization_list_component_1.FrmAuthorizationListComponent
    }
];
exports.systemRouting = router_1.RouterModule.forChild(systemRoutes);
//# sourceMappingURL=rp-system.route.js.map