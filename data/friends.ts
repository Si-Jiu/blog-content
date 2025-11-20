// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "mumu的中转站",
		imgurl: "https://mumuserver.com/favicon.ico",
		desc: "mumu的代码太好用了你知道吗",
		siteurl: "https://mumuserver.com/",
		tags: ["友链"],
	},
	{
		id: 2,
		title: "Charlie的主站",
		imgurl: "https://charliehome.xx.kg/favicon.ico",
		desc: "感谢哥们的反代",
		siteurl: "https://charliehome.xx.kg/",
		tags: ["友链"],
	},
	{
		id: 3,
		title: "爱搞发明的大发明家的博客",
		imgurl: "https://blog.lhpgmc.cn/favicon.ico",
		desc: "友情链接",
		siteurl: "https://blog.lhpgmc.cn/",
		tags: ["友链"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
