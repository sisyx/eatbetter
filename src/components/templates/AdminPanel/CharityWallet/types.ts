type CharityCard = {
    accountNumber: string,
    iban: string,
    bankName: string,
    fullName: string,
    balance: number
}

type CharityCardProps = {
    accountNumber: string,
    iban: string,
    bankName: string,
    fullName: string,
    balance: number,
    reloadFn: Function,
}

type EditCardProps = {
    accountNumber: string,
    iban: string,
    bankName: string,
    fullName: string,
    balance: number,
    reloadFn: Function,
}

export type { CharityCard, CharityCardProps, EditCardProps };