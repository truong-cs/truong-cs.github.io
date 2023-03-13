

function bigger(){
    alert("Hello, world!");
    document.getElementById("input-text1").style.fontSize = "24pt";
}

function fancify(){
    document.getElementById("input-text1").style.fontWeight = "bold";
    document.getElementById("input-text1").style.color = "blue";
    document.getElementById("input-text1").style.textDecoration = "underline"
}

function normal(){
    document.getElementById("input-text1").style.fontWeight = "normal";
    document.getElementById("input-text1").style.color = "black";
    document.getElementById("input-text1").style.textDecoration = "none";
}

function change(){
    alert("Radio Input Changed!");
}

function mooUpperCase() {
    const text = document.getElementById("input-text1").value;
  
    const words = text.split(" ");
    const lastWord = words.pop();
    const modifiedText = `${words.join(" ")} ${lastWord} -Moo`;
    document.getElementById("input-text1").value = modifiedText.toUpperCase();  
  }
  