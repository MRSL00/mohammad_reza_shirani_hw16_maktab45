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
      method: "put",
      url: "/company",
      data: Info,
      success: function (data) {
        console.log(data);
        if (data === "save") {
          alert("The new company was saved");
          $(location).attr("href", "http://localhost:5005/company/home");
        }
      },
      error: function (err) {
        console.log(err);
      },
    });
  });
});
