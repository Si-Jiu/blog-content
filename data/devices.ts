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
	手机: [
		{
			name: "iPhone 7 Plus",
			image:
				"https://www.apple.com.cn/v/iphone/compare/ak/images/overview/compare_iphone7plus_black__ejjh56vz0i2q_large.jpg",
			specs: "黑色 / 128GB",
			description: "日常用，使用 iOS15，已用 Dopamine 越狱",
			link: "https://support.apple.com/zh-cn/111953",
		},
	],
	平板: [
		{
			name: "iPad 9",
			image:
				"https://www.apple.com.cn/v/ipad/compare/ak/images/overview/ipad_9th_gen_space_gray__bmh62f2hq9iu_large.jpg",
			specs: "深空灰色 / 256GB",
			description: "上学/日常用，使用 iPadOS26",
			link: "https://support.apple.com/zh-cn/111898",
		},
	],
	笔记本: [
		{
			name: "Dell Inspiron 14 5410",
			image: "https://i.imgur.com/rjiPrOB.png",
			specs: "512GB / 16G DDR4 3200MHz / i5-11300H / MX 450 2GB",
			description: "日常用，使用 Arch Linux",
			link: "https://www.dell.com/zh-hk/shop/dell-%E7%AD%86%E8%A8%98%E5%9E%8B%E9%9B%BB%E8%85%A6/inspiron-14-%E7%AD%86%E8%A8%98%E5%9E%8B%E9%9B%BB%E8%85%A6/spd/inspiron-14-5410-laptop",
		},
	],
	键盘: [
		{
			name: "Aula F87 Pro",
			image: "https://aulagear.com/cdn/shop/files/AULA_F87_Pro_Black_Grey_Side_Printed_RGB.jpg",
			specs: "黑灰色 / 三模 / RGB",
			description: "便宜好使",
			link: "https://www.aulacn.com/product-detail/f87pro",
		},
	],
	耳机: [
		{
			name: "Rapoo VH850",
			image: "https://rpw.rapoo.cn/goods/gallery/1729825581933.jpg",
			specs: "三模 / RGB",
			description: "便宜好使",
			link: "https://www.rapoo.cn/product/819",
		},
	],
	其它: [
		{
			name: "Raspberry Pi 5",
			image: "https://assets.raspberrypi.com/static/8f6eca535dbb23a21eb41a748050e3a0/f7ad0/16gb.webp",
			specs: "4GB RAM / 64GB SD",
			description: "服务器，使用 Raspberry Pi OS Lite",
			link: "https://www.raspberrypi.com/products/raspberry-pi-5/",
		},
	],
};
