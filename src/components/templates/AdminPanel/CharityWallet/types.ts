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
}

export type { CharityCard, CharityCardProps };