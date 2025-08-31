function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    // Object.keys(reactElement.props).forEach(propName=>{
    //     domElement[propName]=reactElement.props[propName];
    // });
    domElement.innerHTML=reactElement.children;
    for(const prop in reactElement.props){
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    container.appendChild(domElement);
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click here to go to google'
}
const maincontainer=document.querySelector('#root');
customRender(reactElement,maincontainer);