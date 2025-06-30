function desenharAvatar() {
    //console.log("desenharAvatar foi chamada");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (avatar.base !== null) ctx.drawImage(imagensCarregadas.base[avatar.base], 0, 0);
    if (avatar.roupa !== null) ctx.drawImage(imagensCarregadas.roupa[avatar.roupa], 0, 0);
    if (avatar.cabelo !== null) ctx.drawImage(imagensCarregadas.cabelo[avatar.cabelo], 0, 0);
    if (avatar.olhos !== null) ctx.drawImage(imagensCarregadas.olhos[avatar.olhos], 0, 0);
    if (avatar.nariz !== null) ctx.drawImage(imagensCarregadas.nariz[avatar.nariz], 0, 0);
    if (avatar.boca !== null) ctx.drawImage(imagensCarregadas.boca[avatar.boca], 0, 0);
}

function salvarAvatar() {
    const link = document.createElement('a');
    link.download = 'meu-avatar.png';
    link.href = canvas.toDataURL();
    link.click();
}

function salvarAvatarComo() {
    const nomeArquivo = prompt('Digite o nome do arquivo (sem extensão):', 'meu-avatar');
    if (nomeArquivo) {
        const link = document.createElement('a');
        link.download = `${nomeArquivo}.png`;
        link.href = canvas.toDataURL();
        link.click();
    }
}
