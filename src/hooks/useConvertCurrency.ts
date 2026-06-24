import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { convertCurrency } from "@/services/convertCurrency";
import type {ConvertCurrencyVariables} from "@/types/types"

export function useConvertCurrency() {
    return useMutation({
        mutationFn: ({amount, from, to}: ConvertCurrencyVariables) => convertCurrency({amount, from, to}),
        onError: (error) => {
        toast.error("Ocorreu um erro ao converter a moeda. Tente novamente mais tarde.");
        console.error("Error converting currency:", error);
        },
    });
}