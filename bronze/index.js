$('document').ready(function () {
    ($('input[type=submit]')).on('click', function (e) {
        e.preventDefault();
        // $('input[type=text]')
        $('.story-container').show()

        $('input[name=firstname]').keyup(function () {
            let inputtext = $(this).val();
            $('.iii').html(inputtext)
            // console.log(inputtext)
            // console.log(typeof inputtext)

        }).keyup()
        $('input[name=adjective]').keyup(function () {
            let adj = $(this).val();
            $('.iii').html(adj)
            

        }).keyup()
        $('input[name=character]').keyup(function () {
            let charectertext = $(this).val();
            $('.character').html(charectertext)
            

        }).keyup()
        $('input[name=adverb]').keyup(function () {
            let adverb = $(this).val();
            $('.adverb').html(adverb)
            
            // console.log(typeof inputtext)

        }).keyup()
    })

})