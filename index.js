let original_text = "";

function transformText() {
    const input_text = document.getElementById("input_text").value;
    const output_textElement = document.getElementById("output_text");

    let transformed_text = "";

    for (let i = 0; i < input_text.length; i++) {
        const char = input_text.charAt(i);
        const random_case = Math.random() < 0.5 ? "toLowerCase" : "toUpperCase";
        transformed_text += char[random_case]();
    }

    original_text = input_text;

    output_textElement.value = transformed_text;
}

function vymazat() {
    if (event.key === "Backspace" || event.key === "Delete") {
        setTimeout(() => {
            const transformed_text = document.getElementById("input_text").value;
            original_text = transformed_text;
            transformText();
        }, 0);
    }
}

function copyText() {
    const output_textElement = document.getElementById("output_text");
    output_textElement.select();
    document.execCommand("copy");
    output_textElement.style.background = "url(pozadi2.png)";

    const info_textElement = document.getElementById("info_text");
    info_textElement.style.opacity = "100";
    info_textElement.style.visibility = "visible";

    setTimeout(() => {
        info_textElement.style.opacity = "0";
        info_textElement.style.visibility = "hidden";
        output_textElement.style.background = "transparent";
    }, 3000);
}