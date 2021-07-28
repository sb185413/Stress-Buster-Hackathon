$(document).ready(function(){
    $('#SaveYourWork').hide();
    $('#main').hide();
    $('#BlankScreen').hide();
    var count= 0;
    function changeImage() {
        var image = document.getElementById('myImage');
        var imageArray=["Leg-Swings.gif","hip-flexion-gif.gif","walking.gif","eye_roll_right.gif","hand.gif","handsMovement.gif"]
        var msgArray =["Leg Swings","Stretch the hip!!","Walk....Walk....Walk", "Eye Exercise!!!","Stretch your hands!!!","Loosen your shoulders!!!" ]
        image.src = imageArray[count];
        document.getElementById('message').innerHTML = msgArray[count];
        count++;
        count = count % imageArray.length;                  
        }
    // function openWin() {
    //     myWindow = window.open("C:\\Users\\sb185413\\OneDrive - NCR Corporation\\Desktop\\Test\\Hackathon2021\\popup\\index.html", "_blank", "width=100%, height=100%");   // Opens a new window
    //     }
          
    // function closeWin() {
    //     myWindow.close();   // Closes the new window
    //     }
    function disable()
    {
        document.onkeydown = function (e) 
        {
        return false;
        }
    }
    function enable()
    {
        document.onkeydown = function (e) 
        {
        return true;
        }
    }
    function Counter(){
        let val =10;
        const countdownEl = document.getElementById('timer1');
        while(val >0){
            setTimeout(countDown,1000);
        }      
        function countDown(){
            countdownEl.innerHTML = 'Exercise video coming up in ${val} seconds';
            val--
        }
        // while(val > 0){
        //     console.log(val)
           
        //     setInterval(function(){
        //         document.getElementById('timer1').innerHTML= 'Exercise video coming up in '+val+' seconds';                
        //     },5000)
        //     val--;            
        // }        
    }

    function showWindow(){  
        // disable()     
        console.log('Show window');
        $('#SaveYourWork').hide();
        $('#BlankScreen').hide();
        // openWin();
        // setTimeout(showSaveWorkWindow,5000)
        // $('#SaveYourWork').hide();
        // setTimeout($('#BlankScreen').show(),3000)
        $('#main').show();
        // stop scroll
        $('html body').css("overflow","hidden");
        //auto hide
        changeImage();
        // enable();
        setTimeout(hideWindow , 10000)            
        }

    function hideWindow(){
        console.log('hide window')
        $('#main').hide();
        $('#SaveYourWork').hide();
        $('#BlankScreen').hide();
        // closeWin(); 
        // on scroll
        $('html body').css("overflow","scroll"); 
        // changeImage();
        // setTimeout(showWindow , 5000)
        setTimeout(showBlankScreen , 10000)
        
    }

    function showSaveWorkWindow(){
        console.log('showSaveWorkWindow');
        // $('#main').hide();
        // $('#BlankScreen').hide();
        
        $('#SaveYourWork').show();
        // Counter();
        $('html body').css("overflow","hidden"); 
        // setTimeout(hideSaveWorkWindow, 2000)
        setTimeout(showWindow , 5000);
    }

    function hideSaveWorkWindow(){
        console.log('hideSaveWorkWindow')
        $('#SaveYourWork').hide();
        // $('#main').hide();
        // $('#BlankScreen').hide();
        // closeWin(); 
        // on scroll
        $('html body').css("overflow","scroll"); 
        // changeImage();
        // setTimeout(showBlankScreen , 5000)
        setTimeout(showWindow , 5000)
    }

    function showBlankScreen(){
        console.log('showBlankScreen');
        $('#SaveYourWork').hide();
        $('#main').hide();
        $('#BlankScreen').show();
        // stop scroll
        $('html body').css("overflow","hidden");
        //auto hide
        // $('#BlankScreen').hide();
        // closeWin(); 
        // on scroll
        $('html body').css("overflow","scroll"); 
        setTimeout(showSaveWorkWindow,5000)
        // setTimeout(showWindow , 5000)
    }
   
    // now call function automatically after some time    
    // auto open after 2secs 
    // setTimeout(showWindow , 2)
    setTimeout(showSaveWorkWindow,20)

})