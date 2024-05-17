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
                <button class="share-btn">Compartilhar</button>
                <button class="delete-btn">Excluir</button>
            </div>
        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');

        $(novoItem).fadeIn();

        $('#new-address-image').val('');
    })

    $(document).on('click', '.delete-btn', function() {
        $(this).closest('li').fadeOut(function() {
            $(this).remove();
        });
    });

    // Evento de clique no botão de compartilhar
    $(document).on('click', '.share-btn', function() {
        const imagemUrl = $(this).siblings('a').attr('href');
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(imagemUrl)}`;
        window.open(whatsappUrl, '_blank');
    });
});