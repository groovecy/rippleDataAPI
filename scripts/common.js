var type = null;
var start = null;
var end = null;
var limit = null;
var API_ADDRESS = "";

var renderTitle = function () {
    $("#apiTitle").append(model.apiTitle("{address}"));
}

var renderAddress = function () {
    var tAddress = $("#conditionWrap").append(model.address());
    tAddress.promise().done(function () {
        $("#address").change(function (e) {
            var address = e.target.value;
            changeAPI(address);
        });
    });
}

var renderStart = function () {
    var tStart = $("#conditionWrap1").append(model.start());
    tStart.promise().done(function () {
        $("#startDatepicker").change(function (e) {
            start = "start=" + e.target.value + "000000";
            appendParam();
        });
    });
}

var renderEnd = function () {
    var tEnd = $("#conditionWrap2").append(model.end());
    tEnd.promise().done(function () {
        $("#endDatepicker").change(function (e) {
            end = "end=" + e.target.value + "235959";
            appendParam();
        });
    });
}
var renderTransactionType = function () {
    var tTransactionType = $("#conditionWrap4").append(model.transactionType());
    tTransactionType.promise().done(function () {
        $("#transactionType").change(function (e) {
            type = "type=" + e.target.value;
            appendParam();
        });
    });
}

var renderLimit = function () {
    var tLimit = $("#conditionWrap3").append(model.limit());
    tLimit.promise().done(function () {
        $("#limit").change(function (e) {
            limit = "limit=" + e.target.value;
            appendParam();
        });
    });
}

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

var addQueryEvent = function () {
    $("#btnQuery").on("click", function () {
        jQuery.getJSON(API_ADDRESS, function (data) {
            $('#result').html(prettyPrintJson.toHtml(data));

            $("#wrapResult").removeClass("result-wrap");
        });
    });
}