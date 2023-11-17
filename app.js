    const Config = {
        width: "360px",
        height:"560px",
        startBg: "https://img.euromsg.net/14593DC814F2419A89ADD946D4713230/images/Pop-Up%20Kutu%20Oyun%20-%20Background.jpg",
        blueBoxImg: "https://img.euromsg.net/14593DC814F2419A89ADD946D4713230/images/hediyekutusuguncel3.png",
        pinkBoxImg: "https://img.euromsg.net/14593DC814F2419A89ADD946D4713230/images/hediyekutusuguncel2.png",
        yellowBoxImg: "https://img.euromsg.net/14593DC814F2419A89ADD946D4713230/images/hediyekutusuguncelkutular1.png",
        finalBox1: "https://img.euromsg.net/14593DC814F2419A89ADD946D4713230/images/Pop-Up%20Kutu%20Oyun%20-%20%C4%B0ndirim%20-%20900%20140.jpg",
        finalBox2: "https://img.euromsg.net/14593DC814F2419A89ADD946D4713230/images/Pop-Up%20Kutu%20Oyun%20-%20%C4%B0ndirim%20-%201000%20160.jpg",
        finalBox3: "https://img.euromsg.net/14593DC814F2419A89ADD946D4713230/images/Pop-Up%20Kutu%20Oyun%20-%20%C4%B0ndirim%20-%201200%20200.jpg"
    };
    
    fireGame();
    
    function fireGame() {
        const style = document.createElement('style');
        style.innerHTML = `
    
            #vl-box-gamification{
                z-index: 10000;
                width: 100%;
                height: 100%;
                position: fixed;
                top: 0;
                left: 0;
            }
    
            .vl-boxes-overlay{
                z-index: 10000;
                width: 100%;
                height: 100%;
                background: black;
                opacity: 0.8;
                position: fixed;
                top: 0;
                left: 0;
            }
    
            #vl-box-gamification .vl-boxes {
                position: absolute;
                width: ${Config.width};
                height: ${Config.height};
                background-image: url(${Config.startBg});
                background-repeat: no-repeat;
                z-index:10001;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                -webkit-transform: translate(-50%,-50%);
            }
    
            .vl-box-container {
                position: absolute;
                top: 50%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1em;
            }
    
            .vl-boxes-close{
                position: absolute;
                right: 5px;
                top: 5px;
                cursor: pointer;
                z-index: 100002;
                width:25px !important;
                height:25px ;       
        }
        
            .vl-box{
                width: 5em;
                height: 5em;
                cursor: pointer;
            }
    
            .vl-cupon-code{
                position: absolute;
                bottom: 5.9em;
                width: 100%;
                text-align: center;
                font-size: 1.5em;
                letter-spacing: 1px;
                font-weight: bold;
                background: linear-gradient(to right, hsl(61deg 79% 63%) 0, #df9059 10%, #f9934a 20%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                animation: shine 10s infinite linear;
                cursor: pointer;
            }
    
            .vl-box-animation{
                animation: tilt-n-move-shaking 0.50s infinite;
            }
    
            .vl-box-clicked-animation{
                animation: tilt-n-move-shaking-open-box 2s;
            }
    
            .vl-copy-text{
                position: absolute;
                display: none;
                bottom: 1em;
                width: 100%;
                text-align: center;
                font-size: 1em;
            }
    
            @keyframes shine {
                0% {
                background-position: 0;
                }
                100% {
                background-position: 600px;
                }
            }  
    
            @keyframes tilt-n-move-shaking-open-box {
                0% { width: 5em;}
                100% { width: 8rem;}
            }
    
            @keyframes tilt-n-move-shaking {
                0% { transform: translate(0, 0) rotate(0deg);}
                25% { transform: translate(5px, 5px) rotate(5deg);}
                50% { transform: translate(0, 0) rotate(0eg);}
                75% { transform: translate(-5px, 5px) rotate(-5deg);}
                100% { transform: translate(0, 0) rotate(0deg);}
            }
        `;
        document.body.append(style);
        const container = document.createElement('div');
        container.id = "vl-box-gamification";
    
        container.innerHTML = 
        `
            <div class="vl-boxes-overlay"> </div>      
            <div class="vl-boxes">
            <img class="vl-boxes-close" src="https://img.visilabs.net/banner/uploaded_images/323_1326_20210127153709279.png">
                <div class="vl-box-container">
                    <img class="vl-box-1 vl-box" src=${Config.blueBoxImg}> 
                    <img class="vl-box-2 vl-box" src=${Config.pinkBoxImg}> 
                    <img class="vl-box-3 vl-box" src=${Config.yellowBoxImg}> 
                </div>
            </div>
        `;
    
        document.body.append(container);
    
        const couponCodes = ["SURPRIZ140", "SURPRIZ160", "SURPRIZ200"];
        const boxes = document.querySelector('.vl-boxes');
    
        const blueBox = document.querySelector('.vl-box-1');
        const pinkBox = document.querySelector('.vl-box-2');
        const yellowBox = document.querySelector('.vl-box-3');
    
        blueBox.addEventListener("click", () => { finalPage(blueBox, couponCodes[0], Config.finalBox1) });
        pinkBox.addEventListener("click", () => { finalPage(pinkBox, couponCodes[1], Config.finalBox2) });
        yellowBox.addEventListener("click", () => { finalPage(yellowBox, couponCodes[2], Config.finalBox3) });
    
    
        function finalPage(box, cuponCode, finalBox) {
            box.classList.remove('vl-box');
            box.style.zIndex = "9";
            setTimeout(box.classList.add('vl-box-clicked-animation'), 0);   
            setTimeout(() => {
                boxes.innerHTML =  `
                        <img class="vl-boxes-close" src="https://img.visilabs.net/banner/uploaded_images/323_1326_20210127153709279.png">
                        <span class="vl-cupon-code"> ${cuponCode}</span>
                        <span class="vl-copy-text">Kod Kopyalandı</span>
                `;
                boxes.setAttribute('style', `background-image:url(${finalBox});`);
                finalPageFunctions(cuponCode);
            }, 1500);             
        }
    
        function finalPageFunctions(cuponCode) {
            document.querySelector('.vl-cupon-code')
            .addEventListener('click', () => {
                document.querySelector('.vl-copy-text').style.display = "block"; 
                navigator.clipboard.writeText(cuponCode);
                setTimeout(() => {
                    closeBox();
                }, 1500);
            });
            document
            .querySelector(".vl-boxes-close")
            .addEventListener("click", closeBox);
        
        }
    
        document.querySelectorAll('.vl-box').forEach(box => {
            setTimeout(() => {
                box.classList.add("vl-box-animation");
            }, 500);
        });
    
    
        document
            .querySelector(".vl-boxes-overlay")
            .addEventListener("click", closeBox);
        document
            .querySelector(".vl-boxes-close")
            .addEventListener("click", closeBox);
        
        function closeBox() {
            document.querySelector("#vl-box-gamification").remove();
        }
    }
