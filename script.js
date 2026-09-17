function enableQty(chkId, qtyId)
{
    var chk = document.getElementById(chkId);
    var qty = document.getElementById(qtyId);

    if(chk.checked)
    {
        qty.disabled = false;
        qty.focus();
    }
    else
    {
        qty.disabled = true;
        qty.value = "";
    }
}

function totalBill()
{
    var total = 0;

    if(document.getElementById("chk1").checked)
    {
        total += Number(document.getElementById("price1").innerHTML) *
                 Number(document.getElementById("qty1").value);
    }

    if(document.getElementById("chk2").checked)
    {
        total += Number(document.getElementById("price2").innerHTML) *
                 Number(document.getElementById("qty2").value);
    }

    if(document.getElementById("chk3").checked)
    {
        total += Number(document.getElementById("price3").innerHTML) *
                 Number(document.getElementById("qty3").value);
    }

    if(document.getElementById("chk4").checked)
    {
        total += Number(document.getElementById("price4").innerHTML) *
                 Number(document.getElementById("qty4").value);
    }

    if(document.getElementById("chk5").checked)
    {
        total += Number(document.getElementById("price5").innerHTML) *
                 Number(document.getElementById("qty5").value);
    }

    alert("Total Bill = Rs. " + total);
}