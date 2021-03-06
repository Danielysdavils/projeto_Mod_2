class Usuario{
    constructor(){
        this.nome = '';
        this.email = '';
        this.senha = '';
        this.confiSenha = '',
        this.rg = '';
    }

    /* --------------- SETTERS --------------- */

    setNome(nome){
        this.nome = nome;
    }

    setEmail(email){
        this.email = email;
    }

    setSenha(senha){
         this.senha = senha;
    }

    setConfiSenha(confiSenha){
        this.confiSenha = confiSenha
    }

    setRg(rg){
        this.rg = rg;
    }

    /* -------------------- METODOS --------------------- */



    /* -------------- VALIDA NOME ------------ */

    validaTipoNome(nome){
        if(this.validaNome(nome) === true){
            this.setNome(nome)
        }else{
            throw new Error('❌ Nome com caracteres invalidos!')
        }
    }

    validaNome(nome){
        console.clear()
        const letra1 = nome.split('')

        for(let i = 0; i < letra1.length; i++){
            const l = letra1[i]
            const resposta = ('a' <= l && l <= 'z') || ('A' <= l && l <= 'Z')? true:false 
            return resposta    
        }
    }

    /* --------------------- VALIDA EMAIL ------------------- */

    validaEmail(email){
        const emaill = email
        if((emaill.indexOf('@') > 3) && (emaill.indexOf('.') > 7) && (emaill != '')){
            this.setEmail(email)
        }else{
            throw new Error('❌ Digite um email valido!')
        }
    }


    /* ------------------- VALIDA SENHA --------------------- */


    validaSenha(senha){
        if(this.validaTipoSenha(senha) === true){
            this.setSenha(senha)
        }else{
            throw new Error('❌ Digite uma senha contendo letras maiusculas e letras minusculas')
        }
    }

    validaTipoSenha(senha){
        if(senha.length > 5){

            const arrayLetras = senha.split('')

            for(let i = 0 ; i < arrayLetras.length; i++){
                const letra = arrayLetras[i].charCodeAt(arrayLetras[i])

                if(letra >= 65 && letra <= 90){
                    this.mayuscula = newFunction()
                        function newFunction() {
                            return true;
                        }
                        
                }else if(letra >= 97 && letra <= 122){
                    this.minuscula = newFunction()
                        function newFunction() {
                            return true;
                        }
                }
                
            }

            if(this.mayuscula === true && this.minuscula === true) return true
        }
    }

    /* -------------- VALIDA CONFIRMAÇÃO SENHA -------------- */


    validaConfiSenha(senha, confiSenha){

        if(senha === confiSenha){
            this.setConfiSenha(confiSenha)
        }else{
            throw new Error('❌ Suas senhas não estão iguais')
        }
    }


    /* ------------------- VALIDA RG ------------------------ */

    validaRg(rg){
        if(rg != ''){
            this.setRg(rg)
        }else{
            throw new Error('❌ Preencha o campo com seu RG')
        }
    }
    
}

/* ------------------------- VALIDA CEP ------------------------ */

class Endereco{
    constructor(){
        this.cep = '',
        this.estado = '',
        this.cidade = '',
        this.bairro = '',
        this.rua = '',
        this.complemento = '';
    }

    setCep(cep){
        this.cep = cep
    }

    setEstado(estado){
        this.estado = estado
    }

    setCidade(cidade){
        this.cidade = cidade
    }

    setBairro(bairro){
        this.bairro = bairro
    }

    setRua(rua){
        this.rua = rua
    }

    setComplemento(complemento){
        this.complemento = complemento
    }

    limpiaForm(){
        $('#inputEstado').val('');
        $('#inputCity').val('');
        $('#inputAddress').val('');
        $('#inputRua').val('');
    }

    pesquisaCep(cep){

        if(cep != '' && cep.length < 9){

           const req =  $.ajax({
                url: `https://viacep.com.br/ws/${cep}/json/?callback=?`,
                dataType:'json',
            })

            req.done((json) => {

                if('erro' in json){
                    this.limpiaForm()
                    $('#resCep').html('❌ CEP não encontrado!').css('color', '#d25151')
                }else{
                    $('#inputEstado').val(json.uf);
                    $('#inputCity').val(json.localidade);
                    $('#inputAddress').val(json.bairro);
                    $('#inputRua').val(json.logradouro);
                }               
            })       
        }else{
            this.limpiaForm()
            throw new Error('❌ formato de CEP inválido.');
        }
    }
}