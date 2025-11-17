// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Apple: [
		{
			name: "iPad（第 9 代)",
			image:
				"https://www.apple.com.cn/v/ipad/compare/ak/images/overview/ipad_9th_gen_space_gray__bmh62f2hq9iu_large.jpg",
			specs: "深空灰色 / 256GB",
			description: "拿来上学用的，A13完全够轻度游戏+日常使用了",
			link: "https://support.apple.com/zh-cn/111898",
		},
	],
	Dell: [
		{
			name: "Dell Inspiron 14 5410",
			image: "https://i.imgur.com/rjiPrOB.png",
			specs: "512GB / 16G DDR4 3200MHz / i5-11300H",
			description: "轻度游戏+学习完全够了",
			link: "https://www.dell.com/zh-hk/shop/dell-%E7%AD%86%E8%A8%98%E5%9E%8B%E9%9B%BB%E8%85%A6/inspiron-14-%E7%AD%86%E8%A8%98%E5%9E%8B%E9%9B%BB%E8%85%A6/spd/inspiron-14-5410-laptop",
		},
	],
};
