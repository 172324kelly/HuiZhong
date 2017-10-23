module.exports=function(server){
	let socket=require("socket.io");
	let io=socket(server);

	io.on('connection',function(ws){//on是监听事件，emit是发送
		ws.on("chat",function(data){//chat,allChat是自定义事件
			io.emit("allChat",data);
			//io.emit对所有客户端发送数据
			//ws.emit点对点（服务端发回响应给请求的客户端）发送送数据（一一对应）
		});
	});
};
