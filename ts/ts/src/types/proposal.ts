import type React from "react"

export interface LineItems {
    id: string
    service: string
    quant: number
    price: number
}

export interface LineItemsProps {
    setModal: (value: boolean) => void
    setEditingId: (id: string) => void
    press: LineItems[]
    setPress: (items: LineItems[]) => void
    before: () => void
    after: () => void
    step: number
    sub: boolean
}

export interface CustomerInfo {
    name: string
    mail: string
    compname: string
    deal: number
    note: string
    num: number
}

export interface CustomerInfoProps {
    form: CustomerInfo
    setForm : React.Dispatch<React.SetStateAction<CustomerInfo>>
    sub: boolean
    step: number
    gotostep2: () => void
}

export interface PreviewProps {
    form: CustomerInfo
    press: LineItems[]
    con: () => void
    gotostep2: () => void
    step: number

}

export interface ProposalFormProps {
    press: LineItems[]
    setPress: (items: LineItems[]) => void
    service: string 
    setService: React.Dispatch<React.SetStateAction<string>>
    quant: number
    setQuant: React.Dispatch<React.SetStateAction<number>>
    price: number
    setPrice: React.Dispatch<React.SetStateAction<number>>
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>> 
    editingId: string | null
    setEditingId: React.Dispatch<React.SetStateAction<string | null>>
    not: boolean
}

