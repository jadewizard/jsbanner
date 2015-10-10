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
            context.drawImage(secondTextImage, secondText.x, secondText.y);
        }
    }
}

//Перерисовка объектов.
function drawUpdateObject()
{
    bg.draw(); //Фон
    firstText.draw(); //Текст #1
    secondText.draw(); //Текст #2
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