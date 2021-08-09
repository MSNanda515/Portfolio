export const summaryObj = {
    id: 'aboutme',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About Me',
    headLine: 'Summary',
      
    description: ['Hello, My name is Mehar. I am currently pursuing an undergraduate degree in BSc\
    Computer Engineering at the University of Alberta. ', 
    ' I have experience in Web Development, Robotics and Embedded Software. I am currently learning about Neural \
    Networks and Cloud Infrastructures. I am pretty comfortable with coding in C++, Node.Js, JavaScript, C#, Java and Python. I am \
    passionate about writing beautiful code and developing great products. I have a strong foundation \
    in Mathematics and Logical Problem Solving and am a master of finding and fixing bugs.', 
    'I grew up with a growth mindset and try to challenge myself in every walk of life. \
    I plan to keep giving my best efforts to reach my potential and hope to use my skills to give back\
    to the community.'],
    buttoLabel: 'GetStarted',
    imgStart: true,
    img: './images/svg2.svg',
    alt: 'Puggy',
    dark: true,
    primary: true,
    darkText: false
};

export const ExperienceObj = {
    id: 'experience',
    lightBg: true,
    lightText: false,
    headLine: 'Experience',
    buttoLabel: 'GetSrated',
    darkText: true,
    expData : [
        {
            title: 'Full Stack Developer',
            comp: 'Clavis Studio',
            team: 'The Myles App',
            des: ['Worked closely with product owners to gather and execute product requirements',
                'Managed time sensitive updates including content changes, database upgrades, and bug fixes for both the website\
                using Laravel PHP framework and the native mobile applications using Kotlin for Android and Swift for iOS',
                ],
            dur: 'July 2021 - November 2021'
        },
        {
            title: 'Software Developer',
            comp: 'AlbertaSat',
            team: 'Iris Imaging Payload',
            des: ['Developed an interrupt driven command handler for the ARM based HPS (hard processor system) on Intel cyclone V SoC to enable communication between the OBC (onboard computer) and the imaging payload system on the CubeSat',
                'Wrote an Image compression test script in C for uncovering faults in the existing image compression software',
                'Developed an asynchronous multithreaded electronic power system simulator for a CubeSat implemented in C using POSIX pthread API and other IPC (inter-process communication) mechanisms', 
                'Assisted the team with documentation of the firmware and other software components on the satellite'],
            dur: 'May 2020 - Present'
        },
        {
            title: 'Team Lead',
            comp: 'UASTARR',
            team: 'Avionics',
            des: ['Managed a team of six using agile principles thereby increasing objective fulfillment by 40% compared to previous semesters', 
                'Designed the avionics bay while assisting in the research of the telemetry and the recovery system for the rocket',
                'Assisted in the project management of the team and drafting project reports for competitions'],
            dur: 'May 2020 - Present'
        },
        {
            title: 'Vehicle Controls Engineer',
            comp: 'UAlberta Formula Racing EV Team',
            team: 'Electric Vehicle (EV) team',
            des: ['Researched and proposed the components for the prototype of the shutdown circuit to meet safety requirements', 
                'Attended workshops on SolidWorks'],
            dur: 'January 2021 - Present'
        },
        {
            title: 'Sales Associate',
            comp: 'Costco Wholesale',
            team: 'Electronics/Majors',
            des: ['Provided high quality service by assisting over 50 customers daily with their electronics purchase while upholding brand standards and values to ensure customer satisfaction'],
            dur: 'June 2020 - January 2021'
        },
        {
            title: 'Editor',
            comp: 'St. Joeph\' College',
            team: '\'The Semite\' Newsletter',
            des: ['Supervised the editorial team of 5 members, edited the biweekly newsletter, and interviewed alumni'],
            dur: 'April 2015 - March 2017'
        },
    ]
} 

export const awards = {
    id: 'achievements',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    description: [
        'Google Cloud Summer Challenge Scholar – July 2021',
        'Received Skill Badge in Insights from Data with BigQuery - May 2021',
        'Awarded the second place at Junior Engineering Competition UAlberta – October 2020',
        'Received the University of Alberta Undergraduate Leadership Award – September 2020',
        'Completed Operating System and You: Becoming a Power User, Google (Coursera) – August 2020',
        'Received a Gold Medal in National Space Science Olympiad (NSSO) – August 2017',
        'Completed The Bits and Bytes of Computer Networking, Google (Coursera) – June 2020',
        'Completed Technical Support Fundamentals, Google (Coursera) – May 2020'
    ],
    imgStart: false,
    img: './images/award.svg',
    alt: 'Trophy',
    dark: false,
    primary: false,
    darkText: true
};