(function(){DisplayBanners();})()
function DisplayBanners(){var banners=JSON.parse(jQuery('#txtJsonBanners').val().replace(/'/g,'"'));jQuery.each(banners,function(i,banner){jQuery('#bonuses').find('.container').find('.row').append
(((i==0)?'<div class="bonus col-12 col-sm-6 col-md-4 col-lg-12 mt-2 mt-lg-0 px-lg-0">':'<div class="bonus col-12 col-sm-6 col-md-4 col-lg-12 mt-2 px-lg-0">')+
'    <div class="title-container bg-alt-blue px-3 py-2">'+
'        <h3 class="text-white text-left text-uppercase m-0">'+banner.Title+'</h3>'+
'    </div>'+
'    <div class="mt-1">'+
'        <a href="'+banner.Link+'"><img src="'+banner.Image+'" alt="'+banner.Alt+'" class="w-100"></a>'+
'    </div>'+
'</div>');});}