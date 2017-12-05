/*
 tool:工具方法
 * 1.getStyle(obj,attr);  获取任意css属性值
 * 2.$(selector),通过id，className,element获取对应的元素对象
 * 
 * 
 * 
 * 
 * 
 * */
//kjhfskjahjfkshjfkjsjlkf
function $(selector){
	if(selector.substring(0,1)=='#'){
		return document.getElementById(selector.substring(1));
	}else if(selector.substring(0,1)=='.'){
		return document.getElementsByClassName(selector.substring(1));
	}else{
		if(document.getElementsByTagName(selector)[0]){
			return document.getElementsByTagName(selector);
		}else{
			throw new Error('This parameter is not element');
		}
	}
}

function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj)[attr];
	}
}

function ranNum(min,max){
	return Math.floor(Math.random()*(max-min+1))+min
}

function ranBgcolor(){
	return '#'+parseInt(Math.random()*0xffffff).toString(16);
}


function getClass(classname,parent){
	var parent=parent||document;
	if(parent.getElementsByClassName){
		return parent.getElementsByClassName(classname);//标准支持的。
	}else{
		var arr=[];//定义一个空数组，用来存储满足条件的元素。
		var reg=new RegExp('\\b'+classname+'\\b');//定义正则验证
		var elements=parent.getElementsByTagName('*');//获取parent下面的所有的元素
		for(var i=0;i<elements.length;i++){
			if(reg.test(elements[i].className)){//每一个元素的类名和传入的类名进行比较
				arr.push(elements[i]);
			}
		}
		return arr;//返回数组，数组里面是满足条件的元素。
	}
}

//设置cookie,获取cookie,删除cookie
function setcookie(key,value,days){
	var d=new Date();
	d.setDate(d.getDate()+days);
	document.cookie=key+'='+encodeURI(value)+';expires='+d;
}


function getcookie(key){
	var arr=decodeURI(document.cookie).split('; ');
	for(var i=0;i<arr.length;i++){
		var newarr=arr[i].split('=');
		if(newarr[0]==key){
			return newarr[1];
		}
	}
}

function delcookie(key){
	setcookie(key,'',-1);
}

//缓冲和运动的封装函数

			function getStyle(obj,attr){
				if(obj.currentStyle){
					return obj.currentStyle[attr];
				}else{
					return getComputedStyle(obj)[attr];
				}
			}
			
			function buffermove(obj,json,fn){
						var speed=0;
						clearInterval(obj.timer);
						obj.timer=setInterval(function(){
				
							var bstop=true;
							for(var attr in json){
								var current=null;
								if(attr=='opacity'){
									current=Math.round(getStyle(obj,attr)*100);
								}else{
									current=parseInt(getStyle(obj,attr));
								}
								speed=(json[attr]-current)/3;
								speed=speed>0?Math.ceil(speed):Math.floor(speed);
								if(current!=json[attr]){
									if(attr=='opacity'){
										obj.style.opacity=(current+speed)/100;   
										obj.style.filter='alpha(opacity='+(current+speed)+')';
									}else{
										obj.style[attr]=current+speed+'px';
									}
									bstop=false;
								}
							}
							if(bstop){
								clearInterval(obj.timer);
								fn&&fn();
							}
							
							
						},20);
					}