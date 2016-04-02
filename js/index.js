function sendEmail2Me() {
    var myEmaliAddr = 'zzuwzj@163.com';
    var subject = $('#subject').val();
    var content = $('#message').val();
    sendEmail(myEmaliAddr, subject, content);
}

function sendEmail(mailAddr, subject, content) {
    if (!mailAddr) {
        return;
    }
    var url = 'mailto:' + mailAddr;
    if (subject || content) {
        url += '?';
        url += 'subject=' + subject;
        url += '&body=' + content;
    }
    url = encodeURI(url);
    var win = window.open(url);
    win.close();
}
