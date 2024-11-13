function startErr() {
    try {
        x();
    } catch(err) {
        throw new Error(err);
    }
}

startErr();
