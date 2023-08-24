function hackerEffect(event) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let intertions = -5;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if (index < intertions) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (intertions >= event.target.dataset.value.length) clearInterval(interval);

        intertions += 1 / 3;
    }, 30);
}