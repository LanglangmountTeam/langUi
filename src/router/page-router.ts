import lbuttondoc from '../../packages/lbutton/doc/doc.md';
import licon from '../../packages/licon/doc/doc.md';
import ltable from '../../packages/ltable/doc/doc.md';
import lgrid  from '../../packages/lgrid/doc/doc.md';
import lprogress from '../../packages/lprogress/doc/doc.md';
import ldivider from '../../packages/ldivider/doc/doc.md';
export default[
	{
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
				name:"表格",
				component:ltable,
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
			}
		]
	}
]