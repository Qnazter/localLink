//#region src/lib/mock-data.ts
var avatars = [
	"https://i.pravatar.cc/200?img=12",
	"https://i.pravatar.cc/200?img=32",
	"https://i.pravatar.cc/200?img=47",
	"https://i.pravatar.cc/200?img=15",
	"https://i.pravatar.cc/200?img=23",
	"https://i.pravatar.cc/200?img=51",
	"https://i.pravatar.cc/200?img=58",
	"https://i.pravatar.cc/200?img=68"
];
var providers = [
	{
		id: "p1",
		name: "Somchai P.",
		nameTh: "สมชาย ป.",
		skill: "Plumber",
		skillKey: "svc.plumbing",
		rating: 4.9,
		reviews: 184,
		distanceKm: 1.2,
		pricePerHour: 350,
		verified: true,
		aiPick: true,
		experience: 8,
		languages: ["TH", "EN"],
		avatar: avatars[0],
		bio: "Friendly plumber serving Sukhumvit for 8 years. Specializes in leaks, water heaters, and bathroom remodels.",
		bioTh: "ช่างประปาในซอยสุขุมวิทมา 8 ปี ชำนาญงานท่อรั่ว เครื่องทำน้ำอุ่น และห้องน้ำ",
		availableToday: true
	},
	{
		id: "p2",
		name: "Anucha K.",
		nameTh: "อนุชา ก.",
		skill: "Electrician",
		skillKey: "svc.electrical",
		rating: 4.8,
		reviews: 122,
		distanceKm: 2.4,
		pricePerHour: 450,
		verified: true,
		aiPick: false,
		experience: 12,
		languages: ["TH"],
		avatar: avatars[1],
		bio: "Licensed electrician. Wiring, breakers, AC installation.",
		bioTh: "ช่างไฟฟ้ามีใบอนุญาต รับเดินสาย ติดตั้งเบรกเกอร์และแอร์",
		availableToday: true
	},
	{
		id: "p3",
		name: "Naree S.",
		nameTh: "นารี ส.",
		skill: "Cleaner",
		skillKey: "svc.cleaning",
		rating: 5,
		reviews: 240,
		distanceKm: .8,
		pricePerHour: 250,
		verified: true,
		aiPick: true,
		experience: 5,
		languages: ["TH", "EN"],
		avatar: avatars[2],
		bio: "Deep cleaning specialist. Eco-friendly products, pet safe.",
		bioTh: "ผู้เชี่ยวชาญทำความสะอาดเชิงลึก ใช้น้ำยาที่ปลอดภัยต่อสัตว์เลี้ยง",
		availableToday: true
	},
	{
		id: "p4",
		name: "Wichai T.",
		nameTh: "วิชัย ต.",
		skill: "Gardener",
		skillKey: "svc.gardening",
		rating: 4.7,
		reviews: 88,
		distanceKm: 3.1,
		pricePerHour: 300,
		verified: true,
		aiPick: false,
		experience: 15,
		languages: ["TH"],
		avatar: avatars[3],
		bio: "Garden design, pruning, and weekly maintenance.",
		bioTh: "ออกแบบสวน ตัดแต่งกิ่ง และดูแลรายสัปดาห์",
		availableToday: false
	},
	{
		id: "p5",
		name: "James L.",
		nameTh: "เจมส์ ล.",
		skill: "Handyman",
		skillKey: "svc.repair",
		rating: 4.6,
		reviews: 64,
		distanceKm: 1.9,
		pricePerHour: 400,
		verified: false,
		aiPick: true,
		experience: 6,
		languages: ["EN", "TH"],
		avatar: avatars[4],
		bio: "Furniture assembly, mounting, small repairs.",
		bioTh: "ประกอบเฟอร์นิเจอร์ ติดผนัง งานซ่อมเล็กน้อย",
		availableToday: true
	},
	{
		id: "p6",
		name: "Ploy R.",
		nameTh: "พลอย ร.",
		skill: "Mover",
		skillKey: "svc.moving",
		rating: 4.8,
		reviews: 156,
		distanceKm: 4.5,
		pricePerHour: 600,
		verified: true,
		aiPick: false,
		experience: 10,
		languages: ["TH", "EN"],
		avatar: avatars[5],
		bio: "Two trucks, careful crew, insured.",
		bioTh: "รถบรรทุก 2 คัน ทีมงานระมัดระวัง มีประกัน",
		availableToday: true
	},
	{
		id: "p7",
		name: "Krit M.",
		nameTh: "กฤษณ์ ม.",
		skill: "Tech Support",
		skillKey: "svc.tech",
		rating: 4.9,
		reviews: 95,
		distanceKm: 2,
		pricePerHour: 500,
		verified: true,
		aiPick: true,
		experience: 7,
		languages: ["EN", "TH"],
		avatar: avatars[6],
		bio: "Wi-Fi setup, computer repair, smart home installs.",
		bioTh: "ติดตั้ง Wi-Fi ซ่อมคอมพิวเตอร์ และระบบ Smart Home",
		availableToday: true
	},
	{
		id: "p8",
		name: "Suda W.",
		nameTh: "สุดา ว.",
		skill: "Cleaner",
		skillKey: "svc.cleaning",
		rating: 4.7,
		reviews: 71,
		distanceKm: 1.5,
		pricePerHour: 220,
		verified: true,
		aiPick: false,
		experience: 4,
		languages: ["TH"],
		avatar: avatars[7],
		bio: "Weekly cleaning, ironing, light cooking.",
		bioTh: "ทำความสะอาดรายสัปดาห์ รีดผ้า ทำอาหารง่าย ๆ",
		availableToday: false
	}
];
var popularServices = [
	{
		key: "svc.plumbing",
		icon: "🔧",
		color: "from-sky-100 to-sky-50"
	},
	{
		key: "svc.electrical",
		icon: "⚡",
		color: "from-amber-100 to-amber-50"
	},
	{
		key: "svc.cleaning",
		icon: "🧹",
		color: "from-emerald-100 to-emerald-50"
	},
	{
		key: "svc.gardening",
		icon: "🌳",
		color: "from-green-100 to-green-50"
	},
	{
		key: "svc.repair",
		icon: "🛠",
		color: "from-orange-100 to-orange-50"
	},
	{
		key: "svc.moving",
		icon: "🚚",
		color: "from-rose-100 to-rose-50"
	},
	{
		key: "svc.tech",
		icon: "💻",
		color: "from-indigo-100 to-indigo-50"
	}
];
var bookings = [
	{
		id: "b1",
		providerId: "p1",
		service: "Fix leaking sink",
		serviceTh: "ซ่อมอ่างล้างจานรั่ว",
		date: "Today 14:30",
		status: "onway",
		etaMin: 12,
		price: 700
	},
	{
		id: "b2",
		providerId: "p3",
		service: "Deep cleaning 2BR",
		serviceTh: "ทำความสะอาดเชิงลึก 2 ห้อง",
		date: "Tomorrow 09:00",
		status: "accepted",
		price: 1200
	},
	{
		id: "b3",
		providerId: "p7",
		service: "Wi-Fi mesh install",
		serviceTh: "ติดตั้ง Wi-Fi mesh",
		date: "Mon 11:00",
		status: "pending",
		price: 1500
	},
	{
		id: "b4",
		providerId: "p2",
		service: "Replace breaker",
		serviceTh: "เปลี่ยนเบรกเกอร์",
		date: "Last week",
		status: "completed",
		price: 900
	}
];
var threads = [
	{
		id: "t1",
		providerId: "p1",
		preview: "I'll be there in 15 min",
		previewTh: "อีก 15 นาทีถึง",
		unread: 2,
		messages: [
			{
				id: "m1",
				from: "me",
				text: "Hi, my sink is leaking under the cabinet.",
				textTh: "สวัสดีค่ะ อ่างล้างจานในตู้รั่ว",
				time: "14:02",
				read: true
			},
			{
				id: "m2",
				from: "them",
				text: "On my way. Bringing tools.",
				textTh: "กำลังไปครับ ถือเครื่องมือไปด้วย",
				time: "14:10",
				read: true
			},
			{
				id: "m3",
				from: "them",
				text: "I'll be there in 15 min",
				textTh: "อีก 15 นาทีถึง",
				time: "14:15"
			}
		]
	},
	{
		id: "t2",
		providerId: "p3",
		preview: "Confirmed for tomorrow 9am",
		previewTh: "ยืนยันพรุ่งนี้ 9 โมง",
		unread: 0,
		messages: [{
			id: "m1",
			from: "them",
			text: "Confirmed for tomorrow 9am",
			textTh: "ยืนยันพรุ่งนี้ 9 โมง",
			time: "10:30",
			read: true
		}]
	},
	{
		id: "t3",
		providerId: "p7",
		preview: "What router do you have?",
		previewTh: "คุณใช้เราเตอร์รุ่นไหน",
		unread: 1,
		messages: [{
			id: "m1",
			from: "them",
			text: "What router do you have?",
			textTh: "คุณใช้เราเตอร์รุ่นไหน",
			time: "Yesterday"
		}]
	}
];
function findProvider(id) {
	return providers.find((p) => p.id === id);
}
//#endregion
export { threads as a, providers as i, findProvider as n, popularServices as r, bookings as t };
