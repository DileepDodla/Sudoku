    var sudokuArray = [
            [5,3,4,6,7,8,9,1,2],
            [6,7,2,1,9,5,3,4,8],
            [1,9,8,3,4,2,5,6,7],
            [8,5,9,7,6,1,4,2,3],
            [4,2,6,8,5,3,7,9,1],
            [7,1,3,9,2,4,null,5,6],
            [9,6,1,5,3,7,2,8,4],
            [2,8,7,4,1,9,6,3,5],
            [3,4,5,2,8,6,1,7,9]
    ];

    // var sudokuArray = [
    //     [5,3,null,null,7,null,null,null,null],//[5,3, , ,7, , , , ]
    //     [6,null,null,1,9,5,null,null,null],
    //     [null,9,8,null,null,null,null,6,null],
    //     [8,null,null,null,6,null,null,null,3],
    //     [4,null,null,8,null,3,null,null,1],
    //     [7,null,null,null,2,null,null,null,6],
    //     [null,6,null,null,null,null,2,8,null],
    //     [null,null,null,4,1,9,null,null,5],
    //     [null,null,null,null,8,null,null,7,9]
    // ];

    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            tempID = document.getElementById((i+1).toString()+(j+1).toString());
            tempID.value = sudokuArray[i][j];
            if(sudokuArray[i][j]!=null){
                tempID.disabled = true;
                tempID.style.color = "black";
            }
        }
    }

    var sudokuSolArray = [
            [5,3,4,6,7,8,9,1,2],
            [6,7,2,1,9,5,3,4,8],
            [1,9,8,3,4,2,5,6,7],
            [8,5,9,7,6,1,4,2,3],
            [4,2,6,8,5,3,7,9,1],
            [7,1,3,9,2,4,8,5,6],
            [9,6,1,5,3,7,2,8,4],
            [2,8,7,4,1,9,6,3,5],
            [3,4,5,2,8,6,1,7,9]
    ];

    $('input[type="text"]').on('input', function cellChecker() {
        this.value = this.value.replace(/[^1-9]/g,'');
        var s = this.id;
        var i = parseInt(s[0]);
        var j = parseInt(s[1]);
        if(this.value==sudokuSolArray[i-1][j-1]){
            sudokuArray[i-1][j-1]=sudokuSolArray[i-1][j-1];
            this.disabled = true;
            this.style.color = "black";
            if(this.className=="box-hl-light"){
                this.style.backgroundColor = "white";
            }
            else{
                this.style.backgroundColor = "rgb(177,176,176)";
            }

            var flag=0;
            for(var i=0;i<9;i++)
                for(var j=0;j<9;j++)
                    if(sudokuArray[i][j]==null){
                        flag=1;
                        break;
                    }
            if(flag==0){
                setTimeout(function(){ 
                    clearInterval(myTime);
                    var modal = document.getElementById('myModal');
                    var span = document.getElementsByClassName("close")[0];
                    var btn = document.getElementById('continue');
                    modal.style.display = "flex";
                    span.onclick = function() {
                        modal.style.display = "none";
                    }
                    btn.onclick = function() {
                        modal.style.display = "none";
                    }
                    window.onclick = function(event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                    //alert("Congratulations! You solved it.\nHip Hip Hurray!");
                    //setTimeout(function(){window.open("New-Year.html","_self",);},500);
                }, 1000);
            }
        }
        else
            if(this.value>=1 && this.value<=9)
                this.style.backgroundColor = "red";
    });

    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    var myTime = setInterval(setTime,1000);

    function setTime() {
        ++totalSeconds;
        secondsLabel.innerHTML = timer(totalSeconds % 60);
        minutesLabel.innerHTML = timer(parseInt(totalSeconds / 60));
    }

    function timer(val) {
        var valStr = val + "";
        if (valStr.length < 2) {
            return "0" + valStr;
        } 
        else {
            return valStr;
        }
    }