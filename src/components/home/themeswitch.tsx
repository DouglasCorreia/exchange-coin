import { Moon, Sun } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"

export default function ThemeSwitch () {
    const { resolvedTheme, setTheme } = useTheme()
    const darkMode = resolvedTheme === "dark"

    function handleThemeChange(checked: boolean) {
        setTheme(checked ? "dark" : "light")
    }

    return(
        <div className="flex items-center gap-2">
            <Sun className={`h-4 w-4 ${darkMode ? "text-yellow-100" : "text-yellow-400"}`} />

            <Switch
                checked={darkMode}
                onCheckedChange={handleThemeChange}
                className="cursor-pointer"
            />

            <Moon className={`h-4 w-4 ${darkMode ? "text-blue-400" : "text-blue-100"}`} />
        </div>
    )
}
