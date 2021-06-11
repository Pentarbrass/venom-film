var video = {

    init: function () {
        video.play();
    },

    play: function () {
        jQuery('body').on('click', '#play-video-btn', function (e) {
            video.setSrc(this);
        });
    },

    setSrc: function (el) {
        if (el) {
            var video_id = jQuery(el).data('id');
            var url = 'https://www.youtube.com/embed/Othd8W8o3t0?rel=0&showinfo=0';
            jQuery('#play-video-btn').hide();
            jQuery('iframe#embed-video-frame').attr('src', url).fadeIn();
        }
    }
};

jQuery(document).ready(function() {
    video.init();
});

const menuButton = document.querySelector('.menu-btn'),
    menu = document.querySelector('.menu'),
    closeMenuButton = document.querySelector('.close-btn');
const toggleMenu = () => {
    menu.classList.toggle('is-active');
    closeMenuButton.classList.toggle('is-active');
};

menuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);