function encodeAndDecodeMessages () {
    const senderTextArea = document.querySelector(
        '#main textarea[placeholder="Write your message here..."]'
    );

    const receiverTextArea = document.querySelector(
        '#main textarea[disabled][placeholder="No messages..."]'
    );
    
    const encodeBtn = senderTextArea
        .parentElement
        .querySelector('button');
    
    const decodeBtn = receiverTextArea
        .parentElement
        .querySelector('button');
    
    encodeBtn.addEventListener('click', encode)
    decodeBtn.addEventListener('click', decode)

    function encode () {
        let encodedText = '';

        for (let char of senderTextArea.value) {
            encodedText += String.fromCharCode(char.charCodeAt(0) + 1);
        }

        receiverTextArea.value = encodedText;
        senderTextArea.value = '';
    }

    function decode () {
        let decodedText = '';

        for (let char of receiverTextArea.value) {
            decodedText += String.fromCharCode(char.charCodeAt(0) - 1);
        }

        receiverTextArea.value = decodedText;
    }
}