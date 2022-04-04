const buttonSub = document.querySelector(".btn_chat");

buttonSub.addEventListener("click", () => {
    let data = document.querySelector(".input_chat-bot").value;

    checkInp(data);
    return true;
});

function checkInp(data) {
    if (data === "Помощь" || data === "помощь") {
        document.querySelector(".block_text-help").innerHTML =
            "Мы с вами ,надеемся у вас все будет хорошо и вы с этим справитесь ";
    } else if (data === "Номер" || data === "номер") {
        document.querySelector(".block_text-help").innerHTML = "8-923-614-60-66 ";
    } else if (data === "Инфо" || data === "инфо") {
        document.querySelector(".block_text-help").innerHTML =
            "Компания с многолетней историей,доверяй нам.Более 40 офисов в Москве и других городах ";
    } else if (data === "Адрес" || data === "адрес") {
        document.querySelector(".block_text-help").innerHTML =
            "Улица тутуева 40 дом колутево к. 3";
    } else {
        document.querySelector(".block_text-help").innerHTML =
            "Некоректная команда ,попробуйте ввести правильную команду из предложеннных вариантов";
    }
}


