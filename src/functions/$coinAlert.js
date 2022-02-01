export default function $coinAlert({title, content}) {

    window.$.alert({
        title: `How to buy DYP on ${title}`,
        titleClass: 'cointitle',
        content,
        type: 'red',
        columnClass: 'col-md-12',
        scrollToPreviousElement: true,
        scrollToPreviousElementAnimate: true,
        animateFromElement: false,
        backgroundDismiss: true,
        buttons: {
            close: {
                text:'Close'
            }
        },
        onOpen: function () {
            // after the modal is displayed.
            document.getElementsByTagName("BODY")[0].style.overflow = 'hidden'
        },
        onClose: function () {
            // before the modal is hidden.
            document.getElementsByTagName("BODY")[0].style.overflow = 'unset'
        },
        
    })
}