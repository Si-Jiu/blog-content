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
		desc: "好学长，mumu的代码太好用了你知道吗（删掉",
		siteurl: "https://mumuserver.com/",
		tags: ["友链"],
	},
	{
		id: 2,
		title: "Charlie的主站",
		imgurl: "https://devc.me/favicon.ico",
		desc: "传奇唐诗同学（Vibe Coding 导致头顶尖尖）",
		siteurl: "https://devc.me/",
		tags: ["友链"],
	},
	{
		id: 3,
		title: "爱搞发明的大发明家的博客",
		imgurl: "https://blog.lhpgmc.cn/favicon.ico",
		desc: "群友",
		siteurl: "https://blog.lhpgmc.cn/",
		tags: ["友链"],
	},
	{
		id: 4,
		title: "老主页",
		imgurl: "https://legacy.sijiu49.moe/favicon.ico",
		desc: "纯乱写",
		siteurl: "https://legacy.sijiu49.moe/",
		tags: ["我的"],
	},
	{
		id: 5,
		title: "老主页 Neo",
		imgurl: "https://legacy-neo.sijiu49.moe/favicon.ico",
		desc: "纯乱写",
		siteurl: "https://legacy-neo.sijiu49.moe/",
		tags: ["我的"],
	},
	{
		id: 6,
		title: "Steam 评测生成器汉化版",
		imgurl: "https://steam-review.sijiu49.moe/favicon.ico",
		desc: "纯乱写",
		siteurl: "https://steam-review.sijiu49.moe/",
		tags: ["我的"],
	},
	{
		id: 7,
		title: "服务在线监测",
		imgurl: "https://uptime.sijiu49.moe/favicon.ico",
		desc: "我的服务监测",
		siteurl: "https://uptime.sijiu49.moe/",
		tags: ["我的"],
	},
	{
		id: 8,
		title: "友站在线监测",
		imgurl: "https://uptime.sijiu49.moe/favicon.ico",
		desc: "监测友链的在线状态",
		siteurl: "https://uptime.sijiu49.moe/status/friends",
		tags: ["我的"],
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
