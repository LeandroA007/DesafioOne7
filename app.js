

document.getElementById('encryptButton').addEventListener('click', function() {
    var text = document.getElementById('inputText').value;
    var encrypted = CryptoJS.AES.encrypt(text, 'secret key 123').toString();
    document.getElementById('outputText').value = encrypted;
});

document.getElementById('decryptButton').addEventListener('click', function() {
    var encryptedText = document.getElementById('outputText').value;
    var bytes = CryptoJS.AES.decrypt(encryptedText, 'secret key 123');
    var decrypted = bytes.toString(CryptoJS.enc.Utf8);
    document.getElementById('outputText').value = decrypted;
});

function encryptButton() {
    // Obter os elementos
    const image = document.getElementById('image');
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    
    // Função simples de criptografia: codificação Base64
    function encrypt(text) {
        return btoa(text);
    }
    
    // Criptografar o texto
    const encryptedText = encrypt(inputText);
    
    // Atualizar o conteúdo do parágrafo com o texto criptografado
    outputText.textContent = encryptedText;
    
    // Ocultar a imagem e exibir o texto criptografado
    image.style.display = 'none';
    outputText.classList.remove('output');
}