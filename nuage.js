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
/*
<script type='text/javascript' src='https://public.tableausoftware.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder' style='width: 1004px; height: 869px;'><noscript><a href='#'><img alt='Dashboard 3 ' src='https:&#47;&#47;public.tableausoftware.com&#47;static&#47;images&#47;Bo&#47;Book10_99&#47;Dashboard3&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' width='1004' height='869' style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableausoftware.com%2F' /> <param name='site_root' value='' /><param name='name' value='Book10_99&#47;Dashboard3' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableausoftware.com&#47;static&#47;images&#47;Bo&#47;Book10_99&#47;Dashboard3&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /></object></div><div style='width:1004px;height:22px;padding:0px 10px 0px 0px;color:black;font:normal 8pt verdana,helvetica,arial,sans-serif;'><div style='float:right; padding-right:8px;'><a href='http://www.tableausoftware.com/public/about-tableau-products?ref=https://public.tableausoftware.com/views/Book10_99/Dashboard3' target='_blank'>Learn About Tableau</a></div></div>
https://online.tableausoftware.com/t/stratus/views/BGC3Channels/CampaignsDB?:embed=y&:display_count=no
function signinViz() {
    var signinStr = '<tsRequest><credentials name="steve.springmeyer@bgc3.com" password="Tableau999!"><site contentUrl="https://online.tableausoftware.com/t/stratus"/></credentials></tsRequest>';
    alert("signin");
    $.ajax({
        url: "https://online.tableausoftware.com/t/stratus/api/2.0/auth/signin", //t/stratus",
        dataType: "text",
        data: signinStr,
        type: "POST",
        mimeType: "text/xml",
        contentType: "text/xml",
        success: function (data) {
            var theaders = this.headers;
            alert("success >" + data); // X-Tableau-Auth:
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status + " " + thrownError);
            //console.log(thrownError);
        }
    });

}
*/
function adjustWidth() {
    var ww = $(window).width();
    $(".tableauFixed").css("width", ( ww + 240) + "px");
    $(".tableauVizCont").css("width", ww + "px");
    $(".tableauViz").css("width", (ww - 120) + "px");
    $(".tableauViz").css("height", ($(window).height() - 120) + "px");

}
function openMenu() {
    $(".tableauFixed").animate({
        left: "0px"
    }, 100);
}
function closeMenu() {
    $(".tableauFixed").animate({
        left: "-240px"
    }, 100);
}
$(document).ready(function () {
    //signinViz();
    adjustWidth();
    for (i = 1; i < 8; i++)
        initializeViz(i);
    $('.tableauVizHolder').hide();
    $('#tableauVizHolder1').show();
    $('.tableauViz').click(function () {
    });
    $('.hamburger').click(function () {
        if ($(".tableauFixed").css("left") != "0px") {
            openMenu();
        } else {
            closeMenu();
        }
    });
    $('.menuItem').mouseenter(function () {
        $(this).addClass("menuHover");
    });
    $('.menuItem').mouseleave(function () {
        $(this).removeClass("menuHover");
    });

    //$('ul.tableauVizSelect > li').click(function () {
    $('.menuItem').click(function () {
        var num = $(this).attr('data-item');
        closeMenu();
        $('.tableauVizHolder').hide();
        $('#tableauVizHolder' + num).show();
        $('.menuItem').removeClass("menuSelected");
        $(this).addClass("menuSelected");

    });
    $(window).resize(function () {
        adjustWidth();
        //initializeViz();
    });
});
