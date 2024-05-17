$(document).ready(function(){

    $('header button').click(function(){
        $('.container-form').slideDown();
    })

    $('#btn-cancelar').click(function(){
        $('.container-form').slideUp();
    })



    $('form').on('submit', function(event){
        event.preventDefault();

        const enderecoImagem = $('#new-address-image').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-li">
                <a href="${enderecoImagem}" title="Visualizar" target="_blank">Visualizar</a>
            </div>
        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');

        $(novoItem).fadeIn();

        $('#new-address-image').val('');
    })
})