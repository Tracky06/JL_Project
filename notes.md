**_ Building the Hamburger menu _**
https://www.youtube.com/watch?v=aNDqzlAKmZc
https://github.com/treehouse/ham-menu/blob/main/index.html
Try to make the hamburger menu rotate 720 degrees using animation and keyframes

.image-container::after {
content: "";
position: absolute;
bottom: 0;
left: 0;
right: 0;
height: 50px; /_ adjust to your desired overlay height _/
background-color: rgba(0, 0, 0, 0.5); /_ adjust opacity and color _/
}

.bg-img {
width: 100%;
height: 100%;
background: url('http://alexcarpenter.me/img/banner.jpg') center center no-repeat;
background-size: cover;

&:before {
content: '';
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-image: linear-gradient(to bottom right,#002f4b,#dc4225);
opacity: .6;
}
}

.overlay {
border-image: linear-gradient(hsl(240 100% 20% / 0.6), hsl(0 100% 20% / 0.6))
fill 1;
}

.hero {
background-image: url("https://images.unsplash.com/photo-1697229299093-c920ab53bfb1?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTU2OTIzNzZ8&ixlib=rb-4.0.3&q=85");
background-size: cover;
background-repeat: no-repeat;

min-block-size: 80vh;
place-content: center;
text-align: center;
}

@layer general-styling {
html {
color-scheme: dark light;
font-family: system-ui;
line-height: 1.6;
}

body {
font-size: 2rem;
margin: 1rem;
}

h1 {
line-height: 1;
}
}
