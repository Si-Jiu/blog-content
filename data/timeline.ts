// Timeline data configuration file
// Used to manage data for the timeline page

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // If empty, it means current
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
	showDuration?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "school-robotics-team",
		title: "学校机器人队",
		description: "正在学习开发水底机器人的编程部分和电子部分",
		type: "education",
		startDate: "2025-08-20",
		location: "香港",
		organization: "XX中学",
		skills: ["Arduino", "C++"],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
	{
		id: "primary-school",
		title: "小学",
		description: "各种尬到爆炸的黑历史都发生在这",
		type: "education",
		startDate: "2018-09-01",
		endDate: "2024-07-12",
		location: "广东 广州",
		organization: "XX街第X小学",
		icon: "material-symbols:school",
		color: "#2563EB",
	},
	{
		id: "secondary-school",
		title: "中学",
		description: "目前的教育阶段",
		type: "education",
		startDate: "2024-09-01",
		location: "香港",
		organization: "XX中学",
		icon: "material-symbols:school",
		color: "#2563EB",
	},
	{
		id: "csp-j-2024",
		title: "CSP-J 2024",
		description: "160分 三等奖",
		type: "achievement",
		startDate: "2024-10-26",
		endDate: "2024-10-26",
		location: "香港",
		organization: "XX中学",
		icon: "material-symbols:emoji-events",
		color: "#2563EB",
		showDuration: false,
	},
	{
		id: "csp-j-2025",
		title: "CSP-J 2025",
		description: "255分 二等奖",
		type: "achievement",
		startDate: "2025-11-01",
		endDate: "2025-11-01",
		location: "香港",
		organization: "XX中学",
		icon: "material-symbols:emoji-events",
		color: "#2563EB",
		showDuration: false,
	},
	{
		id: "first-programming-experience",
		title: "首次编程经验",
		description: "第一次接触代码，学习Python基本语法",
		type: "education",
		startDate: "2021-01-01",
		endDate: "2021-01-01",
		icon: "material-symbols:code",
		location: "广东 广州",
		organization: "个人",
		color: "#7C3AED",
		showDuration: false,
	},
	{
		id: "first-oi-experience",
		title: "首次OI经验 - CSP-J 2023",
		description: "倒在了初赛",
		type: "education",
		startDate: "2023-09-16",
		endDate: "2023-09-16",
		icon: "material-symbols:code",
		location: "广东 广州",
		organization: "XX街第X小学",
		color: "#7C3AED",
		showDuration: false,
	},
];

// Get timeline statistics
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// Get timeline items by type
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get featured timeline items
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get current ongoing items
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// Calculate total work experience
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
