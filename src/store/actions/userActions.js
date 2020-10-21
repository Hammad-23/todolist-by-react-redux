function updateUser(user){
   console.log('user--> ', user)

   return { type: 'UPDATE_USER', user
   }
}

export {
    updateUser
}