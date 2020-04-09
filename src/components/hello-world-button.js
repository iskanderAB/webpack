import './hello-world-button.scss';
class helloWorldButton {
    classname = "hello-world-button";
    render() {
        const button = document.createElement('button');
        button.innerHTML = "helloWorldButton";
        button.classList.add(this.classname);
        const body = document.querySelector("body");
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = "hello world ";
            p.classList.add('hello-world-text');
            body.appendChild(p);
        };
        body.appendChild(button);
    }
}
export default helloWorldButton;
