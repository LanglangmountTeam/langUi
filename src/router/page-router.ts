import index from '../views/index.vue';
import home from '../views/home.vue';
import lbuttondoc from '../../packages/lbutton/doc/doc.md';
import licon from '../../packages/licon/doc/doc.md';
import ltable from '../../packages/ltable/doc/doc.md';
import llist from '../../packages/llist/doc/doc.md';
import lavatar from '../../packages/lavatar/doc/doc.md';
import ldialog from '../../packages/ldialog/doc/doc.md';
import ldrawer from "../../packages/drawer/doc/doc.md";
import lmessage from "../../packages/message/doc/doc.md";
import ldropdown from "../../packages/dropDown/doc/doc.md";
import lgrid  from '../../packages/lgrid/doc/doc.md';
import lprogress from '../../packages/lprogress/doc/doc.md';
import ldivider from '../../packages/ldivider/doc/doc.md';
import lbreadcrumb from "../../packages/breadcrumb/doc/doc.md";
import lmenu from "../../packages/menu/doc/doc.md";
export default[
	{
		path:"/",
		name:"index",
		component:index,
	},
	{
		path:"/home",
		name:"home",
		component:home,
		children:[
			{
				path:"",
				name:"button 按钮",
				component:lbuttondoc,
			},
			{
				path:"licon",
				name:"icon 图标",
				component:licon,
			},{
				path:"ltable",
				name:"table 表格",
				component:ltable,
			},
			{
				path:"llist",
				name:"list 列表",
				component:llist,
			},
			{
				path:"lavatar",
				name:"avatar 头像",
				component:lavatar,
			},
			{
				path:"ldialog",
				name:"dialog 对话框",
				component:ldialog,
			},
			{
				path:"lgrid",
				name:"grid 布局",
				component:lgrid,
			},
			{
				path:"lprogress",
				name:"progress 进度条",
				component:lprogress,
			},
			{
				path:"ldivider",
				name:"Divider 分割线",
				component:ldivider
			},
			{
				path:"lbreadcrumb",
				name:"breadcrumb 面包屑",
				component:lbreadcrumb
			},
			{
				path:"lmenu",
				name:"menu 菜单",
				component:lmenu
			},
			{
				path:"ldrawer",
				name:"drawer 抽屉",
				component:ldrawer
			},
			{
				path:"ldropdown",
				name:"dropdown 下拉菜单",
				component:ldropdown
			},
			{
				path:"lmessage",
				name:"message 消息",
				component:lmessage
			},
		]
	}
]