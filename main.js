const news = [
    {
        title: 'Moderna created a vaccine against COVID-19',
        content: 'The company said the trial would involve children ages 12 through 17...',
        linkToSource: 'https://www.nytimes.com/2020/12/02/health/Covid-Moderna-vaccine-children.html',
        time: '6:34am',
        lableSource: 'The New York Times',
        img: 'https://static01.nyt.com/images/2020/12/02/science/02VIRUS-MODERNA-KIDS/02VIRUS-MODERNA-KIDS-jumbo.jpg?quality=90&auto=webp'
    },
    {
        title: 'Yandex capitalization exceeded $23 billion',
        content: 'MSCI, as expected, included Yandex shares in the MSCI Russia Index after the next quarterly revision...',
        linkToSource: 'https://www.interfax.ru/business/722697',
        time: '7:01am',
        lableSource: 'Interfax',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yandex_main_office.jpg/274px-Yandex_main_office.jpg'
    },
    {
        title: 'Pavel Durov criticizes WhatsApp',
        content: 'WhatsApp hides the source code from cybersecurity experts. Facebook, and therefore its subsidiary WhatsApp...',
        linkToSource: 'https://style.rbc.ru/life/5cdd5e989a79470947ab9430',
        time: '10:43am',
        lableSource: 'RBK News',
        img:'https://profile.ru/wp-content/uploads/2019/11/pavel-durov-protiv-WhatsApp.jpg'
    },
    {
        title: 'USA Announces 6 deaths in Pfizer Vaccine Trial',
        content: 'Half of the deceased were over 55 years old. Two of them were given the vaccine, and the rest were give...',
        linkToSource: 'https://www.rbc.ru/society/08/12/2020/5fcfb8319a794781eb76ef27?utm_source=yxnews&utm_medium=desktop',
        time: '4:02pm',
        lableSource: 'RBK News',
        img:'https://static01.nyt.com/images/2020/11/11/opinion/10allen-01/11ackerman-01-facebookJumbo.jpg'
    },
];

// full card
let Title1 = document.getElementById('goTitle');
    Content = document.getElementById('goContent');
    linkArticle = document.getElementById('article1');
    Source = document.getElementById('source');
// article's content

let showHeader = document.querySelectorAll('.goFull');
    showTime = document.querySelectorAll('.time');

for (let i = 0; i < news.length; i++) {
    showHeader[i].innerHTML = news[i].title;
    showTime[i].innerHTML = news[i].time;
};

// Buttons functions
let buttons = document.getElementsByTagName('button');
  for (let i = 0, len = buttons.length; i < len; i++) {
    buttons[i].onclick = function() {
      let showFullCard = document.querySelector('.full-card');
      showFullCard.style.display = 'Flex';
      Title1.innerHTML = news[i].title;
      Content.innerHTML = news[i].content;
      linkArticle.href = news[i].linkToSource;
      Source.innerHTML = news[i].lableSource;
      this.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
      showFullCard.style.background = `url(${news[i].img}) no-repeat center/100%`;
      showFullCard.style.backgroundSize = 'cover'
    };
  };

