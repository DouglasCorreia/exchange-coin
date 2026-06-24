import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { Spinner } from "@/components/ui/spinner"
import { toast } from "sonner";
import currencies from "@/data/currencies.json"
import ResultCurrency from "@/components/home/resultCurrency";
import { useConvertCurrency } from "@/hooks/useConvertCurrency";

const sortedCurrencies = [...currencies].sort((a, b) =>
  a.name.localeCompare(b.name, "pt-BR")
);

export default function Home() {
  const [amount, setAmount] = useState<string>("");
  const [fromCurrency, setFromCurrency] = useState<string>("")
  const [toCurrency, setToCurrency] = useState<string>("")

  const conversionMutation = useConvertCurrency();

  async function handleConvert() {
    if (!amount || amount === "") {
      toast.error("Informe um valor para converter.");

      return
    };

    if (fromCurrency === toCurrency) {
      toast.warning("As moedas de origem e destino são as mesmas.");

      return;
    }

    conversionMutation.mutate({
      amount: Number(amount),
      from: fromCurrency,
      to: toCurrency,
    });
  }

  return (
    <main className="min-h-screen flex flex-col gap-4 items-center justify-center">
      <Card className="p-6 w-full max-w-md">
        <CardContent className="p-0 space-y-6">
          <p className="text-center leading-none m-0 mb-8 p-0">Digite um valor e escolha as moedas para realizar a conversão.</p>

          <div className="flex flex-wrap justify-between">
            <div className="w-full max-w-full sm:w-[calc(50%-10px)]">
              <label className="block leading-none text-sm font-medium mb-2">De</label>

              <Select
                value={fromCurrency}
                onValueChange={setFromCurrency}
              >
                <SelectTrigger className="w-full bg-white ring-0 ring-offset-1 ring-offset-electric-violet-300 ring-electric-violet-300">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent className="w-full bg-white ring-0 ring-offset-1 ring-offset-electric-violet-300 ring-electric-violet-300">
                  {sortedCurrencies.map(currency => {
                    return (
                      <SelectItem
                        key={currency.code}
                        value={currency.code}
                      >
                        {currency.name} ({currency.code})
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>

            <div className="w-full max-w-full sm:w-[calc(50%-10px)]">
              <label className="block leading-none text-sm font-medium mb-2">Para</label>

              <Select
                value={toCurrency}
                onValueChange={setToCurrency}
              >
                <SelectTrigger className="w-full bg-white ring-0 ring-offset-1 ring-offset-electric-violet-300 ring-electric-violet-300">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent className="w-full bg-white ring-0 ring-offset-1 ring-offset-electric-violet-300 ring-electric-violet-300">
                  {sortedCurrencies.map(currency => {
                    return (
                      <SelectItem
                        key={currency.code}
                        value={currency.code}
                      >
                        {currency.name} ({currency.code})
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-3">
            <Input
              className="w-full bg-white ring-0 ring-offset-1 ring-offset-electric-violet-300 ring-electric-violet-300"
              type="text"
              placeholder="Digite o valor"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              disabled={conversionMutation.isPending}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  handleConvert();
                }
              }}
            />

            <Button
              className="w-full cursor-pointer"
              disabled={conversionMutation.isPending}
              onClick={handleConvert}
            >
              Converter
            </Button>
          </div>
        </CardContent>
      </Card>

      {
        conversionMutation.isPending ? (
          <Spinner className="text-electric-violet-500 size-8" />

        ) : conversionMutation.data && conversionMutation.isSuccess && (
          <ResultCurrency
            result={conversionMutation.data}
            currency={conversionMutation.variables.to}
          />
        )
      }

      <Toaster position="top-center" richColors />
    </main>
  );
}
