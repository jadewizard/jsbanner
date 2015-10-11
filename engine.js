function init()
{
    canvas = document.getElementById('field');
    canvas.width = 240;
    canvas.height = 400;

    context = canvas.getContext("2d");

    bg = new background();
    firstText = new firstText();
    secondText = new secondText();

    //alert(firstText.y);

    game = new game();
    game.newGame();

    setInterval(drawUpdateObject, 12);
    //Задаём интервал обновления
}

//Задний фон
function background()
{
    this.draw = function()
    {
        backgroundImage = new Image();
        backgroundImage.src = "bg.png";
        
        backgroundImage.onload = function()
        {
            context.drawImage(backgroundImage, 0, 0);
            game.drawField();
        }
    }
}

//Текст #1
function firstText()
{
    this.x = -240;
    this.y = 28;

    this.draw = function()
    {
        firstTextImage = new Image();
        firstTextImage.src = "text1.png";

        //context.drawImage(firstTextImage, this.x, this.y);
        firstTextImage.onload = function()
        {
            context.globalAlpha = 1;
            context.drawImage(firstTextImage, firstText.x, firstText.y);
        }
    }
}

//Текст 2
function secondText()
{
    this.x = 240;
    this.y = 370;

    this.draw = function()
    {
        secondTextImage = new Image();
        secondTextImage.src = "text2.png";

        secondTextImage.onload = function()
        {
            context.globalAlpha = 1;
            context.drawImage(secondTextImage, secondText.x, secondText.y);
        }
    }
}

//Перерисовка объектов.0
function drawUpdateObject()
{
    bg.draw(); //Фон
    firstText.draw(); //Текст #1
    secondText.draw(); //Текст #2
    userAction();
    game.drawCross();
    game.drawZero();

    update(); //Обновляем.
}

function update()
{
    if(firstText.x < 20)
    {
        firstText.x += 5;
        //Делаем смщение текса 1, пока его координата X
        //Не будет = 20
    }

    if(secondText.x > 20)
    {
        secondText.x -= 5;
        //Тут делаем смещение текста 2 пока X(2) не равен 20.
    }
}

function drawShapes()
{
        secondTextImage = new Image();
        secondTextImage.src = "text2.png";
}

