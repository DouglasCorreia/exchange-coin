import ThemeSwitch from "@/components/home/themeswitch";

export default function Header() {
    return (
        <header className="w-full bg-electric-violet-700 text-white">
            <div className="container flex items-center justify-between py-4">
                <h1 className="text-2xl font-bold">Conversor de moedas</h1>

                <ThemeSwitch />
            </div>
        </header>
    )
}