type Cooperate = {
    id: number,
    fullName: String,
    email: String,
    phoneNumber: String,
    subject: String,
    message: String,
};

type CooperateProps = {
    id: number,
    fullName: String,
    email: String,
    phoneNumber: String,
    subject: String,
    message: String,
    reloadFn: Function,
};


export type { Cooperate, CooperateProps };