function objchangestring(obj){
				var arr=[];
				for(var i in obj){
					arr.push(i+'='+obj[i]);
				}
				return arr.join('&');
			}
			function ajax(options){//options对象
				options.type=options.type||'get';//请求类型的默认值。
				if(options.async==false){
					options.async=false;
				}else{
					options.async=true;
				}
				
				options.data=options.data||'';//允许数据为空
				
				
				if(typeof options.data=='object' && typeof options.data.length!='number'){
					options.data=objchangestring(options.data);
				}else{
					if(typeof options.data=='string'){
						options.data=options.data;
					}else{
						throw new Error('数据格式错误，请输入对象');
					}
					
				}
				
			
			    var ajax=null;
				try{
					ajax=new XMLHttpRequest();//标准
				}catch(e){
					ajax=new ActiveXObject('Microsoft.XMLHTTP');//IE6
				}
				
				//打开方式(打开方式、接口地址、是否异步)
				if(options.type=='get'&& options.data){
					options.url+='?'+options.data;
				}
				
				ajax.open(options.type,options.url,options.async);
				
				//发送数据
				if(options.type=='get'&& options.data){
					ajax.send();
				}else{
					ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');
					ajax.send(options.data);
				}
				
				if(options.async==false){
					options.success&&options.success(ajax.responseText);
				}else{
					ajax.onreadystatechange=function(){
						if(ajax.readyState==4){
							if(ajax.status==200){
								//ajax.responseText//当前获取接口里面的数据
								options.success&&options.success(ajax.responseText);
							}else{
								options.error&&options.error(ajax.status);
							}
						}
					}
				}
				
			}