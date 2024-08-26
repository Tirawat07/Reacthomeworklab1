function App(){


     
    function Age(age = prompt('enter Year')){
        const teeage = 2001
        const stylec = {color :'red',textAlign:'center'}
       {
        let x = age - teeage
        console.log(x)


        
        return <h1 style={stylec}> Age:{x} </h1>
         
       }
    }
    return (
        <div className = 'container'>
        <p> Lab01  </p>
        <h1>Tirawat Suayngam</h1>
        {Age()}
    

        </div>
        )
}


console.log(document.querySelector('#root'))


ReactDOM.createRoot(document.querySelector("#root"))
.render(<App/>)

