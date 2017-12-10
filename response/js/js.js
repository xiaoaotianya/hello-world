$(".title-a1").hover(function(){
			     $(".title-a2").show()
					},
					function(){
				 $(".title-a2").hide() 
				
			})
			  $(".title-a2").hover(function(){
			     $(this).show()
					},
					function(){
				 $(this).hide() 
				
			})
			  


$(".search-menu .left dt").hover(function(){
			     $(".search-menu .left dd").show()
					},
					function(){
				 $(".search-menu .left dd").hide() 
				
			})
			  $(".search-menu .left dd").hover(function(){
			     $(this).show()
					},
					function(){
				 $(this).hide() 
				
			})


$(".search-menu .right dt").hover(function(){
			     $(".search-menu .right dd").show()
					},
					function(){
				 $(".search-menu .right dd").hide() 
				
			})
			  $(".search-menu .right dd").hover(function(){
			     $(this).show()
					},
					function(){
				 $(this).hide() 
				
			})



		  var arr=[]
			  	
		   function yanzhnegma(){
				for(var i=48;i<=57;i++){
					arr.push(String.fromCharCode(i));
				}
				for(var j=97;j<=122;j++){
				   arr.push(String.fromCharCode(j));
			}
				var html="";
				for(var i=0;i<6;i++){
					var mid=parseInt(Math.random()*arr.length);
		     	if(mid<=9){
		     		html+=arr[mid]
		     	}else{
		     		var bot=Math.random();
		     		if(bot>0.5){
		     			html+=arr[mid].toUpperCase()
		     		}else{
		     			html+=arr[mid]
		     		}
		     	}
		     }return html
		}
		   
