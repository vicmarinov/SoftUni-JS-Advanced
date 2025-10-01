function lockedProfile () {
    const profilesArr = Array.from(
        document
            .getElementById('main')
            .getElementsByClassName('profile')
    );

    profilesArr.forEach(profile => 
        profile.getElementsByTagName('button')[0]
            .addEventListener('click', onClick)
    );

    function onClick (event) {
        const btnClicked = event.currentTarget
        const profile = btnClicked.parentElement;

        const radioBtnChecked = Array.from(
            profile.querySelectorAll('input[type="radio"]')
        ).find(btn => btn.checked);
        
        if (radioBtnChecked.value === 'lock') {
            console.log('This profile is locked!');
            return 'This profile is locked!';
        }

        const hiddenSection = profile.getElementsByTagName('div')[0];
        const isHidden = hiddenSection.style.display = 'block';
        
        if (isHidden) {
            hiddenSection.style.display = 'block';
            btnClicked.textContent = 'Hide it';
        } else {
            hiddenSection.style.display = 'none';
            btnClicked.textContent = 'Show more';
        }
    }
}