// Dark theme changer
let dayNight = document.getElementById("day-night");
dayNight.addEventListener("click", darkTheme);

function darkTheme() {
    document.body.classList.toggle("dark-theme");
};

// Obj data - ukrainian and english content translation
// and inside function to change lang
const data = {
ukrainian: {
    language: "EN",
    contacts: "КОНТАКТИ",
    languages: "МОВИ",
    eng: "Англійська",
    ukr: "Українська",
    rus: "Російська",
    education: "ОСВІТА",
    univer: "ХНУ ім. В.Н. Каразіна, менеджмент",
    courses: "КУРСИ",
    marathon: "Марафон",
    h1: "Даша Ярковська",
    joinCourse: "ЧОМУ Я ХОЧУ ПРОЙТИ ЦЕЙ КУРС?",
    fulltime: "Навчання онлайн дає можливість одразу отримати відповідь на запитання і розібрати його",
    developFaster: "Курс допомагає швидше отримати знання, щоб стати веб-розробником",
    constantPractice: "Постійна практика зміцнює знання",
    goit: "Школа GoIT має зручну LMS та гарних менторів,тому навчання дуже цікаве",
    goitPopup: "Ви дійсно круті ❤ Я хочу навчатись у найкращих!",
    whyMe: "ЧОМУ САМЕ Я?",
    learnedBasics: "Я вже маю базові навички та зробила на їх основі декілька проектів",
    knowWhy: "Я  знаю ЧОМУ хочу бути веб-розробником",
    knowWhyPopup: "Я відчуваю себе краще ніж останні деклька років, бо мені дуже цікаво! І я впевнена, що зможу втілити дійсно круті проекти застосунків, які зроблять життя людей щасливішим.",
    windows: "Я вже встановила Windows, драйвери та усі необхідні програми",
    windowsPopup: "Лише кажу, що я дійсно готова пірнути у процес навчання з гловою!",
    developUkraine: "Я хочу працювати та розвивати ІТ саме в Україні",
    skills: "НАВИЧКИ",
    htmlBasics: "Використання базових тегів та атрибутів",
    htmlSemantic: "Семантичний HTML",
    cssResponsive: "Адаптивний дизайн",
    cssPositioning: "Позиціонування, Grid, Flexbox",
    cssPseudo: "Псевдокласи",
    jsTypes: "Синтаксис і типи даних",
    jsConstructions: "Базові конструкції та операції",
    gitWork: "Робота з GitHub та командним рядком",
    figmaWork: "Вмію працювати з усіма необхідними інструментами",
    touchTyping: "Сліпий друк",
    touchTypingSpeed: "~ 40wpm швидкість",
    experience: "ДОСВІД",
    learned: "ЗА ЧАС РОБОТИ Я НАВЧИЛАСЬ:",
    studyFastB: "Швидко вчитись та отримувати результати",
    studyFast: " (Підписала великий контракт на послуги компанії в перший місяць роботи)",
    workInTeamB: "Працювати в команді і вигравати разом",
    workInTeam: " (команда з 15 людей)",
    createB: "Створювати нові можливості",
    create: " (Почала створювати і продавати іграшки дітям, котрі хотіли щось, чого в інших нема! Це підвищило прибуток та мінімізувало простої у ранковий час. Працювала інструктором з малювання 3D-ручками)",
    },
english: {
    language:  "UA",
    contacts: "CONTACTS",
    languages: "LANGUAGES",
    eng: "English",
    ukr: "Ukrainian",
    rus: "Russian",
    education: "EDUCATION",
    univer: "V.N. Karazin National University, Management",
    courses: "COURSES",
    marathon: "Marathon",
    h1: "Dasha Yarkovska",
    joinCourse: "WHY I WANT TO JOIN THIS COURSE?",
    fulltime: "Full-time study gives an opportunity to get a live answer to my questions",
    developFaster: "It helps to get knowledge and become a developer faster",
    constantPractice: "Constant practive makes knowledge become solid",
    goit: "GoIT school has a handy LMS and good mentors to make learning great",
    goitPopup: "You are really the best ❤ I want to  from the best!",
    goitB: "learn",
    whyMe: "WHY ME?",
    learnedBasics: "I've already learned basics and make a few projects",
    knowWhy: "I know WHY to become a Developer",
    knowWhyPopup: "I feel better than ever in the last couple of years because I do things that I'm interested in! And I do believe that I will make some really convinient sites&apps that will make our lives happier in future.",
    windows: "I installed Windows, drivers and all needed stuff by myself",
    windowsPopup: "Just saying that I'm ready to get started and be fully in process of learning!",
    developUkraine: "I want to work for and develop the Ukrainian market in particular",
    skills: "SKILLS",
    htmlBasics: "Use basic tags and attributes",
    htmlSemantic: "Semantic HTML",
    cssResponsive: "Responsive design",
    cssPositioning: "Positioning and layouts",
    cssPseudo: "Pseudo-classes",
    jsTypes: "Syntax and data types",
    jsConstructions: "Basic constructions and operations",
    gitWork: "Work with GitHub and command line",
    figmaWork: "Fluent work with all needed tools",
    touchTyping: "Touch-typing",
    touchTypingSpeed: "~ 40wpm speed",
    experience: "EXPERIENCE",
    learned: "WHILE WORKING I LEARNED TO:",
    studyFastB: "Study fast and get results",
    studyFast: " (signed a big contract to the company's service in first month)",
    workInTeamB: "Work in team and win together as a complex unit",
    workInTeam: " (team of 15 people)",
    createB: "Create new opportunities",
    create: " (started to make and sell toys to the kids who want a special one. It increased the profit and minimize dead times during the mornings. Worked as a 3D-Pen  art teacher)",
},
changeLang(){
    let langContent = document.getElementById("lang").className;

    lang.classList.toggle("ukrainian");
    lang.classList.toggle("english");

    lang.textContent=(data[langContent].language);
    contacts.textContent=(data[langContent].contacts);
    languages.textContent=(data[langContent].languages);
    eng.textContent=(data[langContent].eng);
    ukr.textContent=(data[langContent].ukr);
    rus.textContent=(data[langContent].rus);
    education.textContent=(data[langContent].education);
    univer.textContent=(data[langContent].univer);
    courses.textContent=(data[langContent].courses);
    marathon.textContent = (data[langContent].marathon);
    h1.textContent=(data[langContent].h1);
    joinCourse.textContent=(data[langContent].joinCourse);
    fulltime.textContent=(data[langContent].fulltime);
    developFaster.textContent=(data[langContent].developFaster);
    constantPractice.textContent=(data[langContent].constantPractice);
    goit.textContent=(data[langContent].goit);
    // goitPopup.textContent=(data[langContent].goitPopup);
    // goitB.textContent=(data[langContent].goitB);
    whyMe.textContent=(data[langContent].whyMe);
    learnedBasics.textContent=(data[langContent].learnedBasics);
    knowWhy.textContent=(data[langContent].knowWhy);
    // knowWhyPopup.textContent=(data[langContent].knowWhyPopup);
    windows.textContent=(data[langContent].windows);
    // windowsPopup.textContent=(data[langContent].windowsPopup)
    developUkraine.textContent=(data[langContent].developUkraine);
    skills.textContent=(data[langContent].skills);
    htmlBasics.textContent=(data[langContent].htmlBasics);
    htmlSemantic.textContent=(data[langContent].htmlSemantic);
    cssResponsive.textContent=(data[langContent].cssResponsive);
    cssPositioning.textContent=(data[langContent].cssPositioning);
    cssPseudo.textContent=(data[langContent].cssPseudo);
    jsTypes.textContent=(data[langContent].jsTypes);
    jsConstructions.textContent=(data[langContent].jsConstructions);
    gitWork.textContent=(data[langContent].gitWork);
    figmaWork.textContent=(data[langContent].figmaWork);
    touchTyping.textContent=(data[langContent].touchTyping);
    touchTypingSpeed.textContent=(data[langContent].touchTypingSpeed);
    experience.textContent=(data[langContent].experience);
    learned.textContent=(data[langContent].learned);
    studyFastB.textContent=(data[langContent].studyFastB);
    studyFast.textContent=(data[langContent].studyFast);
    workInTeamB.textContent=(data[langContent].workInTeamB);
    workInTeam.textContent=(data[langContent].workInTeam);
    createB.textContent=(data[langContent].createB);
    create.textContent=(data[langContent].create);
},
};

