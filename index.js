const express = require('express');
const app = express();
const morgan = require('morgan');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://angular-resume.vercel.app');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//Routes

app.use(require('./routes/resume'));

//Raiz
app.get('/', (req, res) => {
    res.json(
        {
            "main": {
                "name": "Diego Zuccoli",
                "occupation": "Developer Sr",
                "description": "Thank you for checking my resume out. Here you will find all the info you need to know about me! :D",
                "image": "assets/img/yo.jpg",
                "bio": [ {
                    "text": "I was born on September 4, 1986 and I currently live in Buenos Aires City. I am a person who enjoys what he does. I learned to program 20 years ago in a self-taught way. I don't consider myself bilingual but I do get along very well with English."
                },
                {
                    "text": "At 19 I had my first job as a junior programmer. Today I am a senior backender but I can also do some frontend with Angular."
                },
                {
                    "text": "As for technology, I have a small server at home where I run some services with Docker."
                },
                {
                    "text": "I also like to program with Arduino or some microcontroller like ESP8266."
                },
                {
                    "text": "I am interested in 3D printing, I have one printer and I am building another one from scratch. These three interests together allow me to do personal projects such as modifying the doorbell of my house so that it sends notifications by Telegram when it rings or remotely control LED lights."
                },
                {
                    "text": "Out of all this I collect action figures from the 80s and 90s, for example He Man or Silverhawks."
                },
                {
                    "text": "I watch a lot of YouTube, especially channels in English. This helps me practice understanding. I also like to watch movies and series."
                },
                {
                    "text": "I live with my cats Mandy and Tyrell."
                },
                {
                    "text": "As for music, I have been a KISS fan since I was 13 years old. I have several autographs, picks, and other memorabilia from the band. One of my greatest joys was shaking hands with Gene Simmons."
                }
                ],
                "contactmessage": "Feel free to contact me. Please don't forget to tell me your mail.",
                "email": "frehley3000@protonmail.com",
                "phone": "+54 1160 545477",
                "address": {
                    "street": "Laguna 1334",
                    "city": "Buenos Aires",
                    "state": "City",
                    "zip": "1407"
                },
                "intro": "hi, i'm Diego",
                "website": "http://cv.diegoz.ar/",
                "resumedownload": "assets/CV_Diego Zuccoli - DEV 2022 EN.pdf",
                "social": [ {
                    "name": "facebook",
                    "url": "https://www.facebook.com/ace.zeta.75",
                    "className": "fab fa-facebook"
                },
                {
                    "name": "twitter",
                    "url": "http://twitter.com/frehley",
                    "className": "fab fa-twitter"
                },
                {
                    "name": "linkedin",
                    "url": "http://linkedin.com/in/dzuccoli",
                    "className": "fab fa-linkedin"
                },
                {
                    "name": "instagram",
                    "url": "http://instagram.com/",
                    "className": "fab fa-instagram"
                },
                {
                    "name": "github",
                    "url": "http://github.com/frehley",
                    "className": "fab fa-github"
                }
                ]
            },
            "resume": {
                "skillmessage": "Here you can create a short write-up of your skills to show off to employers",
                "education": [ {
                    "school": "University?",
                    "degree": "Masters in Beer tasting",
                    "graduated": "April 2007",
                    "description": "Describe your experience at school, what you learned, what useful skills you have acquired etc."
                },
                {
                    "school": "School #1 Maybe College?",
                    "degree": "What did you study 101",
                    "graduated": "March 2003",
                    "description": "Describe your experience at school, what you learned, what useful skills you have acquired etc."
                }
                ],
                "work": [ {
                    "company": "Contabilium",
                    "title": "Technical Leader",
                    "years": "2022 - Present",
                    "logo": "assets/img/companies/contabilium.png",
                    "description": "I fulfill the role of technical leader of the backend team. I analyze and develop the new architectures that we are using for the implementation of a microservices scheme. I train and support team members. We also managed to put together an architecture for big data and reduce waiting times from 6 minutes to 5 seconds per query."
                },
                {
                    "company": "CFO Tech",
                    "title": "Senior Backend Dev",
                    "years": "2020 - 2022",
                    "logo": "assets/img/companies/cfo.png",
                    "description": "In CFO I was dedicated to the creation of APIs and Web Services using .Net Core. I trained the team to use GIT on Azure and wrote the usage guide and good practices for use by all development teams. I programmed a service that replaces the Lapos, so that an equipment is no longer needed by each programmer."
                },
                {
                    "company": "SML Experta ART",
                    "title": "Senior Backend Dev",
                    "years": "2019 - 2020",
                    "logo": "assets/img/companies/experta.svg",
                    "description": "I spearheaded the migration to API Rest technologies using .Net Core 2.2 and then 3.1. I wrote the error handling middleware, data log, Healthcheck and Swagger. I set up the environments in Docker and the migration of all sources to GIT environments (before they only had a shared folder). I trained the team so that they could continue those same developments and later make APIs on their own."
                },
                {
                    "company": "Qstom",
                    "title": "Senior Dev",
                    "years": "2017 - 2019",
                    "logo": "assets/img/companies/qstom.png",
                    "description": "At Qstom I was in charge of maintaining and developing the Cyberseg system. This system handles everything that an insurance broker does (policies, endorsements, insured, interfaces, reports, settlements, etc.)"
                },
                {
                    "company": "InMotion GIT",
                    "title": "Ssr Dev",
                    "years": "2013 - 2017",
                    "logo": "assets/img/companies/inmotion.png",
                    "description": "I worked for the Galicia Seguros and Prudential Seguros projects. Both VTime systems. The difference with the Sancor Seguros project is that while at GIT I was part of the core application development team and at Sancor I was mostly an incident resolution table. At GIT I learned about broad topics in the world of insurance such as issues, client portfolio, commissions, billing, shipments to payment methods, imputation, etc."
                },
                {
                    "company": "Sancor Seguros",
                    "title": "Ssr Backend Dev",
                    "years": "2012 - 2013",
                    "logo": "assets/img/companies/sancor.png",
                    "description": "I worked solving incidents in a development table for VTime of Sancor Seguros. I had the opportunity to travel to Santa Fe to meet Sancor Seguros, one of the largest insurance companies in Latin America. Here I learned the basics of insurance."
                },
                {
                    "company": "MasterSoft",
                    "title": "Junior Dev",
                    "years": "2009 - 2012",
                    "logo": "assets/img/companies/mastersoft.png",
                    "description": "I worked as a programmer in a work team. The systems we made were very varied as well as the technology used since it was a software factory."
                },
                {
                    "company": "UOCRA",
                    "title": "Junior Dev",
                    "years": "2007 - 208",
                    "logo": "assets/img/companies/uocra.svg",
                    "description": "I was hired to make changes to an ex officio cursor administration system that UOCRA imparted together with the National Government."
                }
                ],
                "skills": [ {
                    "name": "C# .Net Core",
                    "level": "100%"
                },
                {
                    "name": "VB .Net",
                    "level": "100%"
                },
                {
                    "name": "Web Services & API",
                    "level": "100%"
                },
                {
                    "name": "SQL/Oracle",
                    "level": "100%"
                },
                {
                    "name": "GIT",
                    "level": "90%"
                },
                {
                    "name": "MongoDB",
                    "level": "80%"
                },
                {
                    "name": "HTML 5",
                    "level": "80%"
                },
                {
                    "name": "Angular",
                    "level": "60%"
                },
                {
                    "name": "CSS",
                    "level": "50%"
                }
                ]
            },
            "portfolio": {
                "projects": [ {
                    "title": "Canadian Wanderlust",
                    "category": "My Travel Blog for my post-university travels",
                    "image": "canadian-wanderlust.jpg",
                    "url": "https://www.canadianwanderlust.com"
                },
                {
                    "title": "Fury Fighting Gear",
                    "category": "(offline now) A fighting gear company I started",
                    "image": "fury-fighting-gear.jpg",
                    "url": "http://www.timbakerdev.com"
                },
                {
                    "title": "Original Thai Food",
                    "category": "Website I built for a restaurant I like in Thailand",
                    "image": "original-thai-food.jpg",
                    "url": "http://www.timbakerdev.com/originalthaifood.github.io"
                },
                {
                    "title": "Resume Website",
                    "category": "A React based resume website template",
                    "image": "resume-website.jpg",
                    "url": "http://www.timbakerdev.com"
                },
                {
                    "title": "Smirkspace",
                    "category": "(MVP Only) A React and Meteor based chat University project.",
                    "image": "smirkspace.jpg",
                    "url": "http://www.smirkspace.com"
                }
                ]
            },
            "testimonials": [ {
                "text": "A la grande le puse Cuca.",
                "user": "Homero J. Simpson"
            },
            {
                "text": "That Diego Zuccoli must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!",
                "user": "Steve Wozniak... impersonator"
            }
            ]
        }
    );
});

//Iniciando el servidor, escuchando...
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${ app.get('port') }`);
});