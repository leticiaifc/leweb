//alert('Ola Mundo')
console.log(document);

// var nav = document.querySelector('nav')
// nav.style.backgroundColor = 'red'

var formulario = document.querySelector('form')
var paragrafo = document.createElement('p')
paragrafo.style.textAlign = 'center'
paragrafo.style.fontSize = '18px'

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()

    var dados = new FormData(formulario)
    var nome= dados.get('nome')
    var email= dados.get('email')
    var turma= dados.get('turma')
    var motivo= dados.get('motivo')
    var mensagem= dados.get('mensagem')

    var templateParams = {
        nome: nome,
        turma: turma,
        mensagem: mensagem,
        email: email,
        motivo: motivo,
    };
     
    emailjs.send('service_nfugrz7', 'template_1cgcdbr', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });

    console.log(nome, email, turma, motivo, mensagem);

    paragrafo.innerHTML = `
        ${nome}, sua mensagem foi enviada com sucesso!
    `
    formulario.append(paragrafo)


});