function game()
{
    this.width = 58;
    this.height = 54;
    this.padding = 8;
    this.currentStep = 0;
    //0 - юзер, 1 - ПК.

    this.newGame = function()
    {
        gridArray = new Array(3);

        for(i = 0; i < 3; i++)
        {
            gridArray[i] = new Array(3);

            for(j = 0; j < 3; j++)
            {
                gridArray[i][j] = undefined;
            }
        }

        this.arrayElement = gridArray;
    }

    this.drawField = function()
    {
        for(i = 0; i < 3; i++)
        {
            for(j = 0; j < 3; j++)
            {
                if(this.arrayElement[i][j] == undefined)
                {
                    context.globalAlpha = 0;
                    context.fillStyel = "#000";
                    context.fillRect((i*(this.width + this.padding)) + 25, (j*(this.height + this.padding)) + 125, 58,56);
                }
            }
        }
    }

    this.drawCross = function()
    {
        crossImg = new Image()
        crossImg.src = "x.png";

        initValue = new Array();
        initValue['1'] = 40;
        initValue['2'] = 130;
        //Начальные значения

        crossImg.onload = function()
        {
            //1 строка

            if(game.arrayElement[0][1] == 1)
            {
                context.drawImage(crossImg, initValue['1'], initValue['2']);
            }

            if(game.arrayElement[1][1] == 1)
            {
                context.drawImage(crossImg, initValue['1'] + 62, initValue['2']);
            }

            if(game.arrayElement[2][1] == 1)
            {
                context.drawImage(crossImg, initValue['1'] + 62 + 62, initValue['2']);
            }

            //2 строка

            if(game.arrayElement[0][2] == 1)
            {
                context.drawImage(crossImg, initValue['1'], initValue['2'] + 65);
            }

            if(game.arrayElement[1][2] == 1)
            {
                context.drawImage(crossImg, initValue['1'] + 62, initValue['2'] + 65);
            }

            if(game.arrayElement[2][2] == 1)
            {
                context.drawImage(crossImg, initValue['1'] + 62 + 62, initValue['2'] + 65);
            }

            //3 строка

            if(game.arrayElement[0][3] == 1)
            {
                context.drawImage(crossImg, initValue['1'], initValue['2'] + 65 + 65);
            }

            if(game.arrayElement[1][3] == 1)
            {
                context.drawImage(crossImg, initValue['1'] + 62, initValue['2'] + 65 + 65);
            }

            if(game.arrayElement[2][3] == 1)
            {
                context.drawImage(crossImg, initValue['1'] + 62 + 62, initValue['2'] + 65 + 65);
            }
        }
    }

    this.drawZero = function()
    {
        zeroImg = new Image()
        zeroImg.src = "0.png";

        initValue = new Array();
        initValue['1'] = 40;
        initValue['2'] = 130;
        //Начальные значения

        zeroImg.onload = function()
        {
            //1 строка

            if(game.arrayElement[0][1] == 0)
            {
                context.drawImage(zeroImg, initValue['1'], initValue['2']);
            }

            if(game.arrayElement[1][1] == 0)
            {
                context.drawImage(zeroImg, initValue['1'] + 62, initValue['2']);
            }

            if(game.arrayElement[2][1] == 0)
            {
                context.drawImage(zeroImg, initValue['1'] + 62 + 62, initValue['2']);
            }

            //2 строка

            if(game.arrayElement[0][2] == 0)
            {
                context.drawImage(zeroImg, initValue['1'], initValue['2'] + 65);
            }

            if(game.arrayElement[1][2] == 0)
            {
                context.drawImage(zeroImg, initValue['1'] + 62, initValue['2'] + 65);
            }

            if(game.arrayElement[2][2] == 0)
            {
                context.drawImage(zeroImg, initValue['1'] + 62 + 62, initValue['2'] + 65);
            }

            //3 строка

            if(game.arrayElement[0][3] == 0)
            {
                context.drawImage(zeroImg, initValue['1'], initValue['2'] + 65 + 65);
            }

            if(game.arrayElement[1][3] == 0)
            {
                context.drawImage(zeroImg, initValue['1'] + 62, initValue['2'] + 65 + 65);
            }

            if(game.arrayElement[2][3] == 0)
            {
                context.drawImage(zeroImg, initValue['1'] + 62 + 62, initValue['2'] + 65 + 65);
            }
        }
    }

    this.pcStep = function()
    {
        //Если текущий шаг = 1, то
        //Это значит, что ходит компьютер.
        //Определяем его ход и делаем его.
        if(game.currentStep == 1)
        {
            while(game.arrayElement[row][col] == 1 ||
                  game.arrayElement[row][col] == 0)
            {
                row = rand(0,2);
                //Рандомомо определяем строку.
                col = rand(0,3);
                //Рандомно определяем

                if(game.arrayElement[row][col] == undefined)
                {
                    game.arrayElement[row][col] = 0;
                    game.drawZero();
                    game.currentStep = 0;

                    break;
                }
            }
        }
    }
}

function userAction()
{
    canvas.onclick = function(event)
    {
        if(game.currentStep == 0)
        {
            if(event.pageY >= 120 && event.pageY <= 335)
            {
                row = Math.floor(event.clientX / (game.height + game.padding + 25));
                col = Math.floor(event.clientY / (game.width + game.padding + 25));

                game.arrayElement[row][col] = 1;
                game.currentStep = 1;
                //alert(print_r(game.arrayElement));
            }

            game.pcStep();
        }
    }
}

//Функция для генерации рандомных чисел
function rand(min, max)
{
  min = parseInt(min);
  max = parseInt(max);
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}