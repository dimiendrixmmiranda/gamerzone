type DataValor =
    | null
    | undefined
    | string
    | number
    | Date
    | { toDate: () => Date };
export function normalizarData(value: DataValor): number {
    if (!value) return 0; // null | undefined | ""

    // Firestore Timestamp
    if (typeof value === "object" && "toDate" in value) {
        return value.toDate().getTime();
    }

    // string | number | Date
    const dt = new Date(value);
    return isNaN(dt.getTime()) ? 0 : dt.getTime();
}
