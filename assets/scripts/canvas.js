let strokeColors = {
    base: '#000000',
    roupa: '#000000',
    cabelo: '#000000',
    chapeu: '#000000',
    olhos: '#000000',
    nariz: '#000000',
    boca: '#000000',
    fundo: '#000000',
    detalheFundo: '#000000',
    baseOlho: '#000000',
    baseCor: '#000000',
    bochecha: '#000000',
};

function desenharAvatar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // FUNDO
    if (avatar.fundo !== null) {
        let img = imagensCarregadas.fundo[avatar.fundo];
        let temp = document.createElement('canvas');
        temp.width = img.width;
        temp.height = img.height;
        let tctx = temp.getContext('2d');
        tctx.drawImage(img, 0, 0);
        tctx.globalCompositeOperation = 'source-in';
        tctx.fillStyle = strokeColors.fundo;
        tctx.fillRect(0, 0, img.width, img.height);
        tctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(temp, 0, 0);
    }
    // DETALHE FUNDO
    if (avatar.detalheFundo !== null) {
        let img = imagensCarregadas.detalheFundo[avatar.detalheFundo];
        let temp = document.createElement('canvas');
        temp.width = img.width;
        temp.height = img.height;
        let tctx = temp.getContext('2d');
        tctx.drawImage(img, 0, 0);
        tctx.globalCompositeOperation = 'source-in';
        tctx.fillStyle = strokeColors.detalheFundo;
        tctx.fillRect(0, 0, img.width, img.height);
        tctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(temp, 0, 0);
    }
    // BASE COR (preenchimento da base)
    if (avatar.baseCor !== null) {
        let img = imagensCarregadas.baseCor[avatar.baseCor];
        let temp = document.createElement('canvas');
        temp.width = img.width;
        temp.height = img.height;
        let tctx = temp.getContext('2d');
        tctx.drawImage(img, 0, 0);
        tctx.globalCompositeOperation = 'source-in';
        tctx.fillStyle = strokeColors.baseCor;
        tctx.fillRect(0, 0, img.width, img.height);
        tctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(temp, 0, 0);
    }
    // BASE DO OLHO
    if (avatar.baseOlho !== null) {
        let img = imagensCarregadas.baseOlho[avatar.baseOlho];
        let temp = document.createElement('canvas');
        temp.width = img.width;
        temp.height = img.height;
        let tctx = temp.getContext('2d');
        tctx.drawImage(img, 0, 0);
        tctx.globalCompositeOperation = 'source-in';
        tctx.fillStyle = strokeColors.baseOlho;
        tctx.fillRect(0, 0, img.width, img.height);
        tctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(temp, 0, 0);
    }
    // OLHOS
    if (avatar.olhos !== null) {
        let img = imagensCarregadas.olhos[avatar.olhos];
        let temp = document.createElement('canvas');
        temp.width = img.width;
        temp.height = img.height;
        let tctx = temp.getContext('2d');
        tctx.drawImage(img, 0, 0);
        tctx.globalCompositeOperation = 'source-in';
        tctx.fillStyle = strokeColors.olhos;
        tctx.fillRect(0, 0, img.width, img.height);
        tctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(temp, 0, 0);
    }
    // NARIZ
    if (avatar.nariz !== null) {
        let img = imagensCarregadas.nariz[avatar.nariz];
        let temp = document.createElement('canvas');
        temp.width = img.width;
        temp.height = img.height;
        let tctx = temp.getContext('2d');
        tctx.drawImage(img, 0, 0);
        tctx.globalCompositeOperation = 'source-in';
        tctx.fillStyle = strokeColors.nariz;
        tctx.fillRect(0, 0, img.width, img.height);
        tctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(temp, 0, 0);
    }
    // BOCA
    if (avatar.boca !== null) {
        let img = imagensCarregadas.boca[avatar.boca];
        let temp = document.createElement('canvas');
        temp.width = img.width;
        temp.height = img.height;
        let tctx = temp.getContext('2d');
        tctx.drawImage(img, 0, 0);
        tctx.globalCompositeOperation = 'source-in';
        tctx.fillStyle = strokeColors.boca;
        tctx.fillRect(0, 0, img.width, img.height);
        tctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(temp, 0, 0);
    }
    // BOCHECHA
    if (avatar.bochecha !== null && imagensCarregadas.bochecha && imagensCarregadas.bochecha.length > 0) {
        let img = imagensCarregadas.bochecha[avatar.bochecha];
        let temp = document.createElement('canvas');
        temp.width = img.width;
        temp.height = img.height;
        let tctx = temp.getContext('2d');
        tctx.drawImage(img, 0, 0);
        tctx.globalCompositeOperation = 'source-in';
        tctx.fillStyle = strokeColors.bochecha;
        tctx.fillRect(0, 0, img.width, img.height);
        tctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(temp, 0, 0);
    }
    // BASE (traço por cima de tudo)
    if (avatar.base !== null) {
        let img = imagensCarregadas.base[avatar.base];
        let temp = document.createElement('canvas');
        temp.width = img.width;
        temp.height = img.height;
        let tctx = temp.getContext('2d');
        tctx.drawImage(img, 0, 0);
        tctx.globalCompositeOperation = 'source-in';
        tctx.fillStyle = strokeColors.base;
        tctx.fillRect(0, 0, img.width, img.height);
        tctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(temp, 0, 0);
    }
    // CABELO
    if (avatar.cabelo !== null) {
        let img = imagensCarregadas.cabelo[avatar.cabelo];
        let temp = document.createElement('canvas');
        temp.width = img.width;
        temp.height = img.height;
        let tctx = temp.getContext('2d');
        tctx.drawImage(img, 0, 0);
        tctx.globalCompositeOperation = 'source-in';
        tctx.fillStyle = strokeColors.cabelo;
        tctx.fillRect(0, 0, img.width, img.height);
        tctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(temp, 0, 0);
    }
        // CHAPEU
    if (avatar.chapeu !== null) {
        let img = imagensCarregadas.chapeu[avatar.chapeu];
        let temp = document.createElement('canvas');
        temp.width = img.width;
        temp.height = img.height;
        let tctx = temp.getContext('2d');
        tctx.drawImage(img, 0, 0);
        // tctx.globalCompositeOperation = 'source-in';
        // tctx.fillStyle = strokeColors.chapeu;
        // tctx.fillRect(0, 0, img.width, img.height);
        tctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(temp, 0, 0);
    }
    // ROUPA
    if (avatar.roupa !== null) {
        let img = imagensCarregadas.roupa[avatar.roupa];
        let temp = document.createElement('canvas');
        temp.width = img.width;
        temp.height = img.height;
        let tctx = temp.getContext('2d');
        tctx.drawImage(img, 0, 0);
        tctx.globalCompositeOperation = 'source-in';
        tctx.fillStyle = strokeColors.roupa;
        tctx.fillRect(0, 0, img.width, img.height);
        tctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(temp, 0, 0);
    }
}

// Color picker handler
const colorPicker = document.getElementById('strokeColor');
if (colorPicker) {
    colorPicker.addEventListener('input', function() {
        if (typeof categoriaAtiva === 'string' && strokeColors[categoriaAtiva] !== undefined) {
            strokeColors[categoriaAtiva] = this.value;
            desenharAvatar();
        }
    }); 
}

// Handlers para cada color picker
['base','nariz','olhos','boca','cabelo','chapeu','roupa','fundo','detalheFundo','baseOlho','baseCor','bochecha'].forEach(function(cat) {
    const picker = document.getElementById('strokeColor-' + cat);
    if (picker) {
        picker.addEventListener('input', function() {
            strokeColors[cat] = this.value;
            desenharAvatar();
        });
    }
});

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
