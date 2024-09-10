export function typeText() {
    var app = document.getElementById('typing');

    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter.typeString('Building Software At Startup Speed | .NET Full-Stack')
        .pauseFor(5000)
        .start();
}