//注册的验证		   
$(function(){
	var usereg=/^([\u4e00-\u9fa5]|[a-zA-Z0-9\_\-]){6,20}$/; 
	var passwordreg=/^([\u4e00-\u9fa5]|[a-zA-Z0-9\_\-]){6,15}$/;
	var bstop1=true;
	var bstop2=true;
	var bstop3=true;
	var bstop4=true;
	var bstop5=true;
    $('#reg-username').on('blur',function(){//验证用户名 		
  		var $username=$(this).val();
  		if($username!=''){
          	if(usereg.test($username)){
          		$.ajax({
          			type:"post",
          			url:"php/register-login.php",
          			data:{
          				usernames:$username
          			},
          			success:function(d){
          				if(!d){
          					$('#username .cuo').show();
				  			$('#username .cuo-2').html('输入正确');
				  			$('#username .cuo-1').html('√');
				  			$('#username .cuo-2').css({
				  				'color':"#81D842"
				  			})
				  			$('#username .cuo-1').css({
				  				"background":"#81D842"
				  			})
				  			 bstop1=false;
				  			
				  			
          				}
          				else{
          					$('#username .cuo').show();
				  			$('#username .cuo-2').html('用户名重复');
				  			$('#username .cuo-1').html('!');
				  			$('#username .cuo-2').css({
				  				'color':"#F22D25"
				  			})
				  			$('#username .cuo-1').css({
				  				"background":"#F22D25"
				  			})
				  			 bstop1=true;
				  		
                        }
          			}
          		})
          			
          	}
          		
	        else{
		  			$('#username .cuo').show();
		  			$('#username .cuo-2').html('格式错误');
		  			$('#username .cuo-1').html('!');
		  			$('#username .cuo-2').css({
		  				'color':"#F22D25"
		  			})
		  			$('#username .cuo-1').css({
		  				"background":"#F22D25"
		  			})
		  			 bstop1=true;
		  			
	        }
  		}
  	    else{
  	    	$('#username .cuo').show();
  			$('#username .cuo-2').html('内容不能为空');
  			$('#username .cuo-1').html('!');
  			$('#username .cuo-2').css({
  				'color':"#F22D25"
  			})
  			$('#username .cuo-1').css({
  				"background":"#F22D25"
  			})
  	    	bstop1=true;
  	   
  	    }
    })
    $("#password input").on('blur',function(){
    	
    	var $password=$(this).val();
    	if($password!=""){
    		if(passwordreg.test($password)){
    			
    			$('#password .cuo').show();
	  			$('#password .cuo-2').html('设置成功');
	  			$('#password .cuo-1').html('√');
	  			$('#password .cuo-2').css({
	  				'color':"#81D842"
	  			})
	  			$('#password .cuo-1').css({
	  				"background":"#81D842"
	  			})
	  	    	bstop2=false;
	  	    	
	    		
    			
    		}else{
    			$('#password .cuo').show();
	  			$('#password .cuo-2').html('密码格式错误');
	  			$('#password .cuo-1').html('!');
	  			$('#password .cuo-2').css({
	  				'color':"#F22D25"
	  			})
	  			$('#password .cuo-1').css({
	  				"background":"#F22D25"
	  			})
	  	    	bstop2=true;
	    		}

    	}else{
    		$('#password .cuo').show();
  			$('#password .cuo-2').html('密码不能为空');
  			$('#password .cuo-1').html('!');
  			$('#password .cuo-2').css({
  				'color':"#F22D25"
  			})
  			$('#password .cuo-1').css({
  				"background":"#F22D25"
  			})
  	    	bstop2=true;
    	}
    })
    $('#confirm-password input').on('blur',function(){

    	var $confirmpassword=$(this).val();
    	var passvalue=$("#password input").val();
    	if($confirmpassword!=""){
    		if($confirmpassword==passvalue){
    			$('#confirm-password .cuo').show();
	  			$('#confirm-password .cuo-2').html('密码输入正确');
	  			$('#confirm-password .cuo-1').html('√');
	  			$('#confirm-password .cuo-2').css({
	  				'color':"#81D842"
	  			})
	  			$('#confirm-password .cuo-1').css({
	  				"background":"#81D842"
	  			})
	  	    	bstop3=false;
	  	    
    		}else{
    			$('#confirm-password .cuo').show();
	  			$('#confirm-password .cuo-2').html('密码输入错误');
	  			$('#confirm-password .cuo-1').html('!');
	  			$('#confirm-password .cuo-2').css({
	  				'color':"#F22D25"
	  			})
	  			$('#confirm-password .cuo-1').css({
	  				"background":"#F22D25"
	  			})
	  	    	bstop3=true;
    		}
    		
    	}else{
    		$('#confirm-password .cuo').show();
  			$('#confirm-password .cuo-2').html('密码不能为空');
  			$('#confirm-password .cuo-1').html('!');
  			$('#confirm-password .cuo-2').css({
  				'color':"#F22D25"
  			})
  			$('#confirm-password .cuo-1').css({
  				"background":"#F22D25"
  			})
  	    	bstop3=true;
    	}
    })
    $("#telphone input").on("blur",function(){
   
    	var $telphone=$(this).val();
    	var telreg=/^[1][34578]\d{9}$/g
    
    	if($telphone!=""){
    		if(telreg.test($telphone)){
    			$('#telphone .cuo').show();
	  			$('#telphone .cuo-2').html('输入正确');
	  			$('#telphone .cuo-1').html('√');
	  			$('#telphone .cuo-2').css({
	  				'color':"#81D842"
	  			})
	  			$('#telphone .cuo-1').css({
	  				"background":"#81D842"
	  			})
	  	    	bstop4=false;
	  	       			
    		}else{
    			$('#telphone .cuo').show();
	  			$('#telphone .cuo-2').html('手机号码不正确');
	  			$('#telphone .cuo-1').html('!');
	  			$('#telphone .cuo-2').css({
	  				'color':"#F22D25"
	  			})
	  			$('#telphone .cuo-1').css({
	  				"background":"#F22D25"
	  			})
	  	    	bstop4=true;
    		}
    	}else{
    		$('#telphone .cuo').show();
  			$('#telphone .cuo-2').html('手机号码不能为空');
  			$('#telphone .cuo-1').html('!');
  			$('#telphone .cuo-2').css({
  				'color':"#F22D25"
  			})
  			$('#telphone .cuo-1').css({
  				"background":"#F22D25"
  			})
  	    	bstop4=true;
    	}
    })
     $('.yanzheng').html(yanzhnegma())
    $('.huan').click(function(){
    	
    	$('.yanzheng').html(yanzhnegma())
    })
    
    $('#yan-z input').on("blur",function(){   	
    
    	var $yanvalue=$('#yan-z .yanzheng').html().toLowerCase();
    	var $yaninput=$(this).val();
    	if($yaninput!=''){
    		if($yaninput==$yanvalue){
    			$('#yan-z .cuo').show();
	  			$('#yan-z .cuo-2').html('验证码输入正确');
	  			$('#yan-z .cuo-1').html('√');
	  			$('#yan-z .cuo-2').css({
	  				'color':"#81D842"
	  			})
	  			$('#yan-z .cuo-1').css({
	  				"background":"#81D842"
	  			})
	  	    	bstop5=false;
    		}else{
    			$('#yan-z .cuo').show();
	  			$('#yan-z .cuo-2').html('验证码输入错误');
	  			$('#yan-z .cuo-1').html('!');
	  			$('#yan-z .cuo-2').css({
	  				'color':"#F22D25"
	  			})
	  			$('#yan-z .cuo-1').css({
	  				"background":"#F22D25"
	  			})
	  	    	bstop5=true;
    		}
    		
    	}else{
    		$('#yan-z .cuo').show();
  			$('#yan-z .cuo-2').html('验证码不能为空');
  			$('#yan-z .cuo-1').html('!');
  			$('#yan-z .cuo-2').css({
  				'color':"#F22D25"
  			})
  			$('#yan-z .cuo-1').css({
  				"background":"#F22D25" 
  			})
  	    	bstop5=true;
    	}
    })
    
    $('#sub').on('click',function(){    
    	   
    	if(bstop1 || bstop2 || bstop3 || bstop4 || bstop5){
    		alert('请把资料填写完整')
    	}
    })
})
//表单用户名的验证
$(function(){
	var bstop1=true;
	var bstop2=true;
	var bstop3=true;
	$('#loguser input').on('blur',function(){
		var $userval=$(this).val();	
		if($userval!=""){
		   $('#loguser .cuo').hide();
		   bstop1=false;
		}else{
			
			$('#loguser .cuo').show();
  			$('#loguser .cuo-2').html('账号不能为空');
  			$('#loguser .cuo-1').html('!');
  			$('#loguser .cuo-2').css({
  				'color':"#F22D25"
  			})
  			$('#loguser .cuo-1').css({
  				"background":"#F22D25" 
  			})
  	    	bstop1=true;
		}
	})
	
	$('#logpass input').on('blur',function(){
		var $userval=$(this).val();	
		if($userval!=""){
		   $('#logpass .cuo').hide();
		   bstop2=false;
		}else{
			
			$('#logpass .cuo').show();
  			$('#logpass .cuo-2').html('账号不能为空');
  			$('#logpass .cuo-1').html('!');
  			$('#logpass .cuo-2').css({
  				'color':"#F22D25"
  			})
  			$('#logpass .cuo-1').css({
  				"background":"#F22D25" 
  			})
  	    	bstop2=true;
		}
	})
	
	$('#logyan input').on("blur",function(){   	
    
    	var $yanvalue=$('#logyan .yanzheng').html().toLowerCase();
    	var $yaninput=$(this).val();
    	if($yaninput!=''){
    		if($yaninput==$yanvalue){
    			$('#logyan .cuo').show();
	  			$('#logyan .cuo-2').html('验证码输入正确');
	  			$('#logyan .cuo-1').html('√');
	  			$('#logyan .cuo-2').css({
	  				'color':"#81D842"
	  			})
	  			$('#logyan .cuo-1').css({
	  				"background":"#81D842"
	  			})
	  	    	bstop3=false;
    		}else{
    			$('#logyan .cuo').show();
	  			$('#logyan .cuo-2').html('验证码输入错误');
	  			$('#logyan .cuo-1').html('!');
	  			$('#logyan .cuo-2').css({
	  				'color':"#F22D25"
	  			})
	  			$('#logyan .cuo-1').css({
	  				"background":"#F22D25"
	  			})
	  	    	bstop3=true;
    		}
    		
    	}else{
    		$('#logyan .cuo').show();
  			$('#logyan .cuo-2').html('验证码不能为空');
  			$('#logyan .cuo-1').html('!');
  			$('#logyan.cuo-2').css({
  				'color':"#F22D25"
  			})
  			$('#logyan .cuo-1').css({
  				"background":"#F22D25" 
  			})
  	    	bstop3=true;
    	}
    	
	})
	
	$('#logbnt').on('click',function(){
		var $name=$('#loguser input').val();
		var $psss=$('#logpass input').val();	
    	if(bstop1 || bstop2 || bstop3){
		   alert('请把资料填写完整')
		}else{
			$.ajax({
    			type:"post",
    			url:"php/login.php",
      			data:{
      				names:$name,
      			    pass:$psss      				
      			},
      			success:function(d){
      				if(!d){
      					alert("登录失败")
      				}else{
      				 location.href='http://www.baidu.com';
      				}
      			}
    		});
			
		}
	})
})
//登录页面的滑动
$('#login-main ul li').on('click',function(){
	var index=$(this).index();
	$(this).addClass('active').siblings('li').removeClass('active')
	if(index==0){
	
	    $('.login-text-main3').fadeOut('fast').animate({
	    	left:-400
	    },500)
	    	$('.login-text-main').show().animate({
			left:36,
		},500);
	    
	}else{
		$('.login-text-main').fadeOut('fast').animate({
			left:-400
		},500);
	    $('.login-text-main3').show().animate({
	    	left:36
	    },500);
	
	}
})
//侧边栏的滑动；
$('#boederside dl').hover(function(){
	var tht=$(this)
	$(this).children('dt').show().animate({
		left:-70
	})
},function(){
	var that=$(this);
	$(this).children('dt').animate({
		left:0,
	},function(){
		that.children('dt').hide()
	})

})

//回到顶部
$('.boederside-6 a').click(function(){
			$('html,body').animate({
				scrollTop:0
			},500)
		})


