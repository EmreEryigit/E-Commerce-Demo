import React,{useState} from 'react'

function Form() {
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")

    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }
    const lastnameChangeHandler = (e) => {
        setLastname(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(name, lastname)
        const sendData = () => {
            fetch("https://kodsitesi-972e6-default-rtdb.firebaseio.com/kodsitesi.json", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    lastname: lastname
                }),
                headers: {
                    "Content-Type" : "application/json"
                }
            }).then(() => console.log("Yüklendi"))

        } 
        sendData()
        setLastname("")
        setName("")
        
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
          <label htmlFor="name">Ad</label>
          <input type="text" id='name' name='name' value={name} onChange={nameChangeHandler} />
          <label htmlFor="lastname">Soyad</label>
          <input type="text" id='lastname' name='lastname' value={lastname}  onChange={lastnameChangeHandler} />
          <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
