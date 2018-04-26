$(document).on('click', '.panel-heading span.clickable', function(e){
    var $this = $(this);
    if(!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
    }
})

$(document).ready(function () {
    var orange = false;
    setInterval(function () {
        orange = !orange;
        $('h1').css('border-color', orange ? 'transparent' : '#fa4500');
    }, 500);
    $('#textarea').bind('updateInfo keyup mousedown mousemove mouseup', function (event) {
        if (document.activeElement !== $(this)[0]) {
            return;
        }
        var range = $(this).textrange();
        $('#info .property').each(function () {
            if (typeof range[$(this).attr('id')] !== 'undefined') {
                if ($(this).attr('id') === 'text') {
                    range[$(this).attr('id')] = range[$(this).attr('id')].replace(/\n/g, "\\n").replace(/\r/g, "\\r");
                }
                $(this).children('.value').html(range[$(this).attr('id')]);
            }
        });
    });
    $('#selection-set').click(function () {
        $('#textarea').textrange('set', $('#char-start').val(), $('#char-end').val()).trigger('updateInfo').focus();
    });
    $('#selection-replace').click(function () {
        $('#textarea').textrange('replace', $('#replace-text').val()).trigger('updateInfo').focus();
    });
});