import type {ResultCurrencyProps} from "@/types/types";

export default function ResultCurrency({ result, currency }: ResultCurrencyProps) {
   const formattedResult = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency,
  }).format(result);

  return (
    <div className="bg-card-result border-none w-full max-w-md rounded-lg border bg-electric-violet-400 px-4 py-3 text-center">
      <span className="text-sm text-white">Resultado</span>

      <p className="mt-1 text-2xl text-white font-semibold">
        {formattedResult}
      </p>
    </div>
  );
}