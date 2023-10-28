const delay = (ms) => new Promise((res)=> setTimeout(res,ms))

let p1 = async ()=>{
    const txt = "Hey! Get Ready..."
    const h1 = document.createElement('h1')
    h1.textContent = txt;
    document.body.appendChild(h1)
    await delay(3000)
}

let p2 = async ()=>{
    const txt = "inializing hacking program...."
    const h1 = document.createElement('h1')
    h1.textContent = txt;
    document.body.appendChild(h1)
    await delay(3000)
}

let p3 = async ()=>{
    const txt = "Getting Access to your device....."
    const h1 = document.createElement('h1')
    h1.textContent = txt;
    document.body.appendChild(h1)
    await delay(3000)
}

let p4 = async ()=>{
    const txt = "Got Access Successfully......"
    const h1 = document.createElement('h1')
    h1.textContent = txt;
    document.body.appendChild(h1)
    await delay(3000)
}
    
let p5 = async ()=>{
    const txt = "Connecting to your Email......"
    const h1 = document.createElement('h1')
    h1.textContent = txt;
    document.body.appendChild(h1)
    await delay(3000)
}

let p6 = async ()=>{
    const txt = "Fetching your Passwords......"
    const h1 = document.createElement('h1')
    h1.textContent = txt;
    document.body.appendChild(h1)
    await delay(3000)
}

let p7 = async ()=>{
    const txt = "Getting Access to your Social Media Accounts......"
    const h1 = document.createElement('h1')
    h1.textContent = txt;
    document.body.appendChild(h1)
    await delay(3000)
}

let p8 = async ()=>{
    const txt = "Got Access to your Social Media Accounts Successfully......"
    const h1 = document.createElement('h1')
    h1.textContent = txt;
    document.body.appendChild(h1)
    await delay(3000)
}

let p9 = async ()=>{
    const txt = "Wohooooo!!! Your Device Got Hacked......."
    const h1 = document.createElement('h1')
    h1.textContent = txt;
    document.body.appendChild(h1)
    await delay(3000)
}

async function man(){
    await p1()
    await p2()
    await p3()
    await p4()
    await p5()
    await p6()
    await p7()
    await p8()
    await p9()   
}
man()