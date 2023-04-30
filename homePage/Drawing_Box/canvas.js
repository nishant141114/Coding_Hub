let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let pencilColor = document.querySelectorAll(".pencil-color");
let pencilWidthElem = document.querySelector(".pencil-width");
let eraserWidthElem = document.querySelector(".eraser-width");
let download = document.querySelector(".download");
let redo = document.querySelector(".redo");
let undo = document.querySelector(".undo");
let penColor = "red";
let eraserColor = "white";
let penWidth = pencilWidthElem.value;
let eraserWidth = eraserWidthElem.value;

let undoRedoTracker = []; //Data
let track = 0; //Represent which action from tracker array
let mouseDown = false;

//API
let tool = canvas.getContext("2d");
tool.clearRect(0, 0, canvas.width, canvas.height);

tool.strokeStyle = "red";
tool.lineWidth = "3";

// tool.beginPath();//new path or graphic
// tool.moveTo(10,10);//start point
// tool.lineTo(100,150);//end point
// tool.stroke();//fill color (fill graphic)

//mousedown -> start new path,mousemove -> path fill (graphics)
canvas.addEventListener("mousedown", (e) => {
    mouseDown = true;
    beginPath({
        x: e.clientX,
        y: e.clientY
    })
    let data = {
        x: e.clientX,
        y: e.clientY
    }
    // socket.emit("beginPath", data);
    tool.beginPath();
    tool.moveTo(e.clientX,e.clientY);
})
canvas.addEventListener("mousemove", (e) => {
    if (mouseDown) {
        // let data = {
        //     x: e.clientX,
        //     y: e.clientY,
        // }
        // socket.emit("drawStroke",data);
        
        tool.lineTo(e.clientX,e.clientY);
        tool.stroke();
    }
    
        // tool.lineTo(e.clientX,e.clientY);
        // tool.stroke();
        // drawStroke({
        //     x: e.clientX,
        //     y: e.clientY,
        //     // color:eraserFlag?eraserColor:penColor,
        //     // width:eraserFlag?eraserWidth:penWidth
        // })
    

})
canvas.addEventListener("mouseup", (e) => {
    mouseDown = false;
    let url = canvas.toDataURL();
    undoRedoTracker.push(url);
    track = undoRedoTracker.length - 1;
})
undo.addEventListener("click", (e) => {
    if (track > 0) track--;
    //track action
    let trackObj = {
        trackValue: track,
        undoRedoTracker

    }
    undoRedoCanvas(trackObj);
    // socket.emit("redoUndo",data);
})
redo.addEventListener("click", (e) => {
    if (track < undoRedoTracker.length - 1) track++;
    //track action
    let trackObj = {
        trackValue: track,
        undoRedoTracker

    }

    undoRedoCanvas(trackObj);
    // socket.emit("redoUndo",data);

})
function undoRedoCanvas(trackObj) {
    track = trackObj.trackValue;
    undoRedoTracker = trackObj.undoRedoTracker;
    let url = undoRedoTracker[track];
    let img = new Image(); //new image reference element
    img.src = url;
    img.onload = (e) => {
        // socket.emit("redoUndo",img);
        tool.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    
}
function beginPath(strokeObj) {
    tool.beginPath();
    tool.moveTo(strokeObj.x, strokeObj.y);
}
function drawStroke(strokeObj) {
    // tool.strokeStyle = strokeObj.color;
    // tool.lineWidth = strokeObj.width;
    tool.lineTo(strokeObj.x, strokeObj.y);
    tool.stroke();
}
pencilColor.forEach((colorElem) => {
    colorElem.addEventListener("click", (e) => {
        let color = colorElem.classList[0];
        penColor = color;
        tool.strokeStyle = penColor;
    })
})
pencilWidthElem.addEventListener("change", (e) => {
    penWidth = pencilWidthElem.value;
    tool.lineWidth = penWidth;
})
eraserWidthElem.addEventListener("change", (e) => {
    eraserWidth = eraserWidthElem.value;
    tool.lineWidth = eraserWidth;
})
eraser.addEventListener("click", (e) => {
    if (eraserFlag) {
        tool.strokeStyle = eraserColor;
        tool.lineWidth = eraserWidth;
    }
    else {
        tool.strokeStyle = penColor;
        tool.lineWidth = penWidth;
    }

})
download.addEventListener("click", (e) => {
    var imgData = tool.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data;
    for (var i = 0; i < data.length; i += 4) {
        if (data[i + 3] < 255) {
            data[i] = 255;
            data[i + 1] = 255;
            data[i + 2] = 255;
            data[i + 3] = 255;
        }
    }
    tool.putImageData(imgData, 0, 0);
    let url = canvas.toDataURL();
    let a = document.createElement("a");
    a.href = url;
    a.download = "board.jpg";
    a.click();
})

// socket.on("beginPath",(data)=>{
//     //data -> data from server
//     beginPath(data);
// })
// socket.on("drawStroke",(data)=>{
//     drawStroke(data);
// })
// socket.on("redoUndo",(data)=>{
//     undoRedoCanvas(data);
// })