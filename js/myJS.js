// ده السطر الي بحدد منه النقطه الي انا عايز اوصل عندها عشان اعمل الاكشن
let scrollPoint = $('.scrollPoint').offset().top;

// لما بعمل سكرول في الشاشه كلها بيحصل فانكشن

$(window).scroll(function(){
    let scrollForNav = $(window).scrollTop();
/* بنعمل شرط لو السكرول الي عملته اكبر من النقطة الي انا عايز اوصلها ببدأ اعمل الاكشن الي انا عايزة 
فالشرط بيكون علي الناف بار نفسه
*/
        if(scrollForNav > scrollPoint){
            $('.navbar').css('background' , '#fff')
            $('.navbar .navbar-nav a').css('color' , '#000')
            $('.navbar i').css('color' , '#000')
        } else{
            $('.navbar').css('background' , 'transparent')
            $('.navbar .navbar-nav a').css('color' , '#fff')
            $('.navbar i').css('color' , '#fff')
        }
})