export const generateReference = (length) => {
    let reference = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        reference += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return "QA+" + reference;
}

export const isNotNull = (value) => {
    return value !== null;
}