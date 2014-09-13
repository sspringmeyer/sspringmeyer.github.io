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
            $(".tableauFixed").animate({
                left: "0px"
            }, 100);

        } else {
            $(".tableauFixed").animate({
                left: "-240px"
            }, 100);

        }
    });
    $('ul.tableauVizSelect > li').click(function () {
        var num = $(this).attr('data-item');
        $('.tableauVizHolder').hide();
        $('#tableauVizHolder'+num).show();

    });
    $(window).resize(function () {
        adjustWidth();
        //initializeViz();
    });
});
