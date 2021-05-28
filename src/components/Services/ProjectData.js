// acts as a list of list of objects to assist in automating adding new 
// data later on
export const ProjectData = {
    projects: [
        
            {
                img: './images/command.svg',
                prjName: 'Command Handler',
                prjDes: 'I developed the interrupt driven command handler for the HPS on Intel cyclone V SoC to enable\
                communication between the OBC and the imaging payload system on the CubeSat',
            },
            {
                img: './images/medAssist.svg',
                prjName: 'MedAssist App',
                prjDes: 'I designed the UI/UX interface and developed the login, signup and home page for the Health\
                 app using flutter and implemented its interface with Firebase Realtime database and google maps API',
            },
            {
                img: './images/eps.svg',
                prjName: 'EPS Simulator',
                prjDes: 'I developed an asynchronous multithreaded electronic power system simulator in C using POSIX\
                 pthread API and other IPC mechanisms',
            },
        
        
            {
                img: './images/nav.svg',
                prjName: 'Navigation System',
                prjDes: 'I developed the path finding component of the server using Dijkstra’s algorithm and designed the\
                 client program to communicate with the server over TCP using sockets in C++',
            },
        
    ]
};