const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' },
};

export default request = async (url) => {

    try {
        const userID = await parseInt(url.substr('/users/'.length), 10);
        if (users[userID]) {
            return users[userID]
        }
        return {}
    }
    catch (error) {
        return {
            error: 'User with ' + userID + ' not found.'
        };
    }


}
