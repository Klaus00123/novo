function opala(){
  navigator.mediaDevices.getUserMedia({audio:true})
  classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/eFnQoEEMU/model.json", modelReady)
}

function modelReady(){
  classifier.classify(gotResults)
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results)
    document.getElementById("mamaco").innerHTML="Posso ouvir: "+results[0].label
    document.getElementById("nova").innerHTML="Precisão: "+(results[0].confidence*100).toFixed(2)+"%"
    
    img1=document.getElementById("a1")
    img2=document.getElementById("a2")
    img3=document.getElementById("a3")
    img4=document.getElementById("a4")

    if (results[0].label == "acorda") {
      img1.src="aliens-01.gif"
      img2.src="aliens-02.png"
      img3.src="aliens-03.png"
      img4.src="aliens-04.png"
      
    } else if (results[0].label == "zeze ddaa man") {
      img1.src="aliens-01.png"
      img2.src="aliens-02.gif"
      img3.src="aliens-03.png"
      img4.src="aliens-04.png"
    } else if (results[0].label == "guata lima") {
      img1.src="aliens-01.png"
      img2.src="aliens-02.png"
      img3.src="aliens-03.gif"
      img4.src="aliens-04.png"
    }else{
      img1.src="aliens-01.png"
      img2.src="aliens-02.png"
      img3.src="aliens-03.png"
      img4.src="aliens-04.gif"
    }
  }
}