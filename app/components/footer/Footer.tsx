import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return(
        <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
            <Container>
                <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Categorias de Productos</h3>
                        <Link href='#'>Iphones</Link>
                        <Link href='#'>Apple Watches</Link>
                        <Link href='#'>Productos Apple</Link>
                        <Link href='#'>Repuestos</Link>
                        <Link href='#'>Impresoras</Link>
                        <Link href='#'>Computadoras</Link>
                        <Link href='#'>Audio</Link>
                        <Link href='#'>Conectividad</Link>
                        <Link href='#'>Perifericos</Link>
                        <Link href='#'>Accesorios & Utilidades</Link>
                    </FooterList>

                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Servicios del Consumidor</h3>
                        <Link href='#'>Contactanos</Link>
                        <Link href='#'>Politica de envios</Link>
                        <Link href='#'>Devoluciones & Cambios</Link>
                        <Link href='#'>Preguntas Frecuentes</Link>
                        <Link href='#'>Terminos y Condiciones</Link>
                    </FooterList>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-base font-bold mb-2">Sobre Nosotros</h3>
                        <p className="mb-2">TecnoBuho es una tienda dedicada para proveer los ultimos y mejores dispositivos y accesorios para nuestros clientes. Con una enorme seleccion de Productos Apple, Impresoras, Computadoras, Audio, Conectividad, Perifericos, Accesorios, etc.</p>
                        <p>&copy; {new Date().getFullYear()} TecnoBuho. Todos los derechos reservados</p>
                    </div>
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">Siguenos en las redes</h3>
                        <div className="flex gap-2">
                            <Link href='#'>
                                <MdFacebook size={24} />
                            </Link>
                            <Link href='#'>
                                <AiFillTwitterCircle size={24} />
                            </Link>
                            <Link href='#'>
                                <AiFillInstagram size={24} />
                            </Link>
                            <Link href='#'>
                                <AiFillYoutube size={24} />
                            </Link>
                        </div>
                    </FooterList>
                </div>
            </Container>
        </footer>
    );
}
 
export default Footer;