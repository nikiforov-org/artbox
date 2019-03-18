/**
*  Artbox 1.0.0, 03.2019
*  Maximizing images in the new layer
*
*  @author e@nikiforov.org <Evgeny Nikiforov>
*
*  Usage:
*  <img
*      src="thumbnail.path"
*      data-artbox="image.path"              # required
*      data-artbox-caption="image caption"   # optional
*      alt="..." />
*/
(function(){
    
    var artboxes = document.querySelectorAll('[data-artbox]');

    if (artboxes.length === 0) {
        return false;
    }

    for (var i = 0; i < artboxes.length; i++) {
        
        var
            artbox = artboxes[i];

        artbox.addEventListener('click', function() {

            var
                lb          = this,
                src         = lb.getAttribute('data-artbox'),
                caption     = lb.getAttribute('data-artbox-caption');

            // templates
            var
                template_artbox,
                template_caption = '';

            if (caption !== null && caption !== '') {
                template_caption = '<div class="caption">' + caption + '</div>';
            }

            template_lightbox = '<div id="artbox">'                     +
                                '   <span class="close">Close</span>'   +
                                '   <img src="' + src + '" />'          +
                                    template_caption                    +
                                '</div>';

            document.body.insertAdjacentHTML('beforeend', template_artbox);

            var
                artbox_body   = document.getElementById('artbox'),
                artbox_close  = artbox_body.querySelector('.close');

            artbox_body.addEventListener('click', function() {
                this.remove();
            });

            artbox_close.addEventListener('click', function() {
                artbox_body.remove();
            });

        });
    }

})();
