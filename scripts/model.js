const model = {
    "address": function () {
        return `
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Address</span>
                </div>
                <input type="text" class="form-control" id="address" placeholder="Address" aria-label="Address" aria-describedby="basic-addon1">
            </div>
        `
    },
    "transactionType": function () {
        return `
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Type</span>
            </div>
            <select id="transactionType" class="selectpicker" data-width="fit">
                <option>Select Type</option>
                <option>AccountSet</option> 
                <option>CheckCancel</option>
                <option>CheckCash</option>
                <option>CheckCreate</option>
                <option>DepositPreauth</option>
                <option>EscrowCancel</option>
                <option>EscrowCreate</option>
                <option>EscrowFinish</option>
                <option>OfferCancel</option>
                <option>OfferCreate</option>
                <option>Payment</option>
                <option>PaymentChannelClaim</option>
                <option>PaymentChannelCreate</option>
                <option>PaymentChannelFund</option>
                <option>SetRegularKey</option>
                <option>SignerListSet</option>
                <option>TrustSet</option>
            </select>
            <script>
                $(function () {
                    $('.selectpicker').selectpicker();
                });
            </script>
        </div>
        `
    },
    "start": function () {
        return `
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">StartDate</span>
                </div>
                <input type="text" class="form-control" id="startDatepicker" aria-label="StartDate" aria-describedby="basic-addon1">
            </div>
            <script>
                $(function () {
                    $("#startDatepicker").datepicker({
                        dateFormat: 'yymmdd'
                    });
                });
            </script>
        `
    },
    "end": function () {
        return `
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">EndDate</span>
                </div>
                <input type="text" class="form-control" id="endDatepicker" aria-label="EndDate" aria-describedby="basic-addon1">
            </div>
            <script>
                $(function () {
                    $("#endDatepicker").datepicker({
                        dateFormat: 'yymmdd'
                    });
                });
            </script>
        `
    },
    "minSeq": function () {
        return `
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">MIN SEQ</span>
                </div>
                <input type="text" class="form-control" id="min_seq" aria-label="MIN SEQ" aria-describedby="basic-addon1">
            </div>
        `
    },
    "maxSeq": function () {
        return `
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">MAX SEQ</span>
                </div>
                <input type="text" class="form-control" id="max_seq" aria-label="MAX SEQ" aria-describedby="basic-addon1">
            </div>
        `
    },
    "limit": function () {
        return `
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Limit</span>
                </div>
                <input type="text" class="form-control" id="limit" aria-label="Limit" aria-describedby="basic-addon1">
            </div>
        `
    },
    "apiTitle": function (address) {
        return `
            <p id="apiAddress">https://data.ripple.com/v2/accounts/${address}/transactions</p>
        `
    },
    "": function () {
        return `
            <span>: </span><input type="text" id="" /> 
        `
    },
    "": function () {
        return `
            <span>: </span><input type="text" id="" /> 
        `
    },
    "": function () {
        return `
            <span>: </span><input type="text" id="" /> 
        `
    },
    "": function () {
        return `
            <span>: </span><input type="text" id="" /> 
        `
    },
    "": function () {
        return `
            <span>: </span><input type="text" id="" /> 
        `
    },
    "": function () {
        return `
            <span>: </span><input type="text" id="" /> 
        `
    },
    "": function () {
        return `
            <span>: </span><input type="text" id="" /> 
        `
    }
}