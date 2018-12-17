var type = null;
var start = null;
var end = null;
var limit = null;
var API_ADDRESS = "";

$(document).ready(function () {
    var tAddress = $("#conditionWrap").append(model.address());
    var tStart = $("#conditionWrap1").append(model.start());
    var tEnd = $("#conditionWrap2").append(model.end());
    var tLimit = $("#conditionWrap3").append(model.limit());
    var tTransactionType = $("#conditionWrap4").append(model.transactionType());
    $("#apiTitle").append(model.apiTitle("{address}"));

    tAddress.promise().done(function () {
        $("#address").change(function (e) {
            var address = e.target.value;
            changeAPI(address);
        });
    });
    tTransactionType.promise().done(function () {
        $("#transactionType").change(function (e) {
            type = "type=" + e.target.value;
            appendParam();
        });
    });
    tStart.promise().done(function () {
        $("#startDatepicker").change(function (e) {
            start = "start=" + e.target.value + "000000";
            appendParam();
        });
    });
    tEnd.promise().done(function () {
        $("#endDatepicker").change(function (e) {
            end = "end=" + e.target.value + "235959";
            appendParam();
        });
    });
    tLimit.promise().done(function () {
        $("#limit").change(function (e) {
            limit = "limit=" + e.target.value;
            appendParam();
        });
    });

    $("#btnQuery").on("click", function () {
        jQuery.getJSON(API_ADDRESS, function (data) {
            $('#result').html(prettyPrintJson.toHtml(data));

            $("#wrapResult").removeClass("result-wrap");
        });
    });
});

var changeAPI = function (address) {
    $("#apiAddress").remove();
    $("#apiTitle").append(model.apiTitle(address));

    appendParam();
}
var appendParam = function () {
    if (type || start || end) {
        var address = $("#apiAddress").text();
        if (address.indexOf('?') >= 0) {
            address = address.split('?')[0];
        }
        address += "?";
        if (start) address += start + "&";
        if (end) address += end + "&";
        if (type) address += type + "&";
        if (limit) address += limit + "&";

        API_ADDRESS = address;
        $("#apiAddress").text(address);
    }

}