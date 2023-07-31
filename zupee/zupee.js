
        const myDisplay=()=>{
            const drop = document.getElementById("display");
            if (drop.style.display == "block") {
                drop.style.display = "none";
            }
            else {
                drop.style.display = "block";
            }
        }
        // const ludoSupreme=()=>{
        //     document.getElementById('homebox').style.display = "none";
        //     document.getElementById('ludosupreme').style.display="flex";
        //     document.getElementById('ludoninja').style.display="none";
        //     document.getElementById('ludoturbo').style.display="none";
        //     document.getElementById('snakeladder').style.display="none";
        //     document.getElementById('trumpcard').style.display="none";
        //     document.getElementById('ludoleague').style.display="none";
        //     document.getElementById('cricketx').style.display="none";
        //     document.getElementById('crickercard').style.display="none";
        //     document.getElementById('display').style.display = "none";
        // }
        // const ludoNinja=()=>{
        //     document.getElementById('homebox').style.display = "none";
        //     document.getElementById('ludosupreme').style.display="none";
        //     document.getElementById('ludoninja').style.display="flex";
        //     document.getElementById('ludoturbo').style.display="none";
        //     document.getElementById('snakeladder').style.display="none";
        //     document.getElementById('trumpcard').style.display="none";
        //     document.getElementById('ludoleague').style.display="none";
        //     document.getElementById('cricketx').style.display="none";
        //     document.getElementById('crickercard').style.display="none";
        //     document.getElementById('display').style.display = "none";
        // }
        // const ludoTurbo=()=>{
        //     document.getElementById('homebox').style.display = "none";
        //     document.getElementById('ludosupreme').style.display="none";
        //     document.getElementById('ludoninja').style.display="none";
        //     document.getElementById('ludoturbo').style.display="flex";
        //     document.getElementById('snakeladder').style.display="none";
        //     document.getElementById('trumpcard').style.display="none";
        //     document.getElementById('ludoleague').style.display="none";
        //     document.getElementById('cricketx').style.display="none";
        //     document.getElementById('crickercard').style.display="none";
        //     document.getElementById('display').style.display = "none";
        // }
        // const snakeLadders=()=>{
        //     document.getElementById('homebox').style.display = "none";
        //     document.getElementById('ludosupreme').style.display="none";
        //     document.getElementById('ludoninja').style.display="none";
        //     document.getElementById('ludoturbo').style.display="none";
        //     document.getElementById('snakeladder').style.display="flex";
        //     document.getElementById('trumpcard').style.display="none";
        //     document.getElementById('ludoleague').style.display="none";
        //     document.getElementById('cricketx').style.display="none";
        //     document.getElementById('crickercard').style.display="none";
        //     document.getElementById('display').style.display = "none";
        // }
        // const trumpCard=()=>{
        //     document.getElementById('homebox').style.display = "none";
        //     document.getElementById('ludosupreme').style.display="none";
        //     document.getElementById('ludoninja').style.display="none";
        //     document.getElementById('ludoturbo').style.display="none";
        //     document.getElementById('snakeladder').style.display="none";
        //     document.getElementById('trumpcard').style.display="flex";
        //     document.getElementById('ludoleague').style.display="none";
        //     document.getElementById('cricketx').style.display="none";
        //     document.getElementById('crickercard').style.display="none";
        //     document.getElementById('display').style.display = "none";
        // }
        // const ludoLeague=()=>{
        //     document.getElementById('homebox').style.display = "none";
        //     document.getElementById('ludosupreme').style.display="none";
        //     document.getElementById('ludoninja').style.display="none";
        //     document.getElementById('ludoturbo').style.display="none";
        //     document.getElementById('snakeladder').style.display="none";
        //     document.getElementById('trumpcard').style.display="none";
        //     document.getElementById('ludoleague').style.display="flex";
        //     document.getElementById('cricketx').style.display="none";
        //     document.getElementById('crickercard').style.display="none";
        //     document.getElementById('display').style.display = "none";
        // }
        // const cricketX=()=>{
        //     document.getElementById('homebox').style.display = "none";
        //     document.getElementById('ludosupreme').style.display="none";
        //     document.getElementById('ludoninja').style.display="none";
        //     document.getElementById('ludoturbo').style.display="none";
        //     document.getElementById('snakeladder').style.display="none";
        //     document.getElementById('trumpcard').style.display="none";
        //     document.getElementById('ludoleague').style.display="none";
        //     document.getElementById('cricketx').style.display="flex";
        //     document.getElementById('crickercard').style.display="none";
        //     document.getElementById('display').style.display = "none";
        // }
        // const cricketCard=()=>{

        //     document.getElementById('homebox').style.display = "none";
        //     document.getElementById('ludosupreme').style.display="none";
        //     document.getElementById('ludoninja').style.display="none";
        //     document.getElementById('ludoturbo').style.display="none";
        //     document.getElementById('snakeladder').style.display="none";
        //     document.getElementById('trumpcard').style.display="none";
        //     document.getElementById('ludoleague').style.display="none";
        //     document.getElementById('cricketx').style.display="none";
        //     document.getElementById('crickercard').style.display="flex";
        //     document.getElementById('display').style.display = "none";
        // }
        const myQuestion1=()=>{
            let ans1 = document.getElementById('answer1');
            if(ans1.style.display=="block"){
                ans1.style.display="none";
            }
            else{
                ans1.style.display="block";
                document.getElementById('answer2').style.display="none";
                document.getElementById('answer3').style.display="none";
                document.getElementById('answer4').style.display="none";
                document.getElementById('answer5').style.display="none";
                document.getElementById('answer6').style.display="none";
                document.getElementById('answer7').style.display="none";
                document.getElementById('answer8').style.display="none";

                
            }
            
        }
        const myQuestion2=()=>{
            let ans1 = document.getElementById('answer2');
            if(ans1.style.display=="block"){
                ans1.style.display="none";
            }
            else{
                ans1.style.display="block";
                document.getElementById('answer1').style.display="none";
                document.getElementById('answer3').style.display="none";
                document.getElementById('answer4').style.display="none";
                document.getElementById('answer5').style.display="none";
                document.getElementById('answer6').style.display="none";
                document.getElementById('answer7').style.display="none";
                document.getElementById('answer8').style.display="none";

            }
            
        }
        const myQuestion3=()=>{
            let ans1 = document.getElementById('answer3');
            if(ans1.style.display=="block"){
                ans1.style.display="none";
            }
            else{
                ans1.style.display="block";
                document.getElementById('answer2').style.display="none";
                document.getElementById('answer1').style.display="none";
                document.getElementById('answer4').style.display="none";
                document.getElementById('answer5').style.display="none";
                document.getElementById('answer6').style.display="none";
                document.getElementById('answer7').style.display="none";
                document.getElementById('answer8').style.display="none";

            }
            
        }
        const myQuestion4=()=>{
            let ans1 = document.getElementById('answer4');
            if(ans1.style.display=="block"){
                ans1.style.display="none";
            }
            else{
                ans1.style.display="block";
                document.getElementById('answer2').style.display="none";
                document.getElementById('answer3').style.display="none";
                document.getElementById('answer1').style.display="none";
                document.getElementById('answer5').style.display="none";
                document.getElementById('answer6').style.display="none";
                document.getElementById('answer7').style.display="none";
                document.getElementById('answer8').style.display="none";

            }
            
        }
        const myQuestion5=()=>{
            let ans1 = document.getElementById('answer5');
            if(ans1.style.display=="block"){
                ans1.style.display="none";
            }
            else{
                ans1.style.display="block";
                document.getElementById('answer2').style.display="none";
                document.getElementById('answer3').style.display="none";
                document.getElementById('answer4').style.display="none";
                document.getElementById('answer1').style.display="none";
                document.getElementById('answer6').style.display="none";
                document.getElementById('answer7').style.display="none";
                document.getElementById('answer8').style.display="none";

            }
            
        }
        const myQuestion6=()=>{
            let ans1 = document.getElementById('answer6');
            if(ans1.style.display=="block"){
                ans1.style.display="none";
            }
            else{
                ans1.style.display="block";
                document.getElementById('answer2').style.display="none";
                document.getElementById('answer3').style.display="none";
                document.getElementById('answer4').style.display="none";
                document.getElementById('answer5').style.display="none";
                document.getElementById('answer1').style.display="none";
                document.getElementById('answer7').style.display="none";
                document.getElementById('answer8').style.display="none";

            }
            
        }
        const myQuestion7=()=>{
            let ans1 = document.getElementById('answer7');
            if(ans1.style.display=="block"){
                ans1.style.display="none";
            }
            else{
                ans1.style.display="block";
                document.getElementById('answer2').style.display="none";
                document.getElementById('answer3').style.display="none";
                document.getElementById('answer4').style.display="none";
                document.getElementById('answer5').style.display="none";
                document.getElementById('answer6').style.display="none";
                document.getElementById('answer1').style.display="none";
                document.getElementById('answer8').style.display="none";
            }
            
        }
        const myQuestion8=()=>{
            let ans1 = document.getElementById('answer8');
            if(ans1.style.display=="block"){
                ans1.style.display="none";
            }
            else{
                ans1.style.display="block";
                document.getElementById('answer2').style.display="none";
                document.getElementById('answer3').style.display="none";
                document.getElementById('answer4').style.display="none";
                document.getElementById('answer5').style.display="none";
                document.getElementById('answer6').style.display="none";
                document.getElementById('answer1').style.display="none";
                document.getElementById('answer7').style.display="none";
            }
            
        }