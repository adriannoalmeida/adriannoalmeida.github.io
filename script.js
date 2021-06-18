function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'babymale.png')
            }else if (idade < 20){
                img.setAttribute('src', 'youngmale.png')
            }else if (idade < 50){
                img.setAttribute('src', 'adultmale.png')
            }else {
                img.setAttribute('src', 'eldermale.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'babyfemale.png')
            }else if (idade < 20){
                img.setAttribute('src', 'youngfemale.png')
            }else if (idade < 50){
                img.setAttribute('src', 'adultfemale.png')
            }else {
                img.setAttribute('src', 'elderfemale.png')
            }
        }    
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
