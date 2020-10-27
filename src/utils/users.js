const users = []

const addUser = ({id,username,room})=>{
    //clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate data
    if(!username || !room){
        return{
            error: 'Username and room are required!'
        }
    }

    //check for existing user
    const existingUser = users.find((user)=>{
        return user.room === room && user.username === username
    })

    //validate username
    if(existingUser){
        return{
            error: 'Username is in use!'
        }
    }

    //Store user
    const user = {id,username,room}
    users.push(user)
    return {user}
}

const removeUser = (id)=>{
    const index = users.findIndex((user)=>user.id ===id)
    if(index !== -1){
        return users.splice(index,1)[0]
    }

}

const getUser =(id) =>{
    return users.find((user)=>user.id === id)
}

const getUsersInRoom = (room) =>{
    room = room.trim().toLowerCase()
    return users.filter((user)=>user.room === room)
}

addUser({
    id:22,
    username:'  saloni',
    room:' goyal'
})

addUser({
    id:42,
    username:'salu',
    room:' goyal'
})

addUser({
    id:22,
    username:'saloni',
    room:'saloni'
})

const user = getUser(42)
console.log(user)

const userList = getUsersInRoom('vb')
console.log(userList)

module.exports={
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}