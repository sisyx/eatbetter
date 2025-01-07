type User = {
    id: number,
    country: string,
    email: string,
    phoneNumber: string,
    referralCode: string,
    timeZone: string,
    username: string,
    walletBalance: string,
}

type UserProps = {
    id: number,
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