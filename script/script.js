const listenToToggle = function(){
    const toggle = document.querySelector('.js-toggle');

    toggle.addEventListener('click', function(){
        console.log('added');
        
        // document.querySelector('.icon--add').classList.toggle('u-hidden');
        // document.querySelector('.icon--check').classList.toggle('u-hidden');

        // add the class'u-opacity-0' to the element with class 'icon-check' and add the class 'u-opacity-1' to the element with class 'icon-add'
        if (document.querySelector('.icon--check').classList.contains('u-opacity-0')) {
            document.querySelector('.icon--check').classList.remove('u-opacity-0');
            document.querySelector('.icon--check').classList.add('u-opacity-1');
            document.querySelector('.icon--add').classList.remove('u-opacity-1');
            document.querySelector('.icon--add').classList.add('u-opacity-0');

            document.querySelector('.icon--check').classList.remove('u-rotate-180');
        } else {
            document.querySelector('.icon--check').classList.remove('u-opacity-1');
            document.querySelector('.icon--check').classList.add('u-opacity-0');
            document.querySelector('.icon--add').classList.remove('u-opacity-0');
            document.querySelector('.icon--add').classList.add('u-opacity-1');

            // add a transition so that the icon turn around
            document.querySelector('.icon--check').classList.add('u-rotate-180');
        }

    });
}

const init = function(){
    console.log('init');
    // document.querySelector('.icon--add').classList.add('u-hidden');
    document.querySelector('.icon--check').classList.add('u-opacity-0');
    listenToToggle();
}

document.addEventListener('DOMContentLoaded',init);