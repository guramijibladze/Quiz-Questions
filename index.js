
const questionArr = [
    {
        question: 'რომელი მეფის პერიოდში მოითხოვდნენ დიდგვაროვნები მონარქის ძალაუფლების შესასუსტებლად ე.წ. კარავის დაარსებას, რომელიც ერთგვარად პარლამენტის მსგავსი დაწესებულება იქნებოდა?',
        choices: ['ვახტანგ მეექვსის', 'დავით აღმაშენებლის', 'ბაგრატ მეოთხის', 'თამარ მეფის' ],
        corretAnswer: 3
    },
    {
        question: 'რომელ წელს ჩამოყალიბდა საქართველოს ეროვნული საბჭო?',
        choices: [ '1918', '1917', '1921', '1919' ],
        corretAnswer: 1
    },
    {
        question: '1919 წელს საქართველოს დემოკრატიული რესპუბლიკის საკანონმდებლო ორგანოს დამფუძნებელთა კრების 130 წევრიდან რამდენი იყო ქალი?',
        choices: ['5', '1', 'არცერთი', '10'],
        corretAnswer: 0
    },
    {
        question: 'ვინ იყო პირველი მუსლიმი ქალი, რომელიც არა მხოლოდ საქართველოში, არამედ მსოფლიოში არჩევნების გზით დეპუტატად აირჩიეს?',
        choices: ['ფარიხან სოფიევა', 'მარო მაყაშვილი', 'კატო მიქელაძე', 'მაკო საფაროვა'],
        corretAnswer: 0
    },
    {
        question: 'საბჭოთა კავშირის დაშლიდან დამოუკიდებლობის აღდგენის შემდეგ როდის ჩატარდა საქართველოს საკანონმდებლო ორგანოს პირველი არჩევნები?',
        choices: ['1995 წელს', '1993 წელს', '1992 წელს', '1991 წელს' ],
        corretAnswer: 2
    },
    {
        question: 'საქართველოს პარლამენტმა რომელს წელს მიიღო სახელმწიფოს უზენაესი კანონი, საქართველოს კონსტიტუცია?',
        choices: ['1996', '1992', '1995', '2003'],
        corretAnswer: 2
    },
    {
        question: 'რომელ წელს აშენდა თბილისში, რუსთაველის გამზირზე მდებარე პარლამენტის შენობა?',
        choices: ['1972 წელს', '1965 წელს', '1953 წელს', '1980 წელს'],
        corretAnswer: 2
    },
    {
        question: 'რამდენი წევრისგან კომპლექტდება საქართველოს პარლამენტი?',
        choices: ['100', '150', '120', '170' ],
        corretAnswer: 1
    },
    {
        question: '2020 წლის საქართველოს პარლამენტის არჩევნებზე 150 წევრიდან რამდენი აირჩევა პროპორციულით და რამდენი მაჟორიტარული საარჩევნო სისტემის გზით?',
        choices: ['მხოლოდ პროპორციული საარჩევნო სისტემის საფუძველზე აირჩევა პარლამენტის წევრები',
                'მხოლოდ მაჟორიტარული საარჩევნო სისტემის საფუძველზე აირჩევა პარლამენტის წევრები',
                '77 პროპორციულით, ხოლო 73 მაჟორიტარული გზით', '120 პროპორციულით, ხოლო 30 მაჟორიტარული გზით'],
        corretAnswer: 3
    },
    {
        question: 'რომელი წლიდან ამოქმედდება გენდერული კვოტები საქართველოს პარლამენტში?',
        choices: ['2028 წლიდან', '2020 წლიდან', 'მსგავს საარჩევნო კოდექსს საქართველოს პარლამენტი არ განიხილავს', '2024 წლიდან'],
        corretAnswer: 1
    },
   
];



const questionText = document.getElementById('question-text');
const answer1 = document.getElementById('answer-1');
const answer2 = document.getElementById('answer-2');
const answer3 = document.getElementById('answer-3');
const answer4 = document.getElementById('answer-4');
const outOf = document.getElementById('out-of');
const questionNumTitle = document.getElementById('question-num');
const percent = document.querySelector('.progress-bar');
// console.log(questionArr[0]['question']);

let questionNum = 0;
let outOfnum = 1;
let pecentBar = 0;


questionText.innerHTML = questionArr[questionNum]['question'];
answer1.innerHTML = questionArr[questionNum]['choices'][0];
answer2.innerHTML = questionArr[questionNum]['choices'][1];
answer3.innerHTML = questionArr[questionNum]['choices'][2];
answer4.innerHTML = questionArr[questionNum]['choices'][3];
outOf.innerHTML = outOfnum;


const button = document.getElementById('button');
button.addEventListener('click', function(){
    questionNum += 1;
    outOfnum += 1;
    pecentBar += 10;

    outOf.innerHTML = outOfnum;
    questionNumTitle.innerHTML = outOfnum;
    percent.innerHTML = pecentBar + ' ' + '%';
    percent.style.width = pecentBar + "%";
    // console.log(percent.style.width);

    questionText.innerHTML =  questionArr[questionNum]['question'];
    answer1.innerHTML = questionArr[questionNum]['choices'][0];
    answer2.innerHTML = questionArr[questionNum]['choices'][1];
    answer3.innerHTML = questionArr[questionNum]['choices'][2];
    answer4.innerHTML = questionArr[questionNum]['choices'][3];
});