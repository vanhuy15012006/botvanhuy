module.exports.config = {
	name: "ad",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nguyễn Văn Huy",
	description: "lệnh hay sử dụng",
	commandCategory: "Lệnh Bot Hay sử dụng",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`\n!Lệnh Thường sử dụng!\nHelp,Say,Boxfamily,Sim,locmem,ad,donate,kiss,Hug,Setname,uid,...\nChúc các bạn sử dụng bot vui vẻ===`, event.threadID, event.messageID);