let lang = document.getElementById("lang");
lang.addEventListener("click", data.changeLang);


// All elements querySelectors()
let contacts = document.querySelector(".contacts");
let languages = document.querySelector(".languages");
let eng = document.querySelector(".eng");
let ukr = document.querySelector(".ukr");
let rus = document.querySelector(".rus");
let education = document.querySelector(".education");
let univer = document.querySelector(".univer");
let courses = document.querySelector(".courses");
let marathon = document.querySelector(".marathon");
let h1 = document.querySelector("h1");
let joinCourse = document.querySelector(".join-course");
let fulltime = document.querySelector(".fulltime");
let developFaster = document.querySelector(".develop-faster");
let constantPractice = document.querySelector(".constant-practice");
let goit = document.querySelector(".goit");
let goitPopup = document.querySelector(".goitPopup");
let goitB = document.querySelector("goit-b");
let whyMe = document.querySelector(".why-me");
let learnedBasics = document.querySelector(".learned-basics");
let knowWhy = document.querySelector(".know-why");
let knowWhyPopup = document.querySelector(".know-why-popup");
let windows = document.querySelector(".windows");
let windowsPopup = document.querySelector(".windows-popup");
let developUkraine = document.querySelector(".develop-ukraine");
let skills = document.querySelector(".skills");
let htmlBasics = document.querySelector(".html-basics");
let htmlSemantic = document.querySelector(".html-semantic");
let cssResponsive = document.querySelector(".css-responsive");
let cssPositioning = document.querySelector(".css-positioning");
let cssPseudo = document.querySelector(".css-pseudo");
let jsTypes = document.querySelector(".js-types");
let jsConstructions = document.querySelector(".js-constructions");
let gitWork = document.querySelector(".git-work");
let figmaWork = document.querySelector(".figma-work");
let touchTyping = document.querySelector(".touch-typing");
let touchTypingSpeed = document.querySelector(".touch-typing-speed");
let experience = document.querySelector(".experience");
let learned = document.querySelector(".learned");
let studyFastB = document.querySelector(".study-fast-b");
let studyFast = document.querySelector(".study-fast");
let workInTeamB = document.querySelector(".work-in-team-b");
let workInTeam = document.querySelector(".work-in-team");
let create = document.querySelector(".create");
let createB = document.querySelector(".create-b");

