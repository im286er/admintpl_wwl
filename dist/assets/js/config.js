layui.config({base:"./assets/js/modules/",version:(new Date).getTime()}).use("adminMain",function(e){e.init(),form.on("checkbox(allChoose)",function(e){$(e.elem).parents("table").find('tbody input[type="checkbox"]').each(function(n,c){c.checked=e.elem.checked}),form.render("checkbox")})});