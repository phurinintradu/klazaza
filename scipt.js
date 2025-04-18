function setAlert() {
    let intervalid = 0;
    intervalid = setInterval(function() {
        const isBreak = confirm("พักสายตาสักหน่อยไหม?");
        if (isBreak) {
            clearInterval(intervalid);
            alert("พักสายตาแล้วนะ");
        }
    }, 2 * 60 * 1000);
}