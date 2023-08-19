var Webflow = Webflow || [];
Webflow.push(function () {
var script = document.createElement('script');
script.type = 'text/javascript';
script.defer = 'defer';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.1/jspdf.min.js';
var script2 = document.createElement('script');
script2.type = 'text/javascript';
script2.defer = 'defer';
script2.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
document.head.appendChild(script);
document.head.appendChild(script2);
function demoFromHTML1() {
var doc = new jsPDF({
format: "a4"
});
var width = doc.internal.pageSize.width;
var height = doc.internal.pageSize.height;
html2canvas(document.getElementById("content"),{scrollY: -window.scrollY,scrollX: -window.scrollX}, {
scale: "3",
quality: "3"
}).then(canvas => {
this.imgFile = canvas;
doc.addImage(this.imgFile, "PNG", 0, 0,width,height);
doc.save("filename" + ".pdf");
});

}
function demoFromHTML2() {
var doc = new jsPDF({
format: "a4"
});
var width = doc.internal.pageSize.width;
var height = doc.internal.pageSize.height;
html2canvas(document.getElementById("content2"),{scrollY: -window.scrollY,scrollX: -window.scrollX}, {
scale: "3",
quality: "3"
}).then(canvas => {
this.imgFile = canvas;
doc.addImage(this.imgFile, "PNG", 0, 0,width,height);
doc.save("filename" + ".pdf");
});

}

//call the function for first button
$('#GENERATE-PDF').click(function () {
demoFromHTML1();
});
//call the function for second button
$('#generate2').click(function () {
demoFromHTML2();
});
});