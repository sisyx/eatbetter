type User = {
    country: string,
    email: string,
    phoneNumber: string,
    referralCode: string,
    timeZone: string,
    username: string,
    walletBalance: string,
}

type UserProps = {
    country: string,
    email: string,
    phoneNumber: string,
    referralCode: string,
    timeZone: string,
    username: string,
    walletBalance: string,
    reloadFn: Function,
}

export type { User, UserProps };