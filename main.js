// Supports only weight 400
import '@fontsource-variable/roboto-flex';

 window.onload = function () {
   showWidthHeight();
   //changeColorScheme();
   setSchemeImage();
   window.addEventListener("resize", () => {
     showWidthHeight();
   });
 };

 function showWidthHeight() {
   let windowInnerWidth = window.innerWidth;
   let windowInnerHeight = window.innerHeight;
   let elementClientWidth = document.documentElement.clientWidth;
   let elementClientHeight = document.documentElement.clientHeight;
   let elementOffsetWidth = document.documentElement.offsetWidth;
   let elementOffsetHeight = document.documentElement.offsetHeight;

   let vh = windowInnerHeight * 0.01;
   document.documentElement.style.setProperty("--vh", `${vh}px`);
   let vw = elementClientWidth * 0.01;
   document.documentElement.style.setProperty("--vw", `${vw}px`);
 }

 function setFixedBackground() {
   let className = "backgroundAttachmentFix";
   let elementDiv = document.createElement("div");
   elementDiv.className = className;
   document.body.prepend(elementDiv);
 }
 function setSchemeImage() {
   let hue = getRandomInt(360);
   let hslBackground;
   let hslHeader;
   let hslCard;
   let hslLink;
   setFixedBackground();
   hslHeader = "#b0b2b4";
   hslCard = "rgba(248,250,255,.8)";
   hslLink = "#cc0000";

   let elementBackground = document.getElementById("landingPage");
   let elementFlexBox = document.getElementById("flexbox");

   document.documentElement.style.setProperty("--linkHover", hslLink);

   elementFlexBox.style.gap = "40px";
   elementFlexBox.style.marginTop = "40px";
   elementFlexBox.style.marginBottom = "40px";

   let headers = document.getElementsByClassName("cardHeader");
   for (let i = 0; i < headers.length; i++) {
     headers[i].style.backgroundColor = hslHeader;
   }

   let cards = document.getElementsByClassName("card");
   for (let i = 0; i < cards.length; i++) {
     cards[i].style.backgroundColor = hslCard;
     // cards[i].style.backdropFilter = "blur(10px)";
   }

   elementBackground.style.backgroundColor = hslBackground;
   document.body.style.backgroundColor = hslBackground;
 }

 function changeColorScheme() {
   return;
   let hue = getRandomInt(360);
   let hslBackground = `hsl(${hue},100%, 96%)`;
   let hslHeader = `hsl(${hue},100%, 74%)`;
   let hslLink = `hsl(${hue},100%, 50%)`;

   let elementBackground = document.getElementById("landingPage");

   document.documentElement.style.setProperty("--linkHover", hslLink);

   let headers = document.getElementsByClassName("cardHeader");
   for (let i = 0; i < headers.length; i++) {
     headers[i].style.backgroundColor = hslHeader;
   }
   elementBackground.style.backgroundColor = hslBackground;
   document.body.style.backgroundColor = hslBackground;
 }

 function getRandomInt(max) {
   return Math.floor(Math.random() * max);
 }