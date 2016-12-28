var containerSkills= document.querySelector('#skills .container');
var rotationStarted = false;
var timer;

function debounce(func) {
    var timeout;
    var wait = 10;
   var immediate = true;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function checkSlide() {
    console.log('hi');
    var windowBottomBorder= (window.scrollY + window.innerHeight);
    var containerSkillsTopBorder = containerSkills.offsetTop;
    var containerSkillsBottomBorder = containerSkills.offsetTop + containerSkills.clientHeight;
    var containerSkillsIsShown = windowBottomBorder > containerSkillsTopBorder;
    var containerSkillsScrolledPast = window.scrollY  > containerSkillsBottomBorder;

        if (containerSkillsIsShown&&!containerSkillsScrolledPast) {
            if (rotationStarted === false) {
                rotationStarted = true;
                timer = setTimeout(rotateSkills,500);
            }
        } else {
            if (rotationStarted === true) {
                rotationStarted = false;
                clearTimeout(timer);
            }
        }
};

window.addEventListener('scroll', debounce(checkSlide));

var iconSkillArray= [document.querySelector('.icon-skill:nth-child(2)'),
                     document.querySelector('.icon-skill:nth-child(3)'),
                     document.querySelector('.icon-skill:nth-child(4)'),
                     document.querySelector('.icon-skill:nth-child(5)'),
                     document.querySelector('.icon-skill:nth-child(6)'),
                     document.querySelector('.icon-skill:nth-child(7)')];

var iconPositionsArray = ['icon-top',
                          'icon-right-top',
                          'icon-right-bottom',
                          'icon-bottom',
                          'icon-left-bottom',
                          'icon-left-top'];

function rotateSkills() {

        var iconSkillArrayChanged=[];
        console.log(iconSkillArray);
        iconSkillArray.forEach(function(iconSkill, iconSkillIndex, skillArray) {

            iconSkill.classList.remove(iconPositionsArray[iconSkillIndex]);

            if (iconSkillIndex == iconSkillArray.length-1) {
                iconSkill.classList.add(iconPositionsArray[0]);
                iconSkillArrayChanged[0]= iconSkill;
            } else {
                iconSkill.classList.add(iconPositionsArray[iconSkillIndex +1]);
                iconSkillArrayChanged[iconSkillIndex+1]= iconSkill;
            }
        });

        iconSkillArray =  iconSkillArrayChanged;
        timer = setTimeout(rotateSkills,2000);
}





