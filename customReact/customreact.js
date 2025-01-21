// function customRender(reactElement, container) {
//     const domeElement = document.createElement(reactElement.type)
//     domeElement.innerHTML = reactElement.children
//     domeElement.setAttribute()

// }

const domeElement = document.createElement
(reactElement.type)
domeElement.innerHTML = reactElement.children
for (const prop in reactElement.props) {
    if (prop == 'children') continue;
    domeElement.setAttribute(prop, reactElement.props[prop])
}
Container.appendChild(domeElement)


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click mr to visit Google'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
