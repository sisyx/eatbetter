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

export type { Package, PackageProps}