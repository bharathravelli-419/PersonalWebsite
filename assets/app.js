// const mailLink = document.querySelector('.mails-links');
//     mailLink.addEventListener('click', (event) => {
//       event.preventDefault();
//       const emailAddress = "bharathravelli419@gmail.com"; // Your email address
//       const mailToUrl = `mailto:${emailAddress}`;
//       dummy(mailToUrl);
//       console.log(mailToUrl,typeof(mailToUrl));
//     });

// var dummy =(str)=>{
//     $("mails-links").attr("href",str);
// }

$(".ps").on('click',()=>{
    $(".ps").attr('href',"#psSection");
})
$(".fm").on('click',()=>{
    $(".fm").attr("href","#Follow");
})