(function() {
    // 获取时间函数
    function getData() {
        var data = new Date();
        var year = data.getFullYear();
        // 获取年
        var mouth = data.getMonth() + 1;
        // 获取月
        var day = data.getDate();
        // 获取日
        var hour = data.getHours();
        // 获取小时
        var mount = data.getMinutes();
        // 获取分钟
        var sences = data.getSeconds();
        // 获取秒数
        if (hour < 10) {
            hour = '0' + hour;
        }
        if (mouth < 10) {
            mouth = '0' + mouth;
        }
        if (mount < 10) {
            mount = '0' + mount;
        }
        if (sences < 10) {
            sences = '0' + sences;
        }
        var timer = `${year}-${mouth}-${day}  ${hour}:${mount}:${sences}`;
        return {
            year,
            mouth,
            day,
            hour,
            mount,
            sences,

        };
    }

    // 添加时间
    let box = document.querySelector('#box');
    var spans = document.querySelectorAll('span');
    var result = getData();
    var arr = Object.values(result);
    for (var j = 0; j < spans.length; j++) {
        spans[j].append(arr[j])
    }
    setInterval(() => {
        var result = getData();
        var arr = Object.values(result);
        for (let i = 0; i < spans.length; i++) {
            spans[i].innerHTML = "";
            spans[i].append(arr[i])

        }
    }, 1000);

    box.onmousedown = function(e) {
        var oldX = e.clientX;
        var oldY = e.clientY;
        document.onmousemove = function(event) {
            var X = event.clientX - 35;
            var Y = event.clientY - 35;
            box.style.position = 'absolute';
            box.style.top = `${Y}px`;
            box.style.left = `${X}px`;

        }
        box.onmouseup = document.onmouseup = function() {
            document.onmousemove = null;
        }
    }



    // 设置字号
    var btn = document.querySelector('button');
    var input = document.querySelector('input');
    var inputyear = document.querySelector('#yeari')
    var inputmouth = document.querySelector('#mothi')
    var inputday = document.querySelector('#dayi')
    var inputhour = document.querySelector('#houri')
    var inputminute = document.querySelector('#mini')
    var inputscound = document.querySelector('#seci')
    var use = document.querySelector('#uas');
    var weights = document.querySelector('#weight');
    btn.onclick = function() {
            var num = parseInt(input.value);
            fontSz(num);
            // console.log(fontSz(num));
            box.style.fontSize = `${fontSz(num)}px`;
            var num1 = parseInt(inputyear.value);
            var num2 = parseInt(inputmouth.value);
            var num3 = parseInt(inputday.value);
            var num4 = parseInt(inputhour.value);
            var num5 = parseInt(inputminute.value);
            var num6 = parseInt(inputscound.value);
            var used = use.value;
            var weightss = parseInt(weights.value);
            spans[0].style.fontSize = `${fontSz(num1)}px`;
            spans[1].style.fontSize = `${fontSz(num2)}px`;
            spans[2].style.fontSize = `${fontSz(num3)}px`;
            spans[3].style.fontSize = `${fontSz(num4)}px`;
            spans[4].style.fontSize = `${fontSz(num5)}px`;
            spans[5].style.fontSize = `${fontSz(num6)}px`;
            box.style.fontFamily = `${used}`;
            box.style.fontWeight = `${weightss}`;

            // 总体



            // 




            // 




            // 




            // 




            // 




            // 
            // if (!isNaN(num)) {
            //     if (num <= 12) {
            //         num = 12;
            //         input.value = 12
            //     } else if (num >= 500) {
            //         num = 500;
            //         input.value = 500
            //     }
            // } else {
            //     num = 16;
            //     input.value = 16
            // }


        }
        // 判断字体大小
    function fontSz(num) {
        if (!isNaN(num)) {
            if (num <= 12) {
                num = 12;
                input.value = 12
            } else if (num >= 500) {
                num = 500;
                input.value = 500
            }
        } else {
            num = 16;
            input.value = 16
        }
        return num;
    }

    var color = document.querySelector('#color');
    color.onchange = function() {
        box.style.color = color.value;
    }

    // 判断背景图片
    var file = document.querySelector('#file');
    file.onchange = function() {
        // console.log(this.files);
        readAsDataURL();
    }

    function readAsDataURL() {
        //检验是否为图像文件 
        var file = document.getElementById("file").files[0];
        // var box = document.getElementById('box1');
        if (!/image\/\w+/.test(file.type)) {
            // alert("看清楚，这个需要图片！");
            return false;
        }
        var reader = new FileReader();
        //将文件以Data URL形式读入页面 
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            // var result = document.getElementById("result");
            //显示文件 
            document.body.style.backgroundImage = `url(${this.result})`;
        }
    }


})()