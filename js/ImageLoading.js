var playerPic=document.createElement("img");
var UFOPic=document.createElement("img");
var trackPics = [];

var picsToLoad = 0;

function countLoadedImageAndLaunchIfReady() {
  picsToLoad--;
  if(picsToLoad == 0) { // last image loaded?
    loadingDoneSoStartGame();
  }
}

function beginLoadingImage(imgVar, fileName) {
  imgVar.onload=countLoadedImageAndLaunchIfReady;
  imgVar.src="images/"+fileName;
}

function loadImageForTrackCode(trackCode, fileName) {
  trackPics[trackCode] = document.createElement("img");
  beginLoadingImage(trackPics[trackCode],fileName);
}

function loadImages() {

var imageList = [
  {varName:playerPic, theFile:"player1.png"},
  {varName:UFOPic, theFile: "ufo.png"}
  ];

picsToLoad = imageList.length;

for(var i=0;i<imageList.length;i++) {
  if(imageList[i].trackType != undefined) {
    loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
  } else {
    beginLoadingImage(imageList[i].varName, imageList[i].theFile);
  } // end of else
} // end of for imageList

} // end of function loadImages
