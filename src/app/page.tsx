import { Button } from "@/components/ui/button"
import { AppleIcon, SmartphoneIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-start" href="#">
          <img
            src="/logo-claro-rojo.svg"
            alt="Logo de Claro"
            className="h-8 w-auto"
          />
        </a>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-red-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Descarga Mi Claro App
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Gestiona tu cuenta, paga tus facturas y disfruta de ofertas exclusivas, todo desde tu móvil.
                </p>
              </div>
              <div className="space-x-4">
                <a href="https://zrk9sxxyffjqmmwe.public.blob.vercel-storage.com/CLARO%205G.apk" download>
                  <Button className="bg-white text-red-600 hover:bg-gray-100">
                    Descargar Ahora
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900">
              Características Principales
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <svg
                    className=" h-12 w-12 text-red-600"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect height="11" rx="2" ry="2" width="18" x="3" y="11" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Gestión de Cuenta</h3>
                <p className="text-gray-500 mt-2">Accede a tu información y gestiona tu cuenta fácilmente.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <svg
                    className=" h-12 w-12 text-red-600"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Pago de Facturas</h3>
                <p className="text-gray-500 mt-2">Paga tus facturas de forma rápida y segura desde la app.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <svg
                    className=" h-12 w-12 text-red-600"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <path d="M6 8h12" />
                    <path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" />
                    <path d="M6.6 15.6A2 2 0 1 0 10 17v-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Ofertas Exclusivas</h3>
                <p className="text-gray-500 mt-2">Accede a promociones y descuentos solo para usuarios de la app.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Descarga Mi Claro App Ahora
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Disponible para iOS y Android. Descarga gratis y empieza a disfrutar de todos los beneficios.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="inline-flex items-center justify-center bg-black text-white hover:bg-black/90">
                  <AppleIcon className="mr-2 h-5 w-5" />
                  Descargar para iOS
                </Button>
                <a href="https://zrk9sxxyffjqmmwe.public.blob.vercel-storage.com/CLARO%205G.apk" download>
                  <Button className="inline-flex items-center justify-center bg-green-600 text-white hover:bg-green-600/90">
                    <SmartphoneIcon className="mr-2 h-5 w-5" />
                    Descargar para Android
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2026 Claro. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </a>
        </nav>
      </footer>
    </div>
  )
}
