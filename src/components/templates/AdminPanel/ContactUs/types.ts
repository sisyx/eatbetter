type Contact = {
    fullName: String,
    email: String,
    phoneNumber: String,
    subject: String,
    message: String,
};

type ContactProps = {
    fullName: String,
    email: String,
    phoneNumber: String,
    subject: String,
    message: String,
    reloadFn: Function,
};


export type { Contact, ContactProps };