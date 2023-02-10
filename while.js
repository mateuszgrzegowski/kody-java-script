let user = getFirstUser();
while (user !== null) {
    console.log(user);
    user = getNextUser(user);

}