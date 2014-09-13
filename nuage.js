var tableauXHeader = "";
function initializeViz() {
    var placeholderDiv = document.getElementById("tableauViz");
    var url = "https://online.tableausoftware.com/t/stratus/views/BGC3Channels/Dashboard3?:embed=y&:display_count=no";
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

https://online.tableausoftware.com/t/stratus/views/BGC3Channels/Dashboard3?:embed=y&:display_count=no
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
$(document).ready(function () {
    //signinViz();
    initializeViz();
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
});
