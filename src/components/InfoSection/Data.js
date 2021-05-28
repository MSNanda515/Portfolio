export const homeObjOne = {
    id: 'kk',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headLine: 'Unlimited Transaction with zeros fees',
    description: 'Get acceess to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttoLabel: 'GetSrated',
    imgStart: false,
    img: './images/svg1.svg',
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Limited Access',
    headLine: 'Unlimited Transaction with zeros fees',
    description: 'Get acceess to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttoLabel: 'GetSrated',
    imgStart: true,
    img: './images/svg2.svg',
    alt: 'Puggy',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join Our Team',
    headLine: 'Unlimited Transaction with zeros fees',
    description: 'Get acceess to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttoLabel: 'GetSrated',
    imgStart: false,
    img: './images/svg3.svg',
    // img: './svg1.svg',
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true
};

export const summaryObj = {
    id: 'aboutme',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About Me',
    headLine: 'Summary',
      
    description: ['Hello, My name is Mehar. I am currently pursuing an undergraduate degree in BSc\
    Computer Engineering at the University of Alberta. ', 
    ' I have experience in Robotics and Embedded Software. I am currently learning about Neural \
    Networks and React Framework.  I am pretty comfortable with coding in C++ and Python and am \
    passionate about writing beautiful code and developing great products. I have a strong foundation \
    in Mathematics and Logical Problem Solving and am a master of finding and fixing bugs.', 
    'I grew up with a growth mindset and try to challenge myself in every walk of life. \
    I plan to keep giving my best efforts to reach my potential and hope to use my skills to give back\
    to the community.'],
    buttoLabel: 'GetSrated',
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
            title: 'Software Developer',
            comp: 'AlbertaSat',
            team: 'Iris Imaging Payload',
            des: ['Developed an interrupt driven command handler for the ARM based HPS (hard processor system) on Intel cyclone V SoC to enable communication between the OBC (onboard computer) and the imaging payload system on the CubeSat', 
                'Assisted the team with documentation of the firmware and other software components on the satellite'],
            dur: 'May 2020 - Present'
        },
        {
            title: 'Team Lead',
            comp: 'STARR',
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
            des: ['Designed a prototype of the brake system encoder (BSE) to be used in the vehicle ensuring that it meet the safety requirements of the competition', 
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
    description: ['Second place at Junior Engineering Competition UAlberta – 2020',
        'University of Alberta Undergraduate Leadership Award – 2020',
        'Gold Medal in National Space Science Olympiad (NSSO) – 2017' ],
    imgStart: false,
    img: './images/award.svg',
    alt: 'Trophy',
    dark: false,
    primary: false,
    darkText: true
};