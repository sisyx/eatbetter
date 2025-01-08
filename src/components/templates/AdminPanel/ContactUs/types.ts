type Contact = {
    id: number,
    fullName: String,
    email: String,
    phoneNumber: String,
    subject: String,
    message: String,
};

type ContactProps = {
    id: number,
    fullName: String,
    email: String,
    phoneNumber: String,
    subject: String,
    message: String,
    reloadFn: Function,
};


export type { Contact, ContactProps };