type Cooperate = {
    fullName: String,
    email: String,
    phoneNumber: String,
    subject: String,
    message: String,
};

type CooperateProps = {
    fullName: String,
    email: String,
    phoneNumber: String,
    subject: String,
    message: String,
    reloadFn: Function,
};


export type { Cooperate, CooperateProps };