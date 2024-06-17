import { format } from "date-fns";

export const formatDate = (date: Date | string) => {
    console.log(date)
    return format(date, "dd/MM/yyyy")
}