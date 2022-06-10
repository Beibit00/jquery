$('document').ready(function () {
    $('input[type=submit]').on('click', function (e) {
        e.preventDefault();
        // $('input[type=text]')
        $('.story-container').show()

        
        let multiply = 1;
        $('input[name=same]').keyup(function () {
            let content = $(this).val();
            console.log(content)
   
            // console.log(multiply)
            multiply = multiply*content;
            res=(multiply*3)/1024;
   
            $('.result').html('File is'+" "+res+"KB" + " " + "is OK." +' '+ 'How you use number of colors to calculate')
    
        }).keyup()

        
    })

    
})