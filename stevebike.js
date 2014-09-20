var tableauXHeader = "";
function initializeViz(i) {
    var placeholderDiv = document.getElementById("tableauViz"+i);
    var url = "https://online.tableausoftware.com/t/stratus/views/BGC3Channels/CampaignsDB2?:embed=y&:display_count=no";
    var options = {
        width: placeholderDiv.offsetWidth,
        height: placeholderDiv.offsetHeight,
        hideTabs: true,
        hideToolbar: true,
        onFirstInteractive: function () {
            workbook = viz.getWorkbook();
            activeSheet = workbook.getActiveSheet();
        }
    };
    viz = new tableauSoftware.Viz(placeholderDiv, url, options);
}
function adjustWidth() {

}

var imgOn = 0;
var totalImages = 0;
function showArrows() {
    if (imgOn > 0) {
        $(".previous").show();
    } else {
        $(".previous").hide();
    }
    if (imgOn < totalImages-1) {
        $(".next").show();
    } else {
        $(".next").hide();
    }
}

/*
       var showSlideOn = function (froms, tos) {
            var left2right = (froms < tos);
            if (froms === tos) {
                $("#artGallery div.artGalleryFrame").css("display", "none");
                $("#artGallery div.artGalleryFrame").eq(tos).css("display", "block");
            } else {
                var animTime = 200;
                $("#artGallery div.artGalleryFrame").eq(froms).find(".agCaptionPanel").animate({ 'opacity': '0' }, 100);
                $("#artGallery div.artGalleryFrame").eq(tos).find(".agCaptionPanel").animate({ 'opacity': '1' }, 400);
                if (left2right) {
                    //$("#artGallery div.artGalleryFrame").eq(froms).css('', $(window).width() + 'px');
                    //$("#artGallery div.artGalleryFrame").eq(froms).animate({ 'right': '0px' }, animTime);
                    // was $("#artGallery div.artGalleryFrame").eq(froms).animate({ 'width': '0px' }, animTime);
                $("#artGallery div.artGalleryFrame").eq(froms).animate({ 'left': -1*$(window).width() + 'px' }, animTime);
                    $("#artGallery div.artGalleryFrame").eq(tos).css('left', $(window).width() + 'px');
                    $("#artGallery div.artGalleryFrame").eq(tos).css('width', $(window).width() + 'px');
                    $("#artGallery div.artGalleryFrame").eq(tos).css('display', 'block');
                    $("#artGallery div.artGalleryFrame").eq(tos).animate({ 'left': '0px' }, animTime+100);
                    
                } else {
                    $("#artGallery div.artGalleryFrame").eq(froms).animate({ 'left': $(window).width() + 'px' }, animTime);
                    //$("#artGallery div.artGalleryFrame").eq(froms).animate({ 'left': '0px' }, animTime);
                    //$("#artGallery div.artGalleryFrame").eq(tos).css('right', '0px');

("#artGallery div.artGalleryFrame").eq(tos).css('width', $(window).width() + 'px');
$("#artGallery div.artGalleryFrame").eq(tos).css('left', -1*$(window).width() + 'px');
$("#artGallery div.artGalleryFrame").eq(tos).css('display', 'block');
$("#artGallery div.artGalleryFrame").eq(tos).animate({ 'left': '0px' }, animTime + 100);
}
}

 */
function showImg(imgTo) {
    if ((imgTo >= totalImages) || (imgTo < 0)) {
        return;
    }
    var left2right = (imgOn < imgTo);
    var animTime = 1000;
    //$("li.imageHolder").eq(imgOn).animate({ 'opacity': '0' }, 100);
    //$("li.imageHolder").eq(imgTo).animate({ 'opacity': '1' }, 400);
    ww = $(window).width();
    if (left2right) {
        $("li.imageHolder").eq(imgOn).animate({ 'left': -1 * ww + 'px' }, animTime);
        $("li.imageHolder").eq(imgTo).css('left', ww + 'px');
        $("li.imageHolder").eq(imgTo).css('width', ww + 'px');
        $("li.imageHolder").eq(imgTo).css('display', 'block');
        $("li.imageHolder").eq(imgTo).animate({ 'left': '0px' }, animTime);

    } else {
        $("li.imageHolder").eq(imgOn).animate({ 'left': ww + 'px' }, animTime);
        $("li.imageHolder").eq(imgTo).css('width', ww + 'px');
        $("li.imageHolder").eq(imgTo).css('left', -1 * ww + 'px');
        $("li.imageHolder").eq(imgTo).css('display', 'block');
        $("li.imageHolder").eq(imgTo).animate({ 'left': '0px' }, animTime);
    }
    imgOn = imgTo;
    showArrows();
}
$(document).ready(function () {
    adjustWidth();
    totalImages = $("li.imageHolder").length;
    showArrows();
    $('.menuItem').mouseenter(function () {
        $(this).addClass("menuHover");
    });
    $('.menuItem').mouseleave(function () {
        $(this).removeClass("menuHover");
    });

    $('.next').click(function () {
        showImg(imgOn+1)
    });

    $('.previous').click(function () {
        showImg(imgOn - 1);

    });
    
    $(window).resize(function () {
        adjustWidth();
        //initializeViz();
    });
});
