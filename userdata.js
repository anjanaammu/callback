function fetchUserData(){
    return new Promise((resolve)=>{setTimeout(()=>{resolve({name:"anjana",age:21,place:"pkd"})},2000)})
}
async function getUserData() {
    const user=await fetchUserData()
    return user
    
}
async function UserData() {
    const user=await getUserData()
    console.log(user);
    
    
}
UserData()