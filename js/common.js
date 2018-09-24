var $$ = {

	iScroll : function(elem){
		var myScroll;
		function loaded() {
			myScroll = new iScroll(elem, { checkDOMChanges: true });
		};
		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		document.addEventListener('DOMContentLoaded', loaded, false);
	},

    iScrollForms : function(elem){
        var myScroll;
        function loaded() {
            myScroll = new iScroll(elem, {
                useTransform: false,
                onBeforeScrollStart: function (e) {
                    var target = e.target;
                    while (target.nodeType != 1) target = target.parentNode;

                    if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA')
                        e.preventDefault();
                }
            });
        };

        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
        document.addEventListener('DOMContentLoaded', loaded, false);
    },

	swiperBanner : function(){
        var mySwiperBanner = new Swiper(".swiper-container",{
            pagination: '.pagination',
            loop:true,
            grabCursor: true,
            paginationClickable: true,
            autoplay: 3000
        })
    },

    marqueLeft : function(obj){
        $(obj).slide({
            mainCell:".bd ul",
            autoPlay:true,
            effect:"leftMarquee",
            vis:3,
            interTime:50
        });
    },

    aniGo : function(){
        $(".aniGo").on("click",function(){
            var This = $(this);
            var url = "http://www.baidu.com";
            This.addClass("animated rubberBand");
            setTimeout(function(){
                This.removeClass("rubberBand");
                    window.location.href = url;
            },1000);                
        }); 
    },

    goBack : function(){
        $(".history").on("click",function(){
            window.history.back(-1);
        })
    },

    showMenu : function(){
        $(".showMenu").on("click",function(){
            $(".s-m-u").stop().slideToggle(200);
        })

        $(".s-m-u > li").on("click",function(){
            $(".s-m-u").stop().slideUp(200);
        })
    },

    isPhoneNum: function(val){  
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
        if(!myreg.test(val)){  
            return false;  
        }else {  
            return true;  
        };
    },

    agentLogin: function(){
        var This = this;
        $(".agentLoginBtn").on("click",function(){
            var userName = $.trim($(".agentUserName").val());
            var password = $(".agentPwd").val();

            if(userName && password){
                alert("登录成功");
            }else{
                $(".tiptxt").show(0).html("用户名、密码不能为空!");
            }
        });

        $(".line input").on("focus",function(){
            $(".tiptxt").text("").hide(0);
        });
    },

    agentReg: function(){
        $(".agentRegBtn").on("click",function(){
            var userName = $.trim($(".agentUserName").val().toLocaleUpperCase());
            var password = $(".agentPwd").val();
            var repassword = $(".agentRePwd").val();

            if(userName && password && repassword){
                var userReg = /^[a-zA-Z0-9]{7,12}$/;
                var pwdReg = /^[a-zA-Z0-9]{6,12}$/;

                if( !userReg.test(userName) ){
                    $(".tiptxt").show(0).html("用户名必须7-12位数字、字母");
                    return false;
                }else if(!pwdReg.test(password)){
                    $(".tiptxt").show(0).html("密码必须6-12位数字、字母");
                    return false;
                }else if( repassword != password){
                    $(".tiptxt").show(0).html("两次输入的密码不一致");
                    return false;
                }else{
                    alert("注册成功");
                }

            }else{
                $(".tiptxt").show(0).html("用户名、密码、确认密码不能为空!");
            };

            $(".line input").on("focus",function(){
                $(".tiptxt").text("").hide(0);
            });
        });
    },

    userLogin: function(){
        var This = this;
        $(".userLoginBtn").on("click",function(){
            var userName = $.trim($(".userName").val());
            var password = $(".userPwd").val();
            var prefix = $("#prefix").val();
            var prefixUser = userName.substr(0,2).toLocaleUpperCase();

            if(userName && password){
                if(!This.isPhoneNum(userName)){
                    userName = (prefixUser == prefix) ? userName : prefix + userName;
                }else{
                    alert("登陆成功");
                }
            }else{
                $(".tiptxt").show(0).html("用户名、密码不能为空!");
            }
        });

        $(".line input").on("focus",function(){
            $(".tiptxt").text("").hide(0);
        });
    },

    userReg: function(){
        $(".userRegBtn").on("click",function(){
            var userName = $.trim($(".userName").val().toLocaleUpperCase());
            var password = $(".userPwd").val();
            var repassword = $(".userRePwd").val();
            var prefix = $("#prefix").val();
            var prefixUser = userName.substr(0,2);

            if(userName && password && repassword){
                var userReg = /^[a-zA-Z0-9]{7,12}$/;
                var pwdReg = /^[a-zA-Z0-9]{6,12}$/;
                userName = (prefixUser == prefix) ? userName : prefix + userName;

                if( !userReg.test(userName) ){
                    $(".tiptxt").show(0).html("用户名必须5-10位数字、字母");
                    return false;
                }else if(!pwdReg.test(password)){
                    $(".tiptxt").show(0).html("密码必须6-12位数字、字母");
                    return false;
                }else if( repassword != password){
                    $(".tiptxt").show(0).html("两次输入的密码不一致");
                    return false;
                }else{
                    alert("注册成功");
                }

            }else{
                $(".tiptxt").show(0).html("用户名、密码、确认密码不能为空!");
            };

            $(".line input").on("focus",function(){
                $(".tiptxt").text("").hide(0);
            });
        });
    },

    dptForm:function(){
        $(".payType").on("click",function(){
            $(this).addClass("active").siblings(".payType").removeClass("active");
        });

        $(".num").on("click",function(){
            var amount = parseFloat($(this).text());

            $("#dptAmount").val(amount);
            $(this).addClass("active").siblings(".num").removeClass("active");
        });

        $(".depositBtn").on("click",function(){
            var depositAmount = $("#dptAmount").val();
            if(!depositAmount){
                $(".tiptxt").show(0).html("请输入存款金额!");
            }else{
                alert("存款执行程序~");
            }
        });

        $(".line input").on("focus",function(){
            $(".tiptxt").text("").hide(0);
        });
    },

    transferForm: function(){
        $(".transferBtn").on("click",function(){
            var transferAmount = $("#transferAmount").val();

            if(!transferAmount){
                $(".tiptxt").show(0).html("请输入转账金额!");
            }else{
                alert("转账执行程序~");
            }
            
        });
    }

    

} 