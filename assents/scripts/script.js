const canvas = document.getElementById('avatarCanvas');
const ctx =  canvas.getContext('2d');
const status = document.getElementById('status');
const imagemDB= {
    olhos:[],
    nariz:[],
    cabelo:[],
    boca:[],
    orelha:[],
    franja:[],
    roupa:[],
};
const avatar = {
    olhos:null,
    nariz:null,
   cabelo:null,
     boca:null,
   orelha:null,
   franja:null,
    roupa:null,
};
const imagens ={
    olho:['olhos1.png','olhos2.png'],
    nariz:['olhos1.png','olhos2.png'],
    boca:['olhos1.png','olhos2.png'],
    cabelo:['olhos1.png','olhos2.png'],
    franja:['olhos1.png','olhos2.png'],
    orlha:['olhos1.png','olhos2.png'],
}
