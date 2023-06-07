$(document).ready(function () {
    $('.btn-more').click(function () {
        var sectionId = $(this).data('section');
        $('#' + sectionId).toggleClass('hidden-section visible-section');

        $(this).toggleClass('collapsed expanded');

        if ($(this).hasClass('collapsed')) {
            $(this).html('<i class="fa-solid fa-plus"></i> More');
        } else {
            $(this).html('<i class="fa-solid fa-minus"></i> Hide');
        }
    });
});
