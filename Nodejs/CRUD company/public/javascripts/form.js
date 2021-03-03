$(document).ready(() => {
  $("button").click(function (e) {
    e.preventDefault();
    let Info = {
      name: $("input[name=name]").val(),
      rgtnumber: $("input[name=rgtnum]").val(),
      city: $("input[name=city]").val(),
      state: $("input[name=state]").val(),
      CreatedAt: $("input[name=CreatedAt]").val(),
      phonenum: $("input[name=phonenumber]").val(),
    };
    $.ajax({
      method: "post",
      url: `/company/${$(this).attr("companyId")}`,
      data: Info,
      success: function (data) {
        if (data === "update") {
          alert("iformation updated");
          $(location).attr("href", "http://localhost:5005/company/home");
        }
      },
      error: function (err) {
        console.log(err);
      },
    });
  });
  $(".deleteBtn").click(function () {
    $.ajax({
      method: "delete",
      url: `/company/${$(this).attr("companyId")}`,
      success: function (data) {
        if (data === "delete") {
          alert("The company was deleted");
          $(location).attr("href", "http://localhost:5005/company/home");
        }
      },
      error: function (err) {
        console.log(err);
      },
    });
  });
});
