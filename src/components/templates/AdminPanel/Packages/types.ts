type Package = {
    id: number,
    name: string,
    currency: string,
    maxDiet: number,
    price: number,
};

type PackageProps = {
    id: number,
    name: string,
    currency: string,
    maxDiet: number,
    price: number,
    reloadFn: Function,
};

type XXXType = {
    value: "name" | "currency" | "price" | "maxDiet",
    title: string,
    placeholder: string,
    type: "text" | "number",
}

export type { Package, PackageProps, XXXType}