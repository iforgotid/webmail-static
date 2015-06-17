function init() {
  $('#textarea').wysihtml5();
  $('#sendMail').click(function(){
    var mailto = $('#mailto').val();
    //var copyto = $('#copyto').val();
    var subject = $('#subject').val();
    var content = $('#textarea').val();
    var postData = {
      to: [
        { 'email': mailto,
          'name': 'Xue Jiaqi',
          'type': 'to'}
      ],
      subject: subject,
      html: content
    }
    $.ajax({
      type: "POST",
      url: '/api/sendMail',
      dataType: 'json',
      data: JSON.stringify(postData),
      success: function (data) {
        console.log(data);
      }
    })
  });

}
init